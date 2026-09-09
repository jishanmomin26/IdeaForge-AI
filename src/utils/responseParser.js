/**
 * Response Parser Utility for IdeaForge AI
 * Phase 18: Response Parsing and Result Formatting
 * 
 * Converts raw Gemini text responses into a consistent structured startup-idea object.
 * Robust against Markdown headings, bold markers, bullet styles, and formatting variations.
 */

const SECTION_DEFINITIONS = [
  {
    key: 'startupName',
    aliases: ['Startup Name', 'Startup Idea Name', 'Name of the Startup', 'Name of Startup', 'Name'],
  },
  {
    key: 'tagline',
    aliases: ['Tagline', 'One-Sentence Pitch', 'One Sentence Pitch', 'Pitch', 'Tag Line'],
  },
  {
    key: 'problem',
    aliases: ['Problem Statement', 'Problem', 'Core Problem', 'Market Friction', 'The Problem'],
  },
  {
    key: 'solution',
    aliases: ['Proposed Solution', 'Solution', 'Product Solution', 'The Solution'],
  },
  {
    key: 'targetAudience',
    aliases: ['Target Audience', 'Target Market', 'Target Users', 'Target User', 'Customer Persona', 'Audience'],
  },
  {
    key: 'businessModel',
    aliases: ['Business Model', 'Operational Model', 'Business & Operational Model', 'Operations'],
  },
  {
    key: 'revenueModel',
    aliases: ['Revenue Model', 'Monetization Strategy', 'Monetization', 'Revenue Streams', 'Revenue Stream'],
  },
  {
    key: 'mvpFeatures',
    aliases: [
      'Recommended MVP Features',
      'MVP Features',
      'Key MVP Features',
      'Core MVP Features',
      'MVP Feature List',
      'MVP Roadmap',
      'MVP Modules',
      'Features',
    ],
  },
];

/**
 * Strips markdown emphasis, surrounding quotes, and leading/trailing punctuation from a string.
 * 
 * @param {string} text - Raw text to clean
 * @returns {string} Cleaned single or multi-line text
 */
function cleanText(text) {
  if (!text || typeof text !== 'string') return '';
  let cleaned = text.trim();

  let prev;
  do {
    prev = cleaned;
    cleaned = cleaned
      .replace(/^[*_#~`\s:–—-]+/, '')
      .replace(/[*_#~`\s]+$/, '')
      .replace(/^["'“‘]/, '')
      .replace(/["'”’]$/, '')
      .trim();
  } while (cleaned !== prev && cleaned.length > 0);

  return cleaned;
}

/**
 * Cleans an array of feature lines into clear, actionable bullet strings.
 * 
 * @param {string} rawFeaturesText - Raw block of text for MVP features
 * @returns {string[]} Array of cleaned feature descriptions
 */
function parseMvpFeatures(rawFeaturesText) {
  if (!rawFeaturesText || typeof rawFeaturesText !== 'string') return [];

  const lines = rawFeaturesText.split('\n');
  const features = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Remove markdown list indicators: numbers (1., 1)), bullets (-, *, •), brackets ([1])
    const withoutMarker = trimmed
      .replace(/^(?:\[?\d+[.)\]]|\*|-|•)\s*/, '')
      .trim();

    // Strip inline markdown bold/italic markers like **Feature Name**: to keep UI clean and consistent
    const normalized = withoutMarker.replace(/\*\*/g, '').replace(/__/g, '');
    const cleaned = cleanText(normalized);

    // Ensure it's a substantive feature string, not just a standalone heading or punctuation
    if (cleaned.length > 2 && !/^features?:?$/i.test(cleaned)) {
      features.push(cleaned);
    }
  }

  return features;
}

/**
 * Attempts to parse raw JSON responses if Gemini formatted the output as valid JSON.
 * 
 * @param {string} text - Raw response text
 * @returns {Object|null} Parsed object or null if not valid JSON
 */
function tryParseJson(text) {
  if (!text || typeof text !== 'string') return null;

  try {
    const stripped = text
      .replace(/^```(?:json)?\s*\n?/i, '')
      .replace(/\n?```\s*$/i, '')
      .trim();

    if (
      (stripped.startsWith('{') && stripped.endsWith('}')) ||
      (stripped.startsWith('[') && stripped.endsWith(']'))
    ) {
      const data = JSON.parse(stripped);
      if (data && typeof data === 'object' && !Array.isArray(data)) {
        const startupName = cleanText((data.startupName || data.name || '').replace(/\*\*/g, ''));
        return {
          startupName,
          name: startupName,
          tagline: cleanText((data.tagline || data.pitch || '').replace(/\*\*/g, '')),
          problem: cleanText((data.problem || data.problemStatement || '').replace(/\*\*/g, '')),
          solution: cleanText((data.solution || data.proposedSolution || '').replace(/\*\*/g, '')),
          targetAudience: cleanText((data.targetAudience || data.targetMarket || data.audience || '').replace(/\*\*/g, '')),
          businessModel: cleanText((data.businessModel || data.operationalModel || '').replace(/\*\*/g, '')),
          revenueModel: cleanText((data.revenueModel || data.monetization || '').replace(/\*\*/g, '')),
          mvpFeatures: Array.isArray(data.mvpFeatures)
            ? data.mvpFeatures.map((f) => cleanText(String(f)).replace(/\*\*/g, '')).filter(Boolean)
            : parseMvpFeatures(String(data.mvpFeatures || '')),
        };
      }
    }
  } catch {
    // Fall back to regex/text parsing
  }

  return null;
}

/**
 * Parses a raw Gemini text response into a structured startup-idea object.
 * Tolerant of common variations: bold markers, hashtags, numbered headings, colons.
 * 
 * @param {string} rawResponse - The raw text output returned by Gemini
 * @returns {Object} Structured startup idea containing:
 * - startupName {string}
 * - name {string} (alias for compatibility)
 * - tagline {string}
 * - problem {string}
 * - solution {string}
 * - targetAudience {string}
 * - businessModel {string}
 * - revenueModel {string}
 * - mvpFeatures {string[]}
 */
export function parseStartupIdea(rawResponse) {
  const fallback = {
    startupName: '',
    name: '',
    tagline: '',
    problem: '',
    solution: '',
    targetAudience: '',
    businessModel: '',
    revenueModel: '',
    mvpFeatures: [],
  };

  if (!rawResponse || typeof rawResponse !== 'string' || rawResponse.trim() === '') {
    return fallback;
  }

  // Check if Gemini returned JSON
  const jsonResult = tryParseJson(rawResponse);
  if (jsonResult) {
    return jsonResult;
  }

  const text = rawResponse.trim();

  // Find occurrences and starting positions of all section headings in the text
  const occurrences = [];

  for (const def of SECTION_DEFINITIONS) {
    for (const alias of def.aliases) {
      // Matches lines with optional markdown headings (#, ##), bullets (*, -), numbers (1., 2)), and bold (**)
      const escapedAlias = alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(
        `(?:^|\\n)[ \\t]*(?:\\*\\*)?[ \\t]*(?:(?:#{1,6}|[*>\\-])[ \\t]*)?(?:\\d+[.)\\]][ \\t]*)?(?:\\*\\*)?[ \\t]*${escapedAlias}[ \\t]*(?:\\*\\*)?[ \\t]*[:\\-–—]?[ \\t]*(.*)`,
        'gi'
      );

      let match;
      while ((match = regex.exec(text)) !== null) {
        // Calculate the position where content for this section begins
        const headerIndex = match.index;
        const inlineContent = match[1] ? match[1].trim() : '';
        const contentStartIndex = headerIndex + match[0].length - inlineContent.length;

        occurrences.push({
          key: def.key,
          headerIndex,
          contentStartIndex,
          inlineContent,
        });
      }
    }
  }

  // If no recognizable headers were found, return fallback safely
  if (occurrences.length === 0) {
    return fallback;
  }

  // Sort occurrences by their position in the text
  occurrences.sort((a, b) => a.headerIndex - b.headerIndex);

  // Keep only the first occurrence for each distinct key
  const seenKeys = new Set();
  const uniqueSections = [];

  for (const occ of occurrences) {
    if (!seenKeys.has(occ.key)) {
      seenKeys.add(occ.key);
      uniqueSections.push(occ);
    }
  }

  // Re-sort unique sections by their order of appearance
  uniqueSections.sort((a, b) => a.headerIndex - b.headerIndex);

  // Extract the text block between consecutive headers
  const extractedSections = {};

  for (let i = 0; i < uniqueSections.length; i++) {
    const current = uniqueSections[i];
    const next = uniqueSections[i + 1];

    const endIndex = next ? next.headerIndex : text.length;
    const block = text.slice(current.contentStartIndex, endIndex).trim();

    extractedSections[current.key] = block;
  }

  // Clean and format individual fields
  const startupName = cleanText((extractedSections.startupName || '').replace(/\*\*/g, ''));
  const tagline = cleanText((extractedSections.tagline || '').replace(/\*\*/g, ''));
  const problem = cleanText((extractedSections.problem || '').replace(/\*\*/g, ''));
  const solution = cleanText((extractedSections.solution || '').replace(/\*\*/g, ''));
  const targetAudience = cleanText((extractedSections.targetAudience || '').replace(/\*\*/g, ''));
  const businessModel = cleanText((extractedSections.businessModel || '').replace(/\*\*/g, ''));
  const revenueModel = cleanText((extractedSections.revenueModel || '').replace(/\*\*/g, ''));
  const mvpFeatures = parseMvpFeatures(extractedSections.mvpFeatures || '');

  return {
    startupName,
    name: startupName, // Maintained for compatibility with existing UI
    tagline,
    problem,
    solution,
    targetAudience,
    businessModel,
    revenueModel,
    mvpFeatures,
  };
}

export default parseStartupIdea;