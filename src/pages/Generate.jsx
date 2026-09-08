import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Container } from '../components/ui/Container';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { FormGroup } from '../components/ui/FormGroup';
import { Input } from '../components/ui/Input';
import { TextArea } from '../components/ui/TextArea';
import { Select } from '../components/ui/Select';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Spinner } from '../components/ui/Spinner';
import { ErrorMessage } from '../components/ui/ErrorMessage';
import { generateStartupIdea } from '../services';
import { parseStartupIdea } from '../utils';

/**
 * Maps technical and network errors to clean, user-friendly messages
 * without exposing sensitive API keys or technical trace details.
 *
 * @param {Error} error - The caught error
 * @returns {{ title: string, message: string }} User-friendly error object
 */
function getFriendlyErrorMessage(error) {
  const rawMsg = error?.message || '';

  // 1. Missing or unconfigured API key
  if (
    rawMsg.includes('VITE_GEMINI_API_KEY') ||
    rawMsg.includes('API key is not configured') ||
    rawMsg.includes('API_KEY_INVALID') ||
    rawMsg.includes('API key not valid')
  ) {
    return {
      title: 'API Configuration Issue',
      message:
        'The Gemini API key is missing or invalid. Please check your application configuration in .env.local.',
    };
  }

  // 2. Malformed or unparseable AI response
  if (rawMsg === 'MALFORMED_RESPONSE' || rawMsg.includes('empty response')) {
    return {
      title: 'AI Processing Error',
      message:
        'Something went wrong while processing the AI response. Please try again.',
    };
  }

  // 3. Network or connection issues
  if (
    rawMsg.includes('Failed to fetch') ||
    rawMsg.includes('network') ||
    rawMsg.includes('NetworkError') ||
    rawMsg.includes('timeout') ||
    rawMsg.includes('ECONNREFUSED')
  ) {
    return {
      title: 'Network Connection Error',
      message:
        'Unable to generate your startup idea right now. Please check your connection and try again.',
    };
  }

  // 4. Rate limit / quota exceeded
  if (
    rawMsg.includes('429') ||
    rawMsg.includes('quota') ||
    rawMsg.includes('RESOURCE_EXHAUSTED')
  ) {
    return {
      title: 'Service Temporarily Busy',
      message:
        'The Gemini AI service is experiencing high demand. Please wait a moment and try again.',
    };
  }

  // 5. General fallback
  return {
    title: 'Unable to Generate Startup Idea',
    message:
      'Unable to generate your startup idea right now. Please check your connection and try again.',
  };
}

/**
 * Generate Idea Page UI for IdeaForge AI
 * Phase 19: Loading States and Error Handling:
 * - Collects Startup Interests, Skills, Budget, Audience, Goal
 * - Displays animated Spinner & status during Gemini generation
 * - Disables all form inputs and button to prevent double-submissions
 * - Catches errors, logs details via console.error, and renders user-friendly ErrorMessage
 * - Provides interactive "Try Again" retry action with preserved form inputs
 * - Parses structured idea and navigates to /result upon success
 * 
 * Follows the clean, light-mode educational design system.
 */
export function Generate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    interests: '',
    skills: '',
    budget: '',
    audience: '',
    goal: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorState, setErrorState] = useState(null);

  const budgetOptions = [
    { value: 'low', label: 'Zero / Minimal Budget ($0 - $100)' },
    { value: 'moderate', label: 'Student / Lean Budget ($100 - $1,000)' },
    { value: 'medium', label: 'Moderate Budget ($1,000 - $5,000)' },
    { value: 'high', label: 'High Budget ($5,000+)' },
  ];

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleReset = () => {
    if (isSubmitting) return;
    setFormData({
      interests: '',
      skills: '',
      budget: '',
      audience: '',
      goal: '',
    });
    setErrorState(null);
  };

  const executeGeneration = async () => {
    if (isSubmitting) return; // Prevent double submission

    setIsSubmitting(true);
    setErrorState(null);

    try {
      // Call Gemini service layer to generate raw response
      const rawResponse = await generateStartupIdea(formData);

      // Phase 18: Parse raw Gemini response into consistent structured object
      const structuredIdea = parseStartupIdea(rawResponse);

      // Validate response content
      if (!structuredIdea.startupName && !structuredIdea.problem) {
        throw new Error('MALFORMED_RESPONSE');
      }

      try {
        sessionStorage.setItem('ideaforge_current_idea', JSON.stringify(structuredIdea));
      } catch {
        // Ignore sessionStorage errors (e.g. private browsing restrictions)
      }

      navigate('/result', { state: { idea: structuredIdea } });
    } catch (err) {
      // Log original error for development/debugging
      console.error('Error generating startup idea:', err);
      setErrorState(getFriendlyErrorMessage(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    executeGeneration();
  };

  const handleRetry = () => {
    executeGeneration();
  };

  return (
    <Layout currentPath="/generate">
      <div className="py-8 sm:py-14 bg-gradient-to-b from-blue-50/40 via-slate-50/20 to-white">
        <Container size="md">
          {/* Header */}
          <div className="animate-fade-in text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="mb-3.5">
              <Badge variant="purple" size="md" className="shadow-xs">
                Interactive Startup Generator
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3.5">
              Configure Your Startup Concept
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Enter your domain interests, technical skills, budget limits, and entrepreneurial goals below. IdeaForge AI will synthesize these parameters into an actionable startup concept.
            </p>
          </div>

          {/* Main Form Card */}
          <Card className="animate-fade-up delay-75 shadow-md shadow-slate-200/50 border-slate-200/80 bg-white overflow-hidden">
            <CardHeader className="bg-slate-50/80 border-b border-slate-200/80 px-5 sm:px-8 py-5">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div>
                  <CardTitle as="h2" className="text-xl font-bold text-slate-900">
                    Startup Parameters
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm mt-0.5">
                    All 5 fields help Gemini AI tailor a feasible, customized, and defensible business blueprint.
                  </CardDescription>
                </div>
                <Badge variant="secondary" size="sm">
                  5 Input Dimensions
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="p-5 sm:p-8 space-y-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* SECTION 1: Problem Space & Passions (Amber Accent) */}
                <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/30 border border-amber-200/60 space-y-4">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-amber-100">
                    <Badge variant="amber" size="sm">
                      Step 1
                    </Badge>
                    <h3 className="font-bold text-slate-900 text-base">
                      Problem Space & Passions
                    </h3>
                  </div>

                  <FormGroup
                    label="Startup Interests & Industry Domain"
                    htmlFor="interests"
                    required
                    helperText="Specify the industries or problem spaces that excite you (e.g. EdTech, HealthTech, Sustainable Energy, B2B Productivity, AI Tools)."
                  >
                    <TextArea
                      id="interests"
                      name="interests"
                      value={formData.interests}
                      onChange={handleChange('interests')}
                      placeholder="e.g. Higher education tools, campus food delivery logistics, smart timetable automation..."
                      rows={3}
                      disabled={isSubmitting}
                      required
                    />
                  </FormGroup>
                </div>

                {/* SECTION 2: Technical & Domain Skills (Purple Accent) */}
                <div className="p-5 sm:p-6 rounded-2xl bg-purple-50/30 border border-purple-200/60 space-y-4">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-purple-100">
                    <Badge variant="purple" size="sm">
                      Step 2
                    </Badge>
                    <h3 className="font-bold text-slate-900 text-base">
                      Technical & Domain Capabilities
                    </h3>
                  </div>

                  <FormGroup
                    label="Skills & Capabilities"
                    htmlFor="skills"
                    required
                    helperText="List programming languages, frameworks, domain expertise, or business strengths you or your team possess."
                  >
                    <TextArea
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange('skills')}
                      placeholder="e.g. React, JavaScript, Python, REST APIs, UI/UX design, data analysis..."
                      rows={3}
                      disabled={isSubmitting}
                      required
                    />
                  </FormGroup>
                </div>

                {/* SECTION 3: Feasibility Constraints & Venture Goal (Sky & Emerald Accent) */}
                <div className="p-5 sm:p-6 rounded-2xl bg-sky-50/30 border border-sky-200/60 space-y-6">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-sky-100">
                    <Badge variant="sky" size="sm">
                      Step 3
                    </Badge>
                    <h3 className="font-bold text-slate-900 text-base">
                      Constraints & Venture Goal
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    {/* Budget Select */}
                    <FormGroup
                      label="Available Budget"
                      htmlFor="budget"
                      required
                      helperText="Anticipated capital for prototyping."
                    >
                      <Select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange('budget')}
                        placeholder="Select budget tier"
                        options={budgetOptions}
                        disabled={isSubmitting}
                        required
                      />
                    </FormGroup>

                    {/* Target Audience */}
                    <FormGroup
                      label="Target Audience"
                      htmlFor="audience"
                      required
                      helperText="Primary user persona or customer segment."
                    >
                      <Input
                        id="audience"
                        name="audience"
                        type="text"
                        value={formData.audience}
                        onChange={handleChange('audience')}
                        placeholder="e.g. College students, freelancers..."
                        disabled={isSubmitting}
                        required
                      />
                    </FormGroup>
                  </div>

                  {/* Startup Goal */}
                  <FormGroup
                    label="Primary Startup Goal"
                    htmlFor="goal"
                    required
                    helperText="Define what success looks like for this concept (e.g. College capstone project, scalable venture, side income, hackathon MVP)."
                  >
                    <TextArea
                      id="goal"
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange('goal')}
                      placeholder="e.g. Build a functioning MVP for a college exhibition with commercial launch potential..."
                      rows={3}
                      disabled={isSubmitting}
                      required
                    />
                  </FormGroup>
                </div>

                {/* Active Generation Loading Indicator */}
                {isSubmitting && (
                  <div
                    role="status"
                    className="animate-fade-in p-5 sm:p-6 rounded-2xl bg-blue-50 border border-blue-200 text-slate-800 flex items-center gap-4 shadow-xs"
                  >
                    <Spinner size="md" color="primary" className="shrink-0" />
                    <div>
                      <p className="font-bold text-sm sm:text-base text-blue-950 flex items-center">
                        <span className="inline-block w-2 h-2 rounded-full bg-blue-600 animate-subtle-pulse mr-2" />
                        Generating your startup idea...
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                        IdeaForge AI is synthesizing your inputs with Gemini. This may take a few seconds.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Banner with Retry */}
                {errorState && !isSubmitting && (
                  <ErrorMessage
                    title={errorState.title}
                    message={errorState.message}
                    onRetry={handleRetry}
                    retryLabel="Try Again"
                  />
                )}

                {/* Form Action Controls */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto shadow-md shadow-blue-500/20"
                    >
                      {isSubmitting ? (
                        <>
                          <Spinner size="sm" color="white" className="-ml-1 mr-2" />
                          Generating your startup idea...
                        </>
                      ) : (
                        <>
                          Generate Startup Idea
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </>
                      )}
                    </Button>

                    <Button
                      type="button"
                      variant="secondary"
                      size="lg"
                      disabled={isSubmitting}
                      onClick={handleReset}
                      className="w-full sm:w-auto"
                    >
                      Reset
                    </Button>
                  </div>

                  <p className="text-xs text-slate-400 text-center sm:text-right">
                    Generates a structured business model, problem statement, and MVP roadmap.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Helpful Tips Card */}
          <div className="card-hover-lift mt-8 bg-sky-50/60 border border-sky-100/90 rounded-2xl p-5 sm:p-6 text-slate-700 text-sm shadow-xs">
            <h3 className="font-bold text-slate-900 mb-2.5 flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tips for generating high-quality startup concepts
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
              <li><strong className="text-slate-800">Be specific about skills:</strong> Mentioning exact tools (e.g. React, Python) yields more targeted technical architectures.</li>
              <li><strong className="text-slate-800">Keep budget realistic:</strong> College projects receive more viable bootstrapping advice with student tiers.</li>
              <li><strong className="text-slate-800">Focus on genuine problems:</strong> Real friction experienced by peers or local communities produces the most defensible models.</li>
            </ul>
          </div>
        </Container>
      </div>
    </Layout>
  );
}

export default Generate;
