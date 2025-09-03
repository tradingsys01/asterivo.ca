import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

interface ExtractedData {
  vendor: string;
  invoiceNumber: string;
  date: string;
  dueDate: string;
  total: string;
  tax: string;
  subtotal: string;
  lineItems: Array<{
    description: string;
    quantity: string;
    rate: string;
    amount: string;
  }>;
}

export async function POST(request: NextRequest) {
  console.log('=== INVOICE EXTRACT API CALLED ===');
  try {
    console.log('Getting form data...');
    const formData = await request.formData();
    const file = formData.get('file') as File;
    console.log('File received:', file ? file.name : 'null', file ? file.type : 'null');

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Validate file type - Claude vision API only supports image formats
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload JPG or PNG image files only. PDF files are not currently supported.' },
        { status: 400 }
      );
    }

    // Validate file size (10MB limit)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File too large. Please upload files under 10MB.' },
        { status: 400 }
      );
    }

    // Convert file to base64 for Claude
    console.log('Converting file to base64...');
    const buffer = await file.arrayBuffer();
    const base64Data = Buffer.from(buffer).toString('base64');
    console.log('File converted, size:', base64Data.length);
    
    // Determine media type for Claude (images only)
    const mediaType = file.type;

    // Extract text and data using Claude
    console.log('Calling Claude API...');
    const message = await anthropic.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 4000,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: mediaType as any,
                data: base64Data,
              },
            },
            {
              type: 'text',
              text: `Please analyze this document (invoice, receipt, or bill) and extract the following information in JSON format:

{
  "vendor": "Company/provider name that issued the document",
  "invoiceNumber": "Invoice/receipt/transaction number or ID",
  "date": "Document date (YYYY-MM-DD format)",
  "dueDate": "Due date if any (YYYY-MM-DD format, or empty string if not applicable)",
  "total": "Total amount ACTUALLY OWED OR PAID by the customer (not gross charges)",
  "tax": "Tax amount with currency symbol (or empty string if not shown)",
  "subtotal": "Subtotal before tax with currency symbol (or empty string if not shown)",
  "lineItems": [
    {
      "description": "Item or service description",
      "quantity": "Quantity as string (use '1' if not specified)",
      "rate": "Unit rate with currency symbol",
      "amount": "Line total with currency symbol"
    }
  ]
}

Important:
- This can be any type of financial document (invoice, receipt, medical bill, etc.)
- Return ONLY the JSON object, no additional text
- If a field cannot be found, use empty string ""
- For dates, use YYYY-MM-DD format
- Include currency symbols in monetary amounts ($, etc.)
- Extract all line items/services found in the document
- For medical/dental receipts, extract each service as a line item
- For the "total" field: Look for "Patient Portion", "Amount Due", "Balance Due", "Patient Payment", or similar - NOT gross charges before insurance
- If there are multiple totals (gross vs net), choose the amount the customer actually needs to pay
- Be consistent - always extract the same total amount for the same document
- Be as accurate as possible with the extracted data`,
            },
          ],
        },
      ],
    });

    const responseText = message.content[0]?.type === 'text' ? message.content[0].text : '';
    console.log('Claude response received:', responseText.substring(0, 200));
    
    // Parse the JSON response from Claude
    let extractedData: ExtractedData;
    try {
      extractedData = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse Claude response:', responseText);
      return NextResponse.json(
        { error: 'Failed to parse extracted data' },
        { status: 500 }
      );
    }

    // Validate extracted data structure
    const requiredFields = ['vendor', 'invoiceNumber', 'date', 'dueDate', 'total', 'tax', 'subtotal', 'lineItems'];
    for (const field of requiredFields) {
      if (!(field in extractedData)) {
        extractedData[field as keyof ExtractedData] = field === 'lineItems' ? [] : '' as any;
      }
    }

    return NextResponse.json({
      success: true,
      data: extractedData,
      metadata: {
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        processedAt: new Date().toISOString(),
      },
    });

  } catch (error) {
    console.error('Invoice extraction error:', error);
    
    // Return more specific error messages
    let errorMessage = 'Failed to process document. Please try again.';
    if (error instanceof Error) {
      if (error.message.includes('timeout')) {
        errorMessage = 'Document processing timed out. Please try a smaller file or try again.';
      } else if (error.message.includes('rate_limit')) {
        errorMessage = 'Too many requests. Please wait a moment and try again.';
      } else if (error.message.includes('authentication')) {
        errorMessage = 'Service temporarily unavailable. Please try again later.';
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}