/**
 * Mock Startup Idea Generator & Utilities for IdeaForge AI
 * Phase 14: Mock Data Integration and Full Frontend Flow
 * 
 * Generates realistic, structured startup concepts from user input
 * without requiring external API calls.
 */

export const defaultStartupIdea = {
  name: 'CampusCart AI',
  tagline: 'Hyperlocal peer-to-peer campus grocery and essentials delivery for university dorms.',
  description:
    'A student-run logistics and delivery platform optimized for high-density campus housing. It combines micro-fulfillment with flexible peer couriers to deliver groceries, study supplies, and late-night snacks in under 20 minutes.',
  targetAudience:
    'University undergraduate and postgraduate students residing in on-campus dormitories and off-campus student housing complexes within a 1-mile radius.',
  problem:
    'Campus dining halls close early, traditional delivery apps levy exorbitant service and delivery fees on small orders ($5 delivery on a $4 snack), and students lack quick, affordable access to late-night grocery staples, print supplies, and emergency pharmaceuticals.',
  solution:
    'A localized peer delivery network where students traveling back from local supermarkets, dining halls, or campus centers fulfill delivery requests for nearby dorm residents, drastically reducing delivery fees to under $1.50 while providing student couriers with instant micro-earnings.',
  businessModel:
    'Two-sided peer marketplace connecting student shoppers with verified student peers. Order batching algorithms bundle deliveries heading to the same dorm building or floor to maximize courier efficiency.',
  revenueModel:
    'Flat $1.50 platform facilitation fee per order, optional $15/semester CampusCart Pass for free unlimited deliveries, and promotional placement fees from local student-focused retail vendors.',
  mvpFeatures: [
    'Peer order-matching engine based on dorm building and floor numbers',
    'Real-time order status notifications via SMS and lightweight web alerts',
    'Verified student-only courier onboarding using university .edu email verification',
    'Shared group cart enabling roommates to combine orders from the same merchant',
    'Secure escrow payout system releasing courier funds upon dorm doorstep delivery confirmation',
  ],
};

/**
 * Derives a catchy, professional startup name from user interests.
 */
function deriveStartupName(interests = '') {
  const lower = interests.toLowerCase();

  if (lower.includes('edu') || lower.includes('learn') || lower.includes('study') || lower.includes('course')) {
    return 'EduForge AI';
  }
  if (lower.includes('health') || lower.includes('med') || lower.includes('fit') || lower.includes('wellness')) {
    return 'PulseVita AI';
  }
  if (lower.includes('food') || lower.includes('deliver') || lower.includes('dining') || lower.includes('grocer')) {
    return 'DormDine Express';
  }
  if (lower.includes('fin') || lower.includes('money') || lower.includes('invest') || lower.includes('budget')) {
    return 'FinFlow AI';
  }
  if (lower.includes('green') || lower.includes('sustain') || lower.includes('eco') || lower.includes('energy')) {
    return 'EcoSphere Hub';
  }
  if (lower.includes('code') || lower.includes('dev') || lower.includes('software') || lower.includes('tech')) {
    return 'DevSprint AI';
  }

  // Fallback: extract the first meaningful word from the input
  const words = interests
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .split(/\s+/)
    .filter((w) => w.length > 2 && !['and', 'the', 'for', 'with'].includes(w.toLowerCase()));

  if (words.length > 0) {
    const capitalized = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
    return `${capitalized}Forge AI`;
  }

  return 'NovaVentures AI';
}

/**
 * Generates a structured startup idea concept synthesizing form inputs.
 * 
 * @param {Object} formData
 * @param {string} formData.interests - Startup interests / industry
 * @param {string} formData.skills - Technical / business skills
 * @param {string} formData.budget - Budget tier ('low', 'moderate', 'medium', 'high')
 * @param {string} formData.audience - Target audience
 * @param {string} formData.goal - Startup goal
 * @returns {Object} Structured startup idea object
 */
export function generateMockIdea(formData = {}) {
  const {
    interests = 'Smart Web Applications',
    skills = 'React, JavaScript, Web Technologies',
    budget = 'moderate',
    audience = 'College students and early adopters',
    goal = 'Build a functional MVP for exhibition and early user testing',
  } = formData;

  const name = deriveStartupName(interests);

  // Business models tailored by budget tier
  const businessModels = {
    low: 'Lean, bootstrapped freemium model with zero initial infrastructure costs. Utilizes serverless free tiers, organic peer referrals, and community-driven viral distribution.',
    moderate: 'Direct-to-user freemium platform featuring affordable monthly micro-subscriptions ($3–$6/month) and student group bundle discounts.',
    medium: 'Tiered subscription model with self-serve team accounts, tiered API usage allowances, and recurring billing for institutional or organizational users.',
    high: 'Enterprise SaaS licensing with custom deployment integrations, dedicated priority support, and multi-tenant organizational management.',
  };

  // Revenue models tailored by budget tier
  const revenueModels = {
    low: 'Freemium core with optional $2.99/mo premium tier for advanced export capabilities and affiliate partner integrations.',
    moderate: 'Monthly subscription ($4.99/user/month), flat $1 platform convenience fee per transaction, and sponsored placement by relevant local partners.',
    medium: 'Recurring SaaS tiers ($19/mo Pro, $69/mo Team), accompanied by custom feature add-ons and premium API access.',
    high: 'Annual recurring enterprise contracts ($1,200–$5,000/yr), onboarding consultancy services, and premium SLA guarantees.',
  };

  const cleanInterests = interests.trim() || 'Modern Digital Productivity';
  const cleanSkills = skills.trim() || 'React, Web Architecture & UI Design';
  const cleanAudience = audience.trim() || 'College students and young professionals';
  const cleanGoal = goal.trim() || 'Develop a viable prototype ready for exhibition and user validation';

  return {
    name,
    tagline: `An intelligent platform modernizing ${cleanInterests.toLowerCase()} for ${cleanAudience.toLowerCase()}.`,
    description: `A targeted, AI-assisted solution engineered specifically for ${cleanAudience}. It bridges existing market inefficiencies in ${cleanInterests} by leveraging modern web capabilities (${cleanSkills}) to deliver a fast, frictionless user experience.`,
    problem: `Currently, ${cleanAudience} face fragmented workflows, high friction, and prohibitive costs when engaging with ${cleanInterests}. Existing market solutions are bloated, unoptimized for student/lean budgets, and fail to address immediate everyday bottlenecks.`,
    solution: `An intuitive, accessible platform built with ${cleanSkills}. It centralizes core workflows into a streamlined dashboard, eliminating unnecessary manual overhead and enabling ${cleanAudience} to achieve their goals with speed and confidence.`,
    targetAudience: cleanAudience,
    businessModel: businessModels[budget] || businessModels.moderate,
    revenueModel: revenueModels[budget] || revenueModels.moderate,
    mvpFeatures: [
      `User dashboard tailored for ${cleanAudience} with quick-access workflow shortcuts`,
      `Core processing engine built with ${cleanSkills} to resolve everyday friction in ${cleanInterests}`,
      'Automated status updates and lightweight alert notifications for real-time progress tracking',
      `Performance analytics and export tools aligned with your objective: "${cleanGoal}"`,
      'Fast, mobile-responsive interface with secure local session persistence and rapid sharing',
    ],
  };
}

/**
 * Formats a startup idea into readable plain text for clipboard copying.
 * 
 * @param {Object} idea - Structured startup idea object
 * @returns {string} Formatted plain text
 */
export function formatIdeaForClipboard(idea) {
  if (!idea) return '';

  const name = idea.startupName || idea.name || 'AI Startup Concept';
  const tagline = idea.tagline || '';
  const problem = idea.problem || '';
  const solution = idea.solution || '';
  const targetAudience = idea.targetAudience || '';
  const businessModel = idea.businessModel || '';
  const revenueModel = idea.revenueModel || '';
  const featuresList = (idea.mvpFeatures || [])
    .map((feature, index) => `  ${index + 1}. ${feature}`)
    .join('\n');

  return `========================================
${name.toUpperCase()}
========================================
Tagline: "${tagline}"

Problem Statement:
${problem}

Proposed Solution:
${solution}

Target Audience:
${targetAudience}

Business Model:
${businessModel}

Revenue Model:
${revenueModel}

Recommended MVP Features:
${featuresList || '  (None specified)'}
========================================
Generated with IdeaForge AI (Gemini API)
========================================`;
}

