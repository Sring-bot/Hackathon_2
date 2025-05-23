// Creating a more direct implementation using fetch
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const emotionalSupportContext = `You are an empathetic AI counselor providing a safe, supportive space. Format your responses in this structured way:

1. Start with a warm, personal greeting using "Dear friend" or a similar caring address
2. Format your main response points using markdown:
   - Use **bold** for key emotional validation points
   - Break down advice into clear, numbered steps
   - Use bullet points for actionable suggestions
3. Focus on these aspects:
   - Validate their feelings with warmth and understanding
   - Highlight their strengths and resilience
   - Offer practical, positive steps forward
   - End with an encouraging note

Keep responses concise but impactful, focusing on building confidence and well-being. Use phrases like:
- "I hear how strong you've been..."
- "Let's focus on your incredible capacity to..."
- "Together, we can explore..."

Always end with a gentle question or invitation to share more.

Structure example:
Dear friend,

**I hear how deeply you're feeling this.** Let's explore this together:

1. [Validation point]
2. [Strength identification]
3. [Positive step forward]

• [Practical suggestion]
• [Supportive action]

Remember: You have the inner strength to handle this.

What small step would feel manageable for you right now?`;

export async function getChatResponse(message: string): Promise<string> {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('Missing API key');
    }

    const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${emotionalSupportContext}\n\nUser message: ${message}\n\nRemember to format your response exactly as shown in the structure example, using markdown formatting for better readability.`
              }
            ]
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error('API Error:', errorData);
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    }

    throw new Error('Unexpected response format');
  } catch (error: any) {
    console.error('Error getting chat response:', error);

    if (!import.meta.env.VITE_GEMINI_API_KEY) {
      return 'Please set your Gemini API key in the .env file to enable chat functionality.';
    }

    if (error.message?.includes('API error: 404')) {
      return 'Error: Could not access the Gemini API. Please check if your API key has the correct permissions.';
    }

    return `Error: ${error.message || 'An unexpected error occurred'}`;
  }
}