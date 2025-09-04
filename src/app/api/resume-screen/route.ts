import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

interface JobRequirements {
  position: string;
  required_skills: string[];
  preferred_skills: string[];
  experience_level: string;
  education_requirements: string;
  company_description: string;
}

interface ScreeningResult {
  overall_score: number;
  match_percentage: number;
  strengths: string[];
  concerns: string[];
  missing_skills: string[];
  experience_assessment: string;
  education_match: string;
  recommendation: 'Strong Match' | 'Good Match' | 'Partial Match' | 'Poor Match';
  interview_questions: string[];
  summary: string;
}

export async function POST(request: NextRequest) {
  console.log('=== RESUME SCREEN API CALLED ===');
  try {
    console.log('Getting form data...');
    const formData = await request.formData();
    const resumeFile = formData.get('resume') as File;
    const jobRequirementsJson = formData.get('jobRequirements') as string;

    console.log('Resume file:', resumeFile ? resumeFile.name : 'null', resumeFile ? resumeFile.type : 'null');
    console.log('Job requirements:', jobRequirementsJson);

    if (!resumeFile) {
      return NextResponse.json(
        { error: 'No resume file uploaded' },
        { status: 400 }
      );
    }

    if (!jobRequirementsJson) {
      return NextResponse.json(
        { error: 'Job requirements are required' },
        { status: 400 }
      );
    }

    let jobRequirements: JobRequirements;
    try {
      jobRequirements = JSON.parse(jobRequirementsJson);
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid job requirements format' },
        { status: 400 }
      );
    }

    // Validate file type - Claude vision API supports images only for now
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(resumeFile.type)) {
      return NextResponse.json(
        { error: 'Currently only image formats (JPG, PNG) are supported. Please upload a screenshot or image of your resume, or convert PDF to image format.' },
        { status: 400 }
      );
    }

    // Validate file size (10MB limit)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (resumeFile.size > maxSize) {
      return NextResponse.json(
        { error: 'File too large. Please upload files under 10MB.' },
        { status: 400 }
      );
    }

    // Convert file to base64 for Claude
    console.log('Converting resume to base64...');
    const buffer = await resumeFile.arrayBuffer();
    const base64Data = Buffer.from(buffer).toString('base64');
    console.log('Resume converted, size:', base64Data.length);
    
    // Determine media type for Claude
    const mediaType = resumeFile.type;

    // Screen resume using Claude
    console.log('Calling Claude API for resume screening...');
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
              text: `Please analyze this resume against the following job requirements and provide a comprehensive screening assessment:

JOB REQUIREMENTS:
- Position: ${jobRequirements.position}
- Required Skills: ${jobRequirements.required_skills.join(', ')}
- Preferred Skills: ${jobRequirements.preferred_skills.join(', ')}
- Experience Level: ${jobRequirements.experience_level}
- Education Requirements: ${jobRequirements.education_requirements}
- Company: ${jobRequirements.company_description}

Please analyze the resume and provide the assessment in this JSON format:

{
  "overall_score": [numeric score from 1-100],
  "match_percentage": [percentage match 0-100],
  "strengths": [
    "List of candidate's key strengths that align with job requirements",
    "Include specific skills, experiences, and achievements from resume"
  ],
  "concerns": [
    "List of potential concerns or red flags",
    "Areas where candidate may not meet requirements"
  ],
  "missing_skills": [
    "List of required skills not found in resume",
    "Skills gaps that need to be addressed"
  ],
  "experience_assessment": "Detailed assessment of candidate's experience level and relevance",
  "education_match": "Assessment of education background vs requirements",
  "recommendation": "Strong Match|Good Match|Partial Match|Poor Match",
  "interview_questions": [
    "5 specific questions to ask this candidate based on their background",
    "Focus on validating skills and addressing any concerns"
  ],
  "summary": "2-3 sentence executive summary of the candidate's fit for the role"
}

IMPORTANT GUIDELINES:
- Be thorough and objective in your analysis
- Look for relevant experience, skills, achievements, and career progression
- Consider both hard and soft skills mentioned in the resume
- Assess cultural fit indicators if present
- Be constructive in identifying areas for improvement
- Base scoring on how well the candidate matches the specific job requirements
- Return ONLY the JSON object, no additional text`,
            },
          ],
        },
      ],
    });

    const responseText = message.content[0]?.type === 'text' ? message.content[0].text : '';
    console.log('Claude response received:', responseText.substring(0, 200));
    
    // Parse the JSON response from Claude
    let screeningResult: ScreeningResult;
    try {
      screeningResult = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse Claude response:', responseText);
      return NextResponse.json(
        { error: 'Failed to parse screening results' },
        { status: 500 }
      );
    }

    // Validate screening result structure
    const requiredFields = ['overall_score', 'match_percentage', 'strengths', 'concerns', 'missing_skills', 
                           'experience_assessment', 'education_match', 'recommendation', 'interview_questions', 'summary'];
    for (const field of requiredFields) {
      if (!(field in screeningResult)) {
        console.error(`Missing field: ${field}`);
        return NextResponse.json(
          { error: `Invalid screening result structure: missing ${field}` },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      data: screeningResult,
      metadata: {
        fileName: resumeFile.name,
        fileSize: resumeFile.size,
        fileType: resumeFile.type,
        position: jobRequirements.position,
        processedAt: new Date().toISOString(),
      },
    });

  } catch (error) {
    console.error('Resume screening error:', error);
    
    // Return more specific error messages
    let errorMessage = 'Failed to screen resume. Please try again.';
    if (error instanceof Error) {
      if (error.message.includes('timeout')) {
        errorMessage = 'Resume screening timed out. Please try a smaller file or try again.';
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