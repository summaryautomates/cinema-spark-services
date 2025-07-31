
import { Router } from 'express';

const router = Router();

interface UserAnswers {
  industry: string;
  aiAdoption: string;
  focusAreas: string[];
  teamSize: string;
  challenge: string;
  consultantExperience: string;
  email: string;
  name: string;
}

router.post('/generate-report', async (req, res) => {
  try {
    const { answers }: { answers: UserAnswers } = req.body;

    // Validate required fields
    if (!answers.email || !answers.name) {
      return res.status(400).json({ error: 'Email and name are required' });
    }

    const prompt = `You are an expert AI consultant. Based on the following survey answers, create a concise AI Readiness Report in HTML format:

Survey Answers:
- Industry: ${answers.industry}
- AI adoption level: ${answers.aiAdoption}
- Focus areas: ${answers.focusAreas.join(', ')}
- Team size: ${answers.teamSize}
- Main challenge: ${answers.challenge}
- Previous AI consultant experience: ${answers.consultantExperience}

Please create a report that includes:
1. An AI maturity score (Beginner, Intermediate, or Advanced)
2. 2-3 specific, actionable AI recommendations relevant to their industry and focus areas
3. A brief explanation of why these recommendations fit their situation
4. A call-to-action for a free consultation
5. Use HTML formatting with proper headings, bullet points, and emojis for visual appeal
6. Keep it professional but friendly, avoiding technical jargon

Format the response as clean HTML that can be displayed in a web component.`;

    // Make API call to OpenAI
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are an expert AI consultant who creates personalized business recommendations.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!openaiResponse.ok) {
      throw new Error('OpenAI API request failed');
    }

    const openaiData = await openaiResponse.json();
    const report = openaiData.choices[0]?.message?.content || '';

    // Store lead data (you can implement database storage here)
    console.log('New lead captured:', {
      name: answers.name,
      email: answers.email,
      industry: answers.industry,
      timestamp: new Date().toISOString()
    });

    // Send email with report (implement email service here)
    // await sendEmailReport(answers.email, answers.name, report);

    res.json({ 
      success: true, 
      report,
      message: 'Report generated successfully'
    });

  } catch (error) {
    console.error('Error generating report:', error);
    
    // Return fallback report
    const fallbackReport = generateFallbackReport(req.body.answers);
    res.json({ 
      success: true, 
      report: fallbackReport,
      message: 'Report generated with fallback content'
    });
  }
});

function generateFallbackReport(answers: UserAnswers): string {
  const industryMap: { [key: string]: string } = {
    'tech': 'Technology',
    'finance': 'Finance & Banking',
    'retail': 'Retail & E-commerce',
    'healthcare': 'Healthcare',
    'manufacturing': 'Manufacturing',
    'education': 'Education',
    'other': 'Business'
  };

  const adoptionMap: { [key: string]: string } = {
    'none': 'Beginner',
    'basic': 'Intermediate',
    'experiments': 'Intermediate',
    'adopted': 'Advanced'
  };

  const industry = industryMap[answers.industry] || 'Business';
  const readinessLevel = adoptionMap[answers.aiAdoption] || 'Intermediate';

  return `
    <div class="ai-readiness-report">
      <h2 style="color: #3b82f6; margin-bottom: 20px;">🚀 Your AI Readiness Assessment</h2>
      
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #1e293b; margin-bottom: 10px;">AI Readiness Score: ${readinessLevel}</h3>
        <p style="color: #64748b; line-height: 1.6;">Based on your ${industry} industry focus and current AI adoption level, your business is positioned to leverage AI for significant growth and efficiency gains.</p>
      </div>

      <h3 style="color: #1e293b; margin-bottom: 15px;">🎯 Personalized Recommendations:</h3>
      
      <div style="margin-bottom: 20px;">
        <h4 style="color: #059669; margin-bottom: 8px;">🤖 AI-Powered Process Automation</h4>
        <p style="color: #64748b; line-height: 1.6;">Implement intelligent automation in your ${answers.focusAreas.join(' and ')} operations to reduce manual work by 40-60% and improve accuracy.</p>
      </div>

      <div style="margin-bottom: 20px;">
        <h4 style="color: #0ea5e9; margin-bottom: 8px;">📊 Data-Driven Decision Making</h4>
        <p style="color: #64748b; line-height: 1.6;">Leverage AI analytics to transform your business data into actionable insights that drive strategic decisions and competitive advantage.</p>
      </div>

      <div style="margin-bottom: 20px;">
        <h4 style="color: #8b5cf6; margin-bottom: 8px;">🎯 Custom AI Strategy Development</h4>
        <p style="color: #64748b; line-height: 1.6;">Create a tailored AI implementation roadmap that aligns with your ${answers.teamSize} team structure and addresses your specific challenge: "${answers.challenge}"</p>
      </div>

      <div style="background: #eff6ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
        <h3 style="color: #1e293b; margin-bottom: 10px;">🚀 Ready to Get Started?</h3>
        <p style="color: #64748b; line-height: 1.6; margin-bottom: 15px;">Book your free 30-minute AI strategy consultation to discuss how these recommendations can be implemented in your business for maximum impact.</p>
        <p style="color: #3b82f6; font-weight: 600;">Next Step: Schedule your complimentary strategy session to create your personalized AI transformation plan.</p>
      </div>
    </div>
  `;
}

export default router;
