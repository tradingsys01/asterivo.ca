import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

interface BusinessInfo {
  industry: string;
  target_audience: string;
  business_type: string;
  tone: string;
  goals: string[];
}

interface SocialMediaPost {
  platform: string;
  content: string;
  hashtags: string[];
  engagement_tips: string[];
}

interface GeneratedContent {
  posts: SocialMediaPost[];
  content_strategy: string;
}

export async function POST(request: NextRequest) {
  console.log('=== SOCIAL MEDIA GENERATE API CALLED ===');
  try {
    console.log('Getting request data...');
    const businessInfo: BusinessInfo = await request.json();
    console.log('Business info received:', JSON.stringify(businessInfo, null, 2));

    // Validate required fields
    if (!businessInfo.industry || !businessInfo.target_audience || !businessInfo.business_type) {
      return NextResponse.json(
        { error: 'Missing required fields: industry, target_audience, and business_type are required' },
        { status: 400 }
      );
    }

    // Generate social media content using Claude
    console.log('Calling Claude API for social media generation...');
    const message = await anthropic.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 4000,
      messages: [
        {
          role: 'user',
          content: `You are a professional social media marketing expert. Generate comprehensive social media content for a business with the following information:

Business Details:
- Industry: ${businessInfo.industry}
- Business Type: ${businessInfo.business_type}
- Target Audience: ${businessInfo.target_audience}
- Brand Tone: ${businessInfo.tone}
- Marketing Goals: ${businessInfo.goals.join(', ') || 'General brand awareness'}

Please generate content for 5 different social media platforms and provide a comprehensive content strategy. Return the response in the following JSON format:

{
  "content_strategy": "A detailed 2-3 sentence strategy explaining the overall approach, posting frequency recommendations, and key themes that would work best for this business and audience",
  "posts": [
    {
      "platform": "LinkedIn",
      "content": "A professional LinkedIn post (150-200 words) with industry insights, thought leadership angle, or business tips. Include a compelling hook, valuable information, and a call-to-action.",
      "hashtags": ["hashtag1", "hashtag2", "hashtag3", "hashtag4", "hashtag5"],
      "engagement_tips": ["tip1", "tip2", "tip3"]
    },
    {
      "platform": "Facebook",
      "content": "A Facebook post (100-150 words) that's more conversational and community-focused. Include storytelling elements, customer benefits, or behind-the-scenes content.",
      "hashtags": ["hashtag1", "hashtag2", "hashtag3"],
      "engagement_tips": ["tip1", "tip2", "tip3"]
    },
    {
      "platform": "Instagram",
      "content": "An Instagram caption (80-125 words) that's visual-focused and engaging. Include emojis, lifestyle elements, and strong visual cues. Mention this should pair with an image.",
      "hashtags": ["hashtag1", "hashtag2", "hashtag3", "hashtag4", "hashtag5", "hashtag6"],
      "engagement_tips": ["tip1", "tip2", "tip3"]
    },
    {
      "platform": "Twitter",
      "content": "A concise Twitter post (220-280 characters) that's punchy, timely, and shareable. Include trending elements or current events when relevant.",
      "hashtags": ["hashtag1", "hashtag2", "hashtag3"],
      "engagement_tips": ["tip1", "tip2", "tip3"]
    },
    {
      "platform": "TikTok",
      "content": "A TikTok video concept description (60-80 words) explaining the video content, hooks, and key messages. Focus on trends, entertainment value, and viral potential.",
      "hashtags": ["hashtag1", "hashtag2", "hashtag3", "hashtag4"],
      "engagement_tips": ["tip1", "tip2", "tip3"]
    }
  ]
}

Requirements:
- Tailor all content specifically to the ${businessInfo.industry} industry and ${businessInfo.business_type} business type
- Match the ${businessInfo.tone} tone consistently across all platforms
- Address the target audience: ${businessInfo.target_audience}
- Focus on the marketing goals: ${businessInfo.goals.join(', ') || 'brand awareness'}
- Use platform-appropriate hashtags (no # symbols in the JSON, just the hashtag text)
- Provide practical, actionable engagement tips for each platform
- Make the content feel authentic and valuable, not overly promotional
- Include specific industry terminology and pain points where relevant
- Ensure content encourages genuine engagement and interaction

Return ONLY the JSON object, no additional text.`,
        },
      ],
    });

    const responseText = message.content[0]?.type === 'text' ? message.content[0].text : '';
    console.log('Claude response received:', responseText.substring(0, 200));

    // Parse the JSON response from Claude
    let generatedContent: GeneratedContent;
    try {
      generatedContent = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse Claude response:', responseText);
      return NextResponse.json(
        { error: 'Failed to parse generated content' },
        { status: 500 }
      );
    }

    // Validate generated content structure
    if (!generatedContent.content_strategy || !generatedContent.posts || !Array.isArray(generatedContent.posts)) {
      console.error('Invalid content structure:', generatedContent);
      return NextResponse.json(
        { error: 'Invalid content structure received' },
        { status: 500 }
      );
    }

    // Validate each post has required fields
    for (const post of generatedContent.posts) {
      if (!post.platform || !post.content || !Array.isArray(post.hashtags) || !Array.isArray(post.engagement_tips)) {
        console.error('Invalid post structure:', post);
        return NextResponse.json(
          { error: 'Invalid post structure in generated content' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      data: generatedContent,
      metadata: {
        businessType: businessInfo.business_type,
        industry: businessInfo.industry,
        tone: businessInfo.tone,
        goals: businessInfo.goals,
        generatedAt: new Date().toISOString(),
      },
    });

  } catch (error) {
    console.error('Social media generation error:', error);
    
    // Return more specific error messages
    let errorMessage = 'Failed to generate social media content. Please try again.';
    if (error instanceof Error) {
      if (error.message.includes('timeout')) {
        errorMessage = 'Content generation timed out. Please try again.';
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