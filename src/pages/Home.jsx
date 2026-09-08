import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardContent } from '../components/ui/Card';

/**
 * Home / Landing Page for IdeaForge AI
 * Communicates the core mission of AI-assisted startup ideation for students and entrepreneurs.
 * Follows the clean, professional, light-mode educational design system.
 */
export function Home() {
  return (
    <Layout currentPath="/">
      {/* 1. Hero Section with Ambient Glow & Modern Hierarchy */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-16 sm:pb-20 border-b border-slate-200/60 bg-gradient-to-b from-blue-50/50 via-slate-50/30 to-white">
        {/* Soft Ambient Radial Blur Accent */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-gradient-to-r from-blue-200/25 via-indigo-200/20 to-purple-200/25 blur-3xl pointer-events-none -z-10"
        />

        <Container size="lg">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* AI Pill Badge */}
            <div className="mb-4">
              <Badge variant="purple" size="md" className="gap-1.5 shadow-xs">
                <span className="text-purple-600 font-bold">✦</span>
                Next-Gen Startup Ideation for Students
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-5 sm:mb-6">
              Turn Your Passions and Skills into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">
                Actionable Startup Ideas
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-7 sm:mb-9 max-w-2xl font-normal">
              IdeaForge AI helps aspiring student founders and creators transform raw skills, domain passions, and budget limits into comprehensive, defensible startup blueprints using Gemini AI.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <Link to="/generate" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-md shadow-blue-500/20">
                  Start Generating Ideas
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <div className="mt-10 sm:mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 w-full text-slate-600">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3.5 text-left">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-sm sm:text-base text-slate-900 block leading-tight">100% Free</span>
                  <span className="text-xs text-slate-500">Academic Mini Project</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3.5 text-left">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-sm sm:text-base text-slate-900 block leading-tight">Structured Output</span>
                  <span className="text-xs text-slate-500">Business & Revenue Plans</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3.5 text-left">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
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
          <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
            <Card className="border-slate-200/80 shadow-md shadow-slate-200/50 bg-white overflow-hidden">
              {/* Browser-style Header */}
              <div className="bg-slate-50/90 border-b border-slate-200/80 px-4 sm:px-6 py-3 flex items-center justify-between gap-2">
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

              <CardContent className="p-5 sm:p-7 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-bold flex items-center justify-center text-sm shadow-xs">
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

                {/* 3 Structured Preview Cells with Colored Accent Borders */}
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
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/70">
        <Container size="lg">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="mb-3">
              <Badge variant="secondary" size="sm">
                Built for College Mini Projects
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3.5">
              Why Use IdeaForge AI?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Moving from vague thoughts to actionable concepts requires structure. IdeaForge AI gives you comprehensive clarity before you write your first line of code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 - Sky Accent */}
            <Card className="hover:border-sky-300 transition-all border-slate-200/80 shadow-xs">
              <CardContent className="p-6 sm:p-7">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5 border border-sky-100">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="mb-2">
                  <Badge variant="sky" size="sm">Personalized</Badge>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  Personalized to Your Profile
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Inputs consider your real programming skills, interests, financial budget, and target audience rather than producing generic, copy-paste ideas.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 - Emerald Accent */}
            <Card className="hover:border-emerald-300 transition-all border-slate-200/80 shadow-xs">
              <CardContent className="p-6 sm:p-7">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-100">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="mb-2">
                  <Badge variant="emerald" size="sm">Defensible</Badge>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  Complete Venture Architecture
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Generates full concept breakdowns including problem validation, market solution, business model, revenue model, and a 5-point MVP feature roadmap.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 - Amber Accent */}
            <Card className="hover:border-amber-300 transition-all border-slate-200/80 shadow-xs">
              <CardContent className="p-6 sm:p-7">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 border border-amber-100">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="mb-2">
                  <Badge variant="amber" size="sm">Realistic</Badge>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  Student & Hackathon Ready
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Tailored for college students, capstone teams, and hackathon participants looking for realistic, actionable, and exhibition-ready concepts.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* 3. How It Works Section */}
      <section className="py-14 sm:py-20 bg-slate-50/50">
        <Container size="lg">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="mb-3">
              <Badge variant="primary" size="sm">
                Simple 3-Step Process
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3.5">
              How It Works
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A straightforward workflow designed to take you from initial curiosity to a structured proposal in under a minute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1 - Sky Accent */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col items-start relative hover:border-sky-200 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-sky-600 text-white font-bold text-sm flex items-center justify-center mb-5 shadow-xs shadow-sky-500/20">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Specify Your Profile
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Provide your domain interests, technical skills, available budget tier, target customer persona, and primary startup goal.
              </p>
            </div>

            {/* Step 2 - Purple Accent */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col items-start relative hover:border-purple-200 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-purple-600 text-white font-bold text-sm flex items-center justify-center mb-5 shadow-xs shadow-purple-500/20">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Gemini AI Synthesis
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                The Gemini model synthesizes current market opportunities with your individual constraints to formulate a feasible venture architecture.
              </p>
            </div>

            {/* Step 3 - Emerald Accent */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col items-start relative hover:border-emerald-200 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-bold text-sm flex items-center justify-center mb-5 shadow-xs shadow-emerald-500/20">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Actionable Blueprint
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Receive an executive breakdown containing startup name, pitch, market friction, value proposition, revenue model, and MVP roadmap.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="py-12 sm:py-16 bg-white">
        <Container size="lg">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50/40 to-slate-50 border border-blue-100/80 rounded-3xl p-7 sm:p-12 text-center max-w-4xl mx-auto shadow-xs">
            <div className="inline-block mb-3">
              <Badge variant="purple" size="sm">
                Get Started in Seconds
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Ready to Explore Your Next Startup Concept?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-7 leading-relaxed">
              Input your technical skills and domain interests. Generate a customized startup blueprint tailored to your capabilities.
            </p>
            <Link to="/generate" className="w-full sm:w-auto inline-block">
              <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-md shadow-blue-500/20">
                Generate Your First Idea
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
