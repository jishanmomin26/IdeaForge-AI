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
      {/* 1. Hero Section */}
      <section className="py-8 sm:py-16">
        <Container size="lg">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="mb-4">
              <Badge variant="primary" size="md">
                AI-Powered Entrepreneurship Platform
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-4 sm:mb-6">
              Turn Your Interests and Skills into{' '}
              <span className="text-blue-600">Actionable Startup Ideas</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              IdeaForge AI helps aspiring entrepreneurs, students, and creators transform their passions, technical skills, budget, and goals into structured, practical startup concepts using Generative AI.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <Link to="/generate" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Start Generating Ideas
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
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 w-full text-slate-600 text-sm">
              <div className="flex flex-col items-center">
                <span className="font-bold text-lg sm:text-xl text-slate-900">100% Free</span>
                <span className="text-xs text-slate-500 mt-0.5">Academic Mini Project</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-lg sm:text-xl text-slate-900">Structured</span>
                <span className="text-xs text-slate-500 mt-0.5">Business & Revenue Plans</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex flex-col items-center">
                <span className="font-bold text-lg sm:text-xl text-slate-900">Personalized</span>
                <span className="text-xs text-slate-500 mt-0.5">Tailored to Your Budget</span>
              </div>
            </div>
          </div>

          {/* Interactive Preview Mockup Card */}
          <div className="mt-8 sm:mt-12 max-w-4xl mx-auto">
            <Card className="border-slate-200 shadow-sm bg-white">
              <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-slate-300" />
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-slate-300" />
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-slate-300" />
                  </div>
                  <span className="ml-1 sm:ml-2 text-xs font-medium text-slate-500 truncate">
                    Sample Output Preview • Structured Idea Format
                  </span>
                </div>
                <Badge variant="primary" size="sm" className="shrink-0">
                  EdTech / AI
                </Badge>
              </div>

              <CardContent className="p-4 sm:p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      SkillBridge AI
                    </h3>
                    <span className="text-xs font-medium px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                      Budget: $500 - $1,000
                    </span>
                  </div>
                  <p className="text-sm font-medium text-blue-600">
                    &quot;Closing the vocational education gap with interactive AI-driven mentorship.&quot;
                  </p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    A streamlined learning and mentorship platform that pairs college students with automated curriculum paths and industry project simulations tailored to immediate employer demands.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-slate-100 text-xs">
                  <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                    <span className="font-semibold text-slate-800 block mb-1">Target Market</span>
                    <p className="text-slate-600">Final-year college undergraduates and entry-level bootcamp graduates.</p>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                    <span className="font-semibold text-slate-800 block mb-1">Revenue Model</span>
                    <p className="text-slate-600">Freemium student access with B2B enterprise talent placement fees.</p>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                    <span className="font-semibold text-slate-800 block mb-1">MVP Feature</span>
                    <p className="text-slate-600">Automated portfolio audit and weekly customized skill-building tasks.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* 2. Feature / Value Section */}
      <section className="py-12 sm:py-16 bg-white border-y border-slate-200">
        <Container size="lg">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Why Use IdeaForge AI?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Moving from vague thoughts to actionable concepts requires structure. IdeaForge AI gives you comprehensive clarity before you write your first line of code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <Card className="hover:border-blue-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Personalized to You
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Inputs consider your real programming skills, interests, financial budget, and target audience rather than producing generic ideas.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="hover:border-blue-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Complete Business Plan
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Generates full concept breakdowns including problem validation, market solution, business model, revenue model, and MVP features.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="hover:border-blue-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Student & Mini-Project Ready
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Tailored for college students, capstone teams, and hackathon participants looking for realistic, defensible technical concepts.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* 3. How It Works Section */}
      <section className="py-12 sm:py-16">
        <Container size="lg">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              How It Works
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A straightforward three-step workflow designed to take you from initial curiosity to a structured proposal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-start relative">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Specify Your Profile
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Provide your domain interests, technical skills, available budget, target audience, and primary startup goal.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-start relative">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Generative AI Processing
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                The Gemini model synthesizes current market trends with your input constraints to design an actionable venture.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-start relative">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Explore Your Concept
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Receive a structured breakdown containing startup name, pitch, market need, solution, revenue strategy, and MVP scope.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="py-8 sm:py-12">
        <Container size="lg">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 sm:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">
              Ready to Explore Your Next Startup Concept?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-6">
              Start by entering your skills and interests. Generate a customized startup blueprint in seconds.
            </p>
            <Link to="/generate" className="w-full sm:w-auto inline-block">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Generate Your First Idea
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
