import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardContent } from '../components/ui/Card';

/**
 * Home / Landing Page for IdeaForge AI
 * Enhanced with modern interactive SaaS aesthetics:
 * - Subtle background grid & ambient pastel glow
 * - Tactile floating idea badges
 * - Rich highlight metric cards with colored icon containers
 * - Interactive browser preview mockup
 * - 4-point structured feature cards with purposeful accent borders
 * - Bottom CTA banner with layered depth
 * 
 * Follows the 70 / 20 / 10 design balance formula:
 * 70% light surfaces, 20% purposeful accents, 10% micro-interactions.
 */
export function Home() {
  return (
    <Layout currentPath="/">
      {/* 1. Hero Section with Ambient Glow & Modern Depth */}
      <section className="relative overflow-hidden pt-10 pb-16 sm:pt-20 sm:pb-24 border-b border-slate-200/70 bg-gradient-to-b from-blue-50/50 via-slate-50/30 to-white">
        {/* Subtle Background Dot Grid Pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none -z-10"
        />

        {/* Soft Ambient Radial Blur Accents */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/3 -translate-x-1/2 w-96 h-96 bg-blue-200/25 rounded-full blur-3xl pointer-events-none -z-10"
        />
        <div
          aria-hidden="true"
          className="absolute top-8 right-1/4 translate-x-1/2 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none -z-10"
        />

        {/* Floating Idea Elements for Visual Interest (Non-intrusive) */}
        <div
          aria-hidden="true"
          className="hidden lg:flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/95 border border-amber-200/80 shadow-sm text-xs font-semibold text-slate-700 animate-float-slow absolute left-6 xl:left-14 top-28 select-none"
        >
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-amber-700 font-bold">Concept:</span>
          <span>Campus Peer Courier</span>
        </div>

        <div
          aria-hidden="true"
          className="hidden lg:flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/95 border border-emerald-200/80 shadow-sm text-xs font-semibold text-slate-700 animate-float-delayed absolute right-6 xl:right-14 top-32 select-none"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-700 font-bold">Model:</span>
          <span>Freemium Student SaaS</span>
        </div>

        <Container size="lg">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* AI Pill Badge */}
            <div className="mb-5 animate-fade-in">
              <Badge variant="purple" size="md" className="gap-2 shadow-xs py-1.5 px-3.5">
                <svg
                  className="w-3.5 h-3.5 text-purple-600 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
                <span className="font-semibold text-purple-900">Next-Gen Startup Ideation for Students</span>
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="animate-fade-up delay-75 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-5 sm:mb-6">
              Turn Your Passions and Skills into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">
                Actionable Startup Ideas
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="animate-fade-up delay-150 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8 sm:mb-10 max-w-2xl font-normal">
              IdeaForge AI helps aspiring student founders and creators transform raw skills, domain passions, and budget limits into comprehensive, defensible startup blueprints using Gemini AI.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-up delay-200 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <Link to="/generate" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-md shadow-blue-500/20">
                  <span>Start Generating Ideas</span>
                  <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </Link>
              <Link to="/about" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Learn About the System
                </Button>
              </Link>
            </div>

            {/* Platform Metrics / Trust Highlights */}
            <div className="animate-fade-up delay-250 mt-12 sm:mt-16 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-slate-600">
              <div className="card-hover-lift bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3.5 text-left">
                <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100 card-icon-hover shadow-2xs">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-sm sm:text-base text-slate-900 block leading-tight">100% Free</span>
                  <span className="text-xs text-slate-500">Academic Mini Project</span>
                </div>
              </div>

              <div className="card-hover-lift bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3.5 text-left">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 card-icon-hover shadow-2xs">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-sm sm:text-base text-slate-900 block leading-tight">Structured Output</span>
                  <span className="text-xs text-slate-500">Business & Revenue Plans</span>
                </div>
              </div>

              <div className="card-hover-lift bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3.5 text-left">
                <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100 card-icon-hover shadow-2xs">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-sm sm:text-base text-slate-900 block leading-tight">Gemini AI Engine</span>
                  <span className="text-xs text-slate-500">Tailored to Your Budget</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Preview Mockup Card */}
          <div className="animate-fade-up delay-300 mt-14 sm:mt-18 max-w-4xl mx-auto">
            <Card className="card-hover-lift border-slate-200/90 shadow-md shadow-slate-200/60 bg-white overflow-hidden">
              {/* Browser-style Header */}
              <div className="bg-slate-50/95 border-b border-slate-200/80 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 ml-3 px-3 py-1 rounded-md bg-white border border-slate-200/80 text-xs font-mono text-slate-400">
                    <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>ideaforge.ai/result/preview</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="purple" size="sm" className="shrink-0 font-medium">
                    EdTech / AI
                  </Badge>
                  <Badge variant="emerald" size="sm" className="shrink-0 font-medium">
                    Verified Blueprint
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                        S
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                          SkillBridge AI
                        </h3>
                      </div>
                    </div>
                    <Badge variant="emerald" size="sm" className="font-semibold">
                      Student Budget: $500 - $1,000
                    </Badge>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-blue-600 mt-2">
                    &quot;Closing the vocational education gap with interactive AI-driven mentorship.&quot;
                  </p>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    A streamlined learning and mentorship platform that pairs college students with automated curriculum paths and industry project simulations tailored to immediate employer demands.
                  </p>
                </div>

                {/* 3 Structured Preview Cells with Purposeful Accent Borders */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-4 border-t border-slate-100 text-xs">
                  <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-100 border-l-4 border-l-sky-500">
                    <span className="font-bold text-sky-900 block mb-1 uppercase tracking-wider text-[11px]">
                      Target Market
                    </span>
                    <p className="text-slate-600 leading-relaxed">Final-year college undergraduates and entry-level bootcamp graduates.</p>
                  </div>
                  <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 border-l-4 border-l-emerald-500">
                    <span className="font-bold text-emerald-900 block mb-1 uppercase tracking-wider text-[11px]">
                      Revenue Model
                    </span>
                    <p className="text-slate-600 leading-relaxed">Freemium student access with B2B enterprise talent placement fees.</p>
                  </div>
                  <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100 border-l-4 border-l-purple-500">
                    <span className="font-bold text-purple-900 block mb-1 uppercase tracking-wider text-[11px]">
                      MVP Feature
                    </span>
                    <p className="text-slate-600 leading-relaxed">Automated portfolio audit and weekly customized skill-building tasks.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* 2. Feature / Value Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/70">
        <Container size="lg">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="mb-3">
              <Badge variant="secondary" size="sm">
                Built for Student Innovators
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3.5">
              Why Use IdeaForge AI?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Moving from vague thoughts to actionable concepts requires structure. IdeaForge AI gives you comprehensive clarity before you write your first line of code.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Problem Discovery (Amber Accent) */}
            <div className="card-hover-lift bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 border-t-4 border-t-amber-500 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center mb-5 card-icon-hover shadow-2xs">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Problem Validation</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Pinpoint validated frictions and genuine customer pain points rather than building solutions in search of problems.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100">
                <span className="text-amber-700 font-semibold text-xs flex items-center gap-1">
                  Market Friction Focused
                </span>
              </div>
            </div>

            {/* Card 2: Skill & Budget Feasibility (Sky Accent) */}
            <div className="card-hover-lift bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 border-t-4 border-t-sky-500 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center mb-5 card-icon-hover shadow-2xs">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Skill Alignment</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Directly leverages your existing technical abilities (React, Python, Design) and realistic student budget limits.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100">
                <span className="text-sky-700 font-semibold text-xs flex items-center gap-1">
                  Feasible Architecture
                </span>
              </div>
            </div>

            {/* Card 3: Monetization & Business (Emerald Accent) */}
            <div className="card-hover-lift bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 border-t-4 border-t-emerald-500 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-5 card-icon-hover shadow-2xs">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Sustainable Models</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Clear monetization strategies suited for lean startups: student freemium tiers, campus licensing, and low-cost micro-transactions.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100">
                <span className="text-emerald-700 font-semibold text-xs flex items-center gap-1">
                  Realistic Cash Flow
                </span>
              </div>
            </div>

            {/* Card 4: Actionable MVP Roadmap (Purple Accent) */}
            <div className="card-hover-lift bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 border-t-4 border-t-purple-500 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center mb-5 card-icon-hover shadow-2xs">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">MVP Roadmap</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Receive a concrete 5-point feature checklist ready to build for your exhibition, hackathon, or early customer testing.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100">
                <span className="text-purple-700 font-semibold text-xs flex items-center gap-1">
                  Ready to Prototype
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Bottom Call-To-Action Banner */}
      <section className="py-16 sm:py-20 bg-slate-50/60">
        <Container size="lg">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-indigo-50/40 to-slate-50 border border-blue-100 p-8 sm:p-12 text-center shadow-xs">
            <div aria-hidden="true" className="absolute top-0 right-0 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="max-w-2xl mx-auto space-y-4">
              <Badge variant="primary" size="sm">
                Get Started in Seconds
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Ready to Forge Your Startup Concept?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Enter your interests, technical background, and budget limits to generate a comprehensive AI blueprint with Gemini.
              </p>
              <div className="pt-3">
                <Link to="/generate">
                  <Button variant="primary" size="lg" className="shadow-md shadow-blue-500/20">
                    Launch Idea Generator
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;