import { GoogleGenerativeAI } from '@google/generative-ai';

/**
 * Gemini Service Layer for IdeaForge AI
 * Phase 16: Service layer & API integration
 * 
 * Default model: 'gemini-3.6-flash'
 * Rationale: Latest stable model offering fast inference, robust
 * structured generation, and generous free-tier allowances for college mini-projects.
 */
export const DEFAULT_GEMINI_MODEL = 'gemini-3.6-flash';

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
 * @param {string} [options.modelName] - Gemini model identifier (defaults to 'gemini-3.6-flash')
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

/**
 * Constructs a structured prompt for Gemini using user input parameters.
 * Requests practical college-level startup concept sections matching project requirements.
 * 
 * @param {Object} formData
 * @param {string} formData.interests - Startup interests / industry
 * @param {string} formData.skills - Skills & capabilities
 * @param {string} formData.budget - Budget tier ('low', 'moderate', 'medium', 'high')
 * @param {string} formData.audience - Target audience
 * @param {string} formData.goal - Startup goal
 * @returns {string} The formatted prompt string
 */
export function buildStartupPrompt(formData = {}) {
  const {
    interests = '',
    skills = '',
    budget = '',
    audience = '',
    goal = '',
  } = formData;

  const budgetLabels = {
    low: 'Zero / Minimal Budget ($0 - $100, bootstrapped)',
    moderate: 'Student / Lean Budget ($100 - $1,000)',
    medium: 'Moderate Budget ($1,000 - $5,000)',
    high: 'High Budget ($5,000+)',
  };

  const budgetDisplay = budgetLabels[budget] || budget || 'Student / Lean Budget ($100 - $1,000)';

  return `You are an expert startup advisor for college students and aspiring entrepreneurs.
Generate ONE practical, innovative, and defensible startup idea suitable for a college-level entrepreneurship project based on the following student inputs:

- Startup Interests & Industry: ${interests || 'Digital Education and Productivity'}
- Skills & Capabilities: ${skills || 'React, JavaScript, Web Development'}
- Available Budget: ${budgetDisplay}
- Target Audience: ${audience || 'College students and campus communities'}
- Primary Startup Goal: ${goal || 'Build a functional exhibition prototype and test with early users'}

Please structure the startup idea into the following explicit sections:
Startup Name: [Name of the startup]
Tagline: [A concise, impactful one-sentence pitch]
Problem: [The specific core friction or pain point faced by the target audience]
Solution: [How this product solves the problem leveraging the specified skills and budget]
Target Audience: [Detailed description of the primary user persona]
Business Model: [How the startup operates, creates value, and scales sustainably]
Revenue Model: [Practical, realistic monetization strategy suitable for the budget]
MVP Features:
- [Feature 1: Essential core workflow]
- [Feature 2: Key technical module solving the primary pain point]
- [Feature 3: User engagement or communication feature]
- [Feature 4: Milestone feature aligned with the startup goal]
- [Feature 5: Usability or onboarding feature]

IMPORTANT INSTRUCTIONS:
- Generate ONE practical startup idea only.
- Return ONLY the requested startup idea sections and content.
- Do NOT include any conversational intro (e.g. "Here is an idea", "Sure!") or outro text.
- Ensure the idea is feasible for college students to build as an MVP.`;
}

/**
 * Generates a startup idea from user form parameters using the Gemini API.
 * 
 * @param {Object} formData - Form input values from Generate.jsx
 * @returns {Promise<string>} The generated text response from Gemini
 */
export async function generateStartupIdea(formData) {
  const prompt = buildStartupPrompt(formData);
  return await generateContentWithGemini(prompt);
}

/**
 * Simple temporary extractor for a named section from plain text response.
 * Used in Phase 17 to bridge plain text to Result page prior to full parser in Phase 18.
 * 
 * @param {string} text - Raw Gemini response text
 * @param {string} fieldName - Section title to extract
 * @returns {string} Extracted section content or empty string
 */
export function extractSimpleField(text, fieldName) {
  if (!text || typeof text !== 'string') return '';
  const regex = new RegExp(
    `(?:^|\\n)(?:\\*\\*|#+\\s*)?(?:\\d+\\.\\s*)?${fieldName}[:\\s*-]+([\\s\\S]*?)(?=(?:\\n(?:\\*\\*|#+\\s*)?(?:\\d+\\.\\s*)?[A-Z][A-Za-z\\s]+:)|$)`,
    'i'
  );
  const match = text.match(regex);
  return match ? match[1].trim() : '';
}

/**
 * Simple temporary extractor for MVP bullet list items from plain text response.
 * 
 * @param {string} text - Raw Gemini response text
 * @returns {string[]} Array of extracted features or empty array
 */
export function extractSimpleFeatures(text) {
  if (!text || typeof text !== 'string') return [];
  const mvpSection = extractSimpleField(text, 'MVP Features');
  if (!mvpSection) return [];

  const lines = mvpSection
    .split('\n')
    .map((l) => l.replace(/^[-*•\d.)\s]+/, '').trim())
    .filter((l) => l.length > 0);

  return lines;
}

