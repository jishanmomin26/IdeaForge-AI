import { GoogleGenerativeAI } from '@google/generative-ai';

/**
 * Gemini Service Layer for IdeaForge AI
 * Phase 16: Service layer & API integration
 * 
 * Default model: 'gemini-1.5-flash'
 * Rationale: Fast inference speed, robust structured output capabilities,
 * and generous rate limits under the Google AI Studio free tier for college projects.
 */
export const DEFAULT_GEMINI_MODEL = 'gemini-1.5-flash';

/**
 * Validates and retrieves the Gemini API key from environment variables.
 * Follows Vite's standard client-side prefix: VITE_GEMINI_API_KEY.
 * 
 * @returns {string} The configured Gemini API key
 * @throws {Error} If the API key is missing or is still the default placeholder
 */
export function getGeminiApiKey() {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey || apiKey.trim() === '' || apiKey === 'your_gemini_api_key_here') {
    throw new Error(
      'Gemini API key is not configured. Please set your VITE_GEMINI_API_KEY in .env.local.'
    );
  }

  return apiKey.trim();
}

/**
 * Initializes and returns a GoogleGenerativeAI client instance using the configured API key.
 * 
 * @returns {GoogleGenerativeAI} The initialized Gemini SDK client
 */
export function getGeminiClient() {
  const apiKey = getGeminiApiKey();
  return new GoogleGenerativeAI(apiKey);
}

/**
 * Sends a text prompt to the Gemini API and returns the generated text response.
 * Handles network failures, invalid input, and API errors with descriptive messages.
 * 
 * @param {string} prompt - The text prompt to send to the Gemini model
 * @param {Object} [options] - Optional configuration overrides
 * @param {string} [options.modelName] - Gemini model identifier (defaults to 'gemini-1.5-flash')
 * @returns {Promise<string>} The generated text content from Gemini
 * @throws {Error} If prompt is empty, API key is missing, or the request fails
 */
export async function generateContentWithGemini(prompt, options = {}) {
  if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
    throw new Error('A valid, non-empty prompt string is required.');
  }

  const modelName = options.modelName || DEFAULT_GEMINI_MODEL;

  try {
    const client = getGeminiClient();
    const model = client.getGenerativeModel({ model: modelName });

    const result = await model.generateContent(prompt.trim());
    const response = await result.response;
    const text = response.text();

    if (!text) {
      throw new Error('Received an empty response from the Gemini API.');
    }

    return text;
  } catch (error) {
    // If it is our own configuration or validation error, rethrow directly
    if (error.message && error.message.includes('VITE_GEMINI_API_KEY')) {
      throw error;
    }

    // Wrap API/network errors with descriptive messaging for the frontend
    throw new Error(
      `Gemini API request failed: ${error.message || 'Unknown network or service error.'}`,
      { cause: error }
    );
  }
}
