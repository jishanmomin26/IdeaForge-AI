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
      <div className="py-6 sm:py-12">
        <Container size="md">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="mb-3">
              <Badge variant="primary" size="md">
                Interactive Startup Generator
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
              Configure Your Startup Concept
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Enter your domain interests, technical skills, budget limits, and entrepreneurial goals below. IdeaForge AI will synthesize these parameters into an actionable startup concept.
            </p>
          </div>

          {/* Main Form Card */}
          <Card className="shadow-sm border-slate-200 bg-white">
            <CardHeader className="bg-slate-50/70 border-b border-slate-200">
              <CardTitle as="h2" className="text-xl font-semibold text-slate-900">
                Startup Parameters
              </CardTitle>
              <CardDescription>
                All fields help the AI model tailor a feasible and defensible business concept.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Startup Interests */}
                <FormGroup
                  label="1. Startup Interests & Industry Domain"
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

                {/* 2. Skills & Capabilities */}
                <FormGroup
                  label="2. Skills & Capabilities"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* 3. Budget */}
                  <FormGroup
                    label="3. Available Budget"
                    htmlFor="budget"
                    required
                    helperText="Select your anticipated capital for prototyping and initial launch."
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

                  {/* 4. Target Audience */}
                  <FormGroup
                    label="4. Target Audience"
                    htmlFor="audience"
                    required
                    helperText="Who is the primary customer or user group you want to serve?"
                  >
                    <Input
                      id="audience"
                      name="audience"
                      type="text"
                      value={formData.audience}
                      onChange={handleChange('audience')}
                      placeholder="e.g. College students, freelance writers, small local cafes..."
                      disabled={isSubmitting}
                      required
                    />
                  </FormGroup>
                </div>

                {/* 5. Startup Goal */}
                <FormGroup
                  label="5. Primary Startup Goal"
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

                {/* Active Generation Loading Indicator */}
                {isSubmitting && (
                  <div
                    role="status"
                    className="p-4 sm:p-5 rounded-xl bg-blue-50 border border-blue-200 text-slate-800 flex items-center gap-3.5 shadow-sm"
                  >
                    <Spinner size="md" color="primary" className="shrink-0" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base text-blue-950">
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
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
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
          <div className="mt-8 bg-blue-50/60 border border-blue-100 rounded-xl p-6 text-slate-700 text-sm">
            <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tips for generating high-quality startup concepts
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 list-disc list-inside">
              <li>Be specific about your skills — mentioning exact tools (e.g. React, Python) yields more targeted technical architectures.</li>
              <li>Keep your budget realistic for college projects to receive viable bootstrapping advice.</li>
              <li>Focus on genuine problems experienced by peers, students, or local communities.</li>
            </ul>
          </div>
        </Container>
      </div>
    </Layout>
  );
}

export default Generate;
