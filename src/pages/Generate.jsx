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
 * Enhanced with interactive SaaS form layout:
 * - Structured step containers with purposeful accent highlights
 * - Crisp input focus and hover states
 * - Animated loading indicator & double-submit prevention
 * - Friendly error handling with retry callback
 * - Preserves all form state & Gemini integration logic
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

      // Parse raw Gemini response into consistent structured object
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
      <div className="relative overflow-hidden py-10 sm:py-16 bg-gradient-to-b from-blue-50/50 via-slate-50/30 to-white">
        {/* Subtle Ambient Grid Background */}
        <div aria-hidden="true" className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />
        <div aria-hidden="true" className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <Container size="md">
          {/* Header Section */}
          <div className="animate-fade-in text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="mb-3.5">
              <Badge variant="purple" size="md" className="gap-2 shadow-xs py-1.5 px-3.5">
                <svg className="w-3.5 h-3.5 text-purple-600 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
                <span className="font-semibold text-purple-900">Guided Ideation Workflow</span>
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3.5">
              Generate Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">
                Startup Blueprint
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Provide your technical skills, domain interests, and budget constraints. IdeaForge AI uses Gemini to synthesize a complete business model and MVP roadmap.
            </p>
          </div>

          {/* Generator Form Card */}
          <Card className="animate-fade-up border-slate-200/90 shadow-md shadow-slate-200/50 bg-white overflow-hidden">
            <CardHeader className="bg-slate-50/80 border-b border-slate-100 p-5 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <CardTitle as="h2" className="text-xl font-bold text-slate-900">
                    Startup Parameters Form
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm mt-0.5">
                    All parameters are tailored to generate a viable, realistic venture concept.
                  </CardDescription>
                </div>
                <Badge variant="primary" size="sm" className="hidden sm:inline-flex font-semibold">
                  3 Simple Steps
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="p-6 sm:p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* STEP 1: Startup Interests (Amber Accent) */}
                <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/25 border border-amber-200/70 space-y-4 transition-colors">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-amber-100">
                    <Badge variant="amber" size="sm" className="font-bold">
                      Step 1
                    </Badge>
                    <h3 className="font-bold text-slate-900 text-base">
                      Startup Interests & Domain Focus
                    </h3>
                  </div>

                  <FormGroup
                    label="Startup Interests & Industry"
                    htmlFor="interests"
                    required
                    helperText="Specify industries, technologies, or domain problems you want to explore (e.g. HealthTech, EdTech, Micro-SaaS)."
                  >
                    <TextArea
                      id="interests"
                      name="interests"
                      value={formData.interests}
                      onChange={handleChange('interests')}
                      placeholder="e.g. AI-powered fitness apps, sustainable food logistics, university student productivity..."
                      rows={3}
                      disabled={isSubmitting}
                      required
                    />
                  </FormGroup>
                </div>

                {/* STEP 2: Skills & Capabilities (Purple Accent) */}
                <div className="p-5 sm:p-6 rounded-2xl bg-purple-50/25 border border-purple-200/70 space-y-4 transition-colors">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-purple-100">
                    <Badge variant="purple" size="sm" className="font-bold">
                      Step 2
                    </Badge>
                    <h3 className="font-bold text-slate-900 text-base">
                      Skills & Technical Capabilities
                    </h3>
                  </div>

                  <FormGroup
                    label="Skills & Capabilities"
                    htmlFor="skills"
                    required
                    helperText="Programming languages, design tools, or business expertise available for building the MVP."
                  >
                    <TextArea
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange('skills')}
                      placeholder="e.g. React, Node.js, Python, UI/UX Design, Growth Marketing..."
                      rows={3}
                      disabled={isSubmitting}
                      required
                    />
                  </FormGroup>
                </div>

                {/* STEP 3: Constraints & Venture Goal (Sky Accent) */}
                <div className="p-5 sm:p-6 rounded-2xl bg-sky-50/25 border border-sky-200/70 space-y-6 transition-colors">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-sky-100">
                    <Badge variant="sky" size="sm" className="font-bold">
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
                    className="animate-fade-in p-5 sm:p-6 rounded-2xl bg-blue-50/90 border border-blue-200 text-slate-800 flex items-center gap-4 shadow-xs"
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
                  <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
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
                          Generating idea...
                        </>
                      ) : (
                        <>
                          <span>Generate Startup Idea</span>
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
                      Reset Form
                    </Button>
                  </div>

                  <p className="text-xs text-slate-400 text-center sm:text-right">
                    Generates structured business model, problem statement, and MVP roadmap.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Helpful Tips Card */}
          <div className="card-hover-lift mt-8 bg-sky-50/60 border border-sky-200/80 rounded-2xl p-5 sm:p-6 text-slate-700 text-sm shadow-xs">
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