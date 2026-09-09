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
 * Enhanced with modern structured AI-dossier presentation:
 * - Startup Name & Tagline banner with blue accent
 * - Side-by-side Problem (Amber) & Solution (Blue) comparison cards
 * - 3-column Business Architecture (Audience, Business Model, Revenue)
 * - Scoped MVP Feature Checklist with gradient number pills
 * - Interactive Copy Blueprint action with tactile feedback
 * - Dynamic data flow from /generate (state + sessionStorage fallback)
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
      <div className="relative overflow-hidden py-10 sm:py-16 bg-gradient-to-b from-blue-50/50 via-slate-50/30 to-white">
        {/* Subtle Ambient Pattern */}
        <div aria-hidden="true" className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none -z-10" />

        <Container size="lg">
          {/* Top Action / Status Bar */}
          <div className="animate-fade-in flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-10 pb-6 border-b border-slate-200/80">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <Badge variant="purple" size="md" className="gap-2 shadow-xs font-semibold py-1 px-3">
                  <svg className="w-3.5 h-3.5 text-purple-600 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
                  <span>AI-Generated Blueprint</span>
                </Badge>
                <Badge variant="emerald" size="sm" className="font-semibold">
                  Ready to Prototype
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-normal">
                Synthesized by Gemini AI based on your unique skills, interests, and capital limits.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                variant={copied ? 'outline' : 'secondary'}
                size="sm"
                onClick={handleCopy}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 min-h-[42px] sm:min-h-[38px] shadow-xs"
                title="Copy structured concept to clipboard"
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-emerald-700 font-semibold">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy Blueprint</span>
                  </>
                )}
              </Button>
              <Link to="/generate" className="flex-1 sm:flex-none">
                <Button variant="primary" size="sm" className="w-full sm:w-auto flex items-center justify-center gap-2 min-h-[42px] sm:min-h-[38px] shadow-sm shadow-blue-500/20">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Generate Again
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-8 sm:space-y-10">
            {/* 1. Header Card: Startup Name & High-Level Pitch */}
            <Card className="animate-fade-up border-slate-200/90 border-t-4 border-t-blue-600 shadow-md shadow-slate-200/50 bg-white overflow-hidden">
              <CardContent className="p-6 sm:p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white font-black flex items-center justify-center text-xl shadow-xs shrink-0">
                        {(startup.startupName || startup.name || 'S').charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 break-words">
                          {startup.startupName || startup.name || 'Generated Startup Concept'}
                        </h1>
                      </div>
                    </div>
                    {startup.tagline && (
                      <p className="text-base sm:text-lg md:text-xl font-semibold text-blue-600 mt-2 break-words">
                        &quot;{startup.tagline}&quot;
                      </p>
                    )}
                    {(startup.description || startup.solution) && (
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4 break-words font-normal">
                        {startup.description || startup.solution}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 2. Problem vs Solution: Side-by-Side Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem Card (Amber Accent) */}
              <Card className="animate-fade-up delay-100 card-hover-lift border-slate-200/90 border-l-4 border-l-amber-500 shadow-xs bg-white overflow-hidden">
                <CardHeader className="bg-amber-50/30 border-b border-amber-100/60 p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant="amber" size="sm">
                      Market Friction
                    </Badge>
                    <div className="w-8 h-8 rounded-xl bg-amber-100/90 text-amber-700 flex items-center justify-center font-bold text-xs card-icon-hover shadow-2xs">
                      !
                    </div>
                  </div>
                  <CardTitle as="h2" className="text-lg font-bold text-slate-900">
                    Problem Statement
                  </CardTitle>
                  <CardDescription className="text-xs text-slate-500 mt-0.5">
                    The core friction and validated market pain point
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-5 sm:p-6">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed break-words">
                    {startup.problem}
                  </p>
                </CardContent>
              </Card>

              {/* Solution Card (Blue Accent) */}
              <Card className="animate-fade-up delay-150 card-hover-lift border-slate-200/90 border-l-4 border-l-blue-600 shadow-xs bg-white overflow-hidden">
                <CardHeader className="bg-blue-50/30 border-b border-blue-100/60 p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant="primary" size="sm">
                      Value Proposition
                    </Badge>
                    <div className="w-8 h-8 rounded-xl bg-blue-100/90 text-blue-700 flex items-center justify-center font-bold text-xs card-icon-hover shadow-2xs">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <CardTitle as="h2" className="text-lg font-bold text-slate-900">
                    Proposed Solution
                  </CardTitle>
                  <CardDescription className="text-xs text-slate-500 mt-0.5">
                    How this product addresses and resolves the problem
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-5 sm:p-6">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed break-words">
                    {startup.solution}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 3. Business Architecture: Target Audience, Business Model & Revenue */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Target Audience (Sky Accent) */}
              <Card className="animate-fade-up delay-200 card-hover-lift border-slate-200/90 border-t-4 border-t-sky-500 shadow-xs bg-white overflow-hidden">
                <CardHeader className="bg-sky-50/25 border-b border-slate-100 p-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant="sky" size="sm">
                      Customer Persona
                    </Badge>
                    <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center card-icon-hover">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <CardTitle as="h2" className="text-base font-bold text-slate-900">
                    Target Audience
                  </CardTitle>
                  <CardDescription className="text-xs">Primary user segments</CardDescription>
                </CardHeader>
                <CardContent className="p-5">
                  <p className="text-sm text-slate-700 leading-relaxed break-words">
                    {startup.targetAudience}
                  </p>
                </CardContent>
              </Card>

              {/* Business Model (Purple Accent) */}
              <Card className="animate-fade-up delay-250 card-hover-lift border-slate-200/90 border-t-4 border-t-purple-600 shadow-xs bg-white overflow-hidden">
                <CardHeader className="bg-purple-50/25 border-b border-slate-100 p-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant="purple" size="sm">
                      Operational Mechanics
                    </Badge>
                    <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center card-icon-hover">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                  </div>
                  <CardTitle as="h2" className="text-base font-bold text-slate-900">
                    Business Model
                  </CardTitle>
                  <CardDescription className="text-xs">Delivery & ecosystem</CardDescription>
                </CardHeader>
                <CardContent className="p-5">
                  <p className="text-sm text-slate-700 leading-relaxed break-words">
                    {startup.businessModel}
                  </p>
                </CardContent>
              </Card>

              {/* Revenue Model (Emerald Accent) */}
              <Card className="animate-fade-up delay-300 card-hover-lift border-slate-200/90 border-t-4 border-t-emerald-600 shadow-xs bg-white overflow-hidden">
                <CardHeader className="bg-emerald-50/25 border-b border-slate-100 p-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant="emerald" size="sm">
                      Monetization Strategy
                    </Badge>
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center card-icon-hover">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <CardTitle as="h2" className="text-base font-bold text-slate-900">
                    Revenue Model
                  </CardTitle>
                  <CardDescription className="text-xs">Pricing & cash flow</CardDescription>
                </CardHeader>
                <CardContent className="p-5">
                  <p className="text-sm text-slate-700 leading-relaxed break-words">
                    {startup.revenueModel}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 4. MVP Roadmap & Key Features */}
            <Card className="animate-fade-up delay-350 border-slate-200/90 shadow-md shadow-slate-200/50 bg-white overflow-hidden">
              <CardHeader className="bg-slate-50/80 border-b border-slate-200/80 p-5 sm:p-7">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div>
                    <CardTitle as="h2" className="text-lg sm:text-xl font-bold text-slate-900">
                      Recommended MVP Feature Roadmap
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm mt-0.5">
                      Core functional modules scoped for your initial prototype exhibition or hackathon build
                    </CardDescription>
                  </div>
                  <Badge variant="purple" size="sm" className="shrink-0 font-semibold">
                    {(startup.mvpFeatures || []).length} Core Modules
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-5 sm:p-7 md:p-8">
                {startup.mvpFeatures && startup.mvpFeatures.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {startup.mvpFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="card-hover-lift p-4.5 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-300 transition-colors flex items-start gap-3.5 shadow-xs"
                      >
                        <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-xs shadow-blue-500/20">
                          {index + 1}
                        </div>
                        <p className="text-sm text-slate-800 font-medium leading-relaxed break-words">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500 italic">
                    No specific MVP features were extracted for this concept.
                  </p>
                )}
              </CardContent>
            </Card>

            {/* 5. Bottom Navigation & Action Bar */}
            <div className="animate-fade-up delay-400 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-50/70 via-indigo-50/40 to-slate-50 border border-blue-100 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  Want to refine this concept or try different parameters?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  You can adjust your budget tier, technical skills, or target customer persona anytime.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <Link to="/generate" className="w-full sm:w-auto">
                  <Button variant="primary" size="md" className="w-full sm:w-auto shadow-sm shadow-blue-500/20">
                    Adjust Parameters
                  </Button>
                </Link>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={handleCopy}
                  className="w-full sm:w-auto"
                >
                  {copied ? 'Copied!' : 'Copy Summary'}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}

export default Result;