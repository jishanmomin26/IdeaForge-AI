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
import { generateMockIdea } from '../utils';

/**
 * Generate Idea Page UI for IdeaForge AI
 * Phase 14: Connected frontend flow collecting:
 * - Startup Interest
 * - Skills
 * - Budget
 * - Target Audience
 * - Startup Goal
 * 
 * Generates structured mock idea data and navigates to /result.
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
    setFormData({
      interests: '',
      skills: '',
      budget: '',
      audience: '',
      goal: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Phase 14: Generate mock startup idea from user inputs and navigate to /result
    const mockIdea = generateMockIdea(formData);

    try {
      sessionStorage.setItem('ideaforge_current_idea', JSON.stringify(mockIdea));
    } catch {
      // Ignore sessionStorage errors (e.g. private browsing restrictions)
    }

    navigate('/result', { state: { idea: mockIdea } });
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
                    required
                  />
                </FormGroup>

                {/* Form Action Controls */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto"
                    >
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
                    </Button>

                    <Button
                      type="button"
                      variant="secondary"
                      size="lg"
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
