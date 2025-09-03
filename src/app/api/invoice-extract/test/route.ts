import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

export async function GET() {
  try {
    // Check if API key is configured
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        status: 'error',
        message: 'ANTHROPIC_API_KEY not configured'
      });
    }

    // Test basic Anthropic connection
    const anthropic = new Anthropic({
      apiKey: apiKey,
    });

    const message = await anthropic.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 100,
      messages: [
        {
          role: 'user',
          content: 'Hello, are you working?'
        }
      ]
    });

    return NextResponse.json({
      status: 'success',
      message: 'API is working correctly',
      response: message.content[0]?.type === 'text' ? message.content[0].text : 'No text response'
    });

  } catch (error) {
    console.error('Test API error:', error);
    return NextResponse.json({
      status: 'error',
      message: error instanceof Error ? error.message : 'Unknown error',
      error: error
    });
  }
}