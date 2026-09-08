import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Container } from '../components/ui/Container';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { defaultStartupIdea, formatIdeaForClipboard } from '../utils';

/**
 * Result Page UI for IdeaForge AI
 * Phase 14: Dynamic presentation of a generated startup concept
 * Includes:
 * - Startup Name & Tagline
 * - Description
 * - Problem Statement & Solution
 * - Target Audience
 * - Business & Revenue Model
 * - MVP Features Checklist
 * - Dynamic data flow from /generate (state + sessionStorage)
 * - Copy idea to clipboard with visual confirmation
 * - Generate Again action
 */
export function Result({ idea: propIdea }) {
  const location = useLocation();
  const [copied, setCopied] = useState(false);

  // Retrieve stored idea from location state or sessionStorage fallback
  const getStoredIdea = () => {
    try {
      const stored = sessionStorage.getItem('ideaforge_current_idea');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  };

  const startup = propIdea || location.state?.idea || getStoredIdea() || defaultStartupIdea;

  const handleCopy = async () => {
    const text = formatIdeaForClipboard(startup);
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Gracefully handle any clipboard permission rejections
    }
  };

  return (
    <Layout currentPath="/result">
      <div className="py-6 sm:py-12">
        <Container size="lg">
          {/* Top Action / Status Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Badge variant="primary" size="md">
                  AI-Generated Startup Blueprint
                </Badge>
                <Badge variant="success" size="sm">
                  Ready to Build
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-slate-500">
                Generated based on your interests, skills, budget, and entrepreneurial goals.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2.5">
              <Button
                variant={copied ? 'outline' : 'secondary'}
                size="sm"
                onClick={handleCopy}
                className="flex items-center gap-1.5"
                title="Copy structured concept to clipboard"
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-blue-600 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy Idea</span>
                  </>
                )}
              </Button>
              <Link to="/generate">
                <Button variant="primary" size="sm" className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Generate Again
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            {/* 1. Header Card: Startup Name & High-Level Pitch */}
            <Card className="border-slate-200 shadow-sm bg-white">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-lg shadow-sm">
                        {startup.name.charAt(0)}
                      </div>
                      <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
                        {startup.name}
                      </h1>
                    </div>
                    <p className="text-base sm:text-lg font-medium text-blue-600 mt-2">
                      &quot;{startup.tagline}&quot;
                    </p>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4">
                      {startup.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 2. Problem vs Solution: Side-by-Side Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem Card */}
              <Card className="border-slate-200 shadow-sm bg-white">
                <CardHeader className="bg-slate-50/70 border-b border-slate-100 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xs">
                    !
                  </div>
                  <div>
                    <CardTitle as="h2" className="text-base font-semibold text-slate-900">
                      Problem Statement
                    </CardTitle>
                    <CardDescription>The core friction and market pain point</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {startup.problem}
                  </p>
                </CardContent>
              </Card>

              {/* Solution Card */}
              <Card className="border-slate-200 shadow-sm bg-white">
                <CardHeader className="bg-slate-50/70 border-b border-slate-100 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <CardTitle as="h2" className="text-base font-semibold text-slate-900">
                      Proposed Solution
                    </CardTitle>
                    <CardDescription>How this concept resolves the friction</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {startup.solution}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 3. Business Architecture: Target Audience, Business Model & Revenue */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Target Audience */}
              <Card className="border-slate-200 shadow-sm bg-white">
                <CardHeader className="border-b border-slate-100">
                  <CardTitle as="h2" className="text-base font-semibold text-slate-900">
                    Target Audience
                  </CardTitle>
                  <CardDescription>Primary user persona</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {startup.targetAudience}
                  </p>
                </CardContent>
              </Card>

              {/* Business Model */}
              <Card className="border-slate-200 shadow-sm bg-white">
                <CardHeader className="border-b border-slate-100">
                  <CardTitle as="h2" className="text-base font-semibold text-slate-900">
                    Business Model
                  </CardTitle>
                  <CardDescription>Operational mechanics</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {startup.businessModel}
                  </p>
                </CardContent>
              </Card>

              {/* Revenue Model */}
              <Card className="border-slate-200 shadow-sm bg-white">
                <CardHeader className="border-b border-slate-100">
                  <CardTitle as="h2" className="text-base font-semibold text-slate-900">
                    Revenue Model
                  </CardTitle>
                  <CardDescription>Monetization strategy</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {startup.revenueModel}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 4. MVP Roadmap & Key Features */}
            <Card className="border-slate-200 shadow-sm bg-white">
              <CardHeader className="border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle as="h2" className="text-lg font-semibold text-slate-900">
                      Recommended MVP Features
                    </CardTitle>
                    <CardDescription>
                      Core functionality required for your prototype exhibition or initial launch
                    </CardDescription>
                  </div>
                  <Badge variant="primary" size="sm">
                    {(startup.mvpFeatures || []).length} Core Modules
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(startup.mvpFeatures || []).map((feature, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-sm text-slate-800 font-medium leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 5. Bottom Navigation & Action Bar */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h3 className="font-semibold text-slate-900">
                  Want to refine this concept or try different constraints?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  You can adjust your budget, skills, or target market anytime.
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link to="/generate" className="w-full sm:w-auto">
                  <Button variant="primary" size="md" className="w-full sm:w-auto">
                    Generate New Concept
                  </Button>
                </Link>
                <Link to="/" className="w-full sm:w-auto">
                  <Button variant="secondary" size="md" className="w-full sm:w-auto">
                    Return to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}

export default Result;
