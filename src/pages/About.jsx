import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Container } from '../components/ui/Container';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

/**
 * About Page for IdeaForge AI
 * Explains:
 * - What IdeaForge AI is and its academic purpose
 * - How Generative AI powers the ideation workflow
 * - Input parameters collected from users
 * - Structured startup outputs generated
 * - Core technology stack
 * 
 * Follows the clean, professional, light-mode educational design system.
 */
export function About() {
  const inputs = [
    { name: 'Startup Interests', desc: 'Industry domain, market sectors, or specific problem spaces' },
    { name: 'Skills & Capabilities', desc: 'Programming languages, technical tools, or business expertise' },
    { name: 'Available Budget', desc: 'Capital tier from minimal bootstrapping ($0 - $100) to higher funding' },
    { name: 'Target Audience', desc: 'Intended customer segment, demographics, or user personas' },
    { name: 'Startup Goal', desc: 'Capstone exhibition, hackathon prototype, or commercial launch objective' },
  ];

  const outputs = [
    { name: 'Startup Name & Tagline', desc: 'Creative, market-aligned venture name and concise pitch' },
    { name: 'Problem & Solution', desc: 'Validated market friction and how your product directly resolves it' },
    { name: 'Target Market Breakdown', desc: 'Primary user persona and initial customer acquisition channel' },
    { name: 'Business & Revenue Model', desc: 'Operational mechanics and viable monetization strategy' },
    { name: 'Actionable MVP Roadmap', desc: '5-point scoped feature checklist for your initial prototype' },
  ];

  const techStack = [
    {
      title: 'Google Gemini AI (gemini-3.6-flash)',
      category: 'Generative AI Engine',
      desc: 'Powers the intelligence layer, transforming unstructured user parameters into a cohesive, logically consistent business blueprint.',
      variant: 'purple',
      borderClass: 'border-l-purple-500 hover:border-purple-300',
    },
    {
      title: 'React & Vite',
      category: 'Frontend Framework',
      desc: 'Provides a fast, modular, and reactive user interface built with modern JavaScript and component-driven architecture.',
      variant: 'primary',
      borderClass: 'border-l-blue-600 hover:border-blue-300',
    },
    {
      title: 'Tailwind CSS v4',
      category: 'Styling & Design System',
      desc: 'Powers the accessible, light-mode educational aesthetic featuring clean typography, consistent spacing, and multi-accent balance.',
      variant: 'sky',
      borderClass: 'border-l-sky-500 hover:border-sky-300',
    },
    {
      title: 'Frontend-Only Architecture',
      category: 'System Architecture',
      desc: 'Lightweight client-side model ensuring zero server bloat, fast load times, and straightforward hosting on modern platforms.',
      variant: 'emerald',
      borderClass: 'border-l-emerald-500 hover:border-emerald-300',
    },
  ];

  return (
    <Layout currentPath="/about">
      <div className="py-8 sm:py-14 bg-gradient-to-b from-blue-50/40 via-slate-50/20 to-white">
        <Container size="lg">
          {/* Header Section */}
          <div className="animate-fade-in text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="mb-3.5">
              <Badge variant="purple" size="md" className="gap-1.5 shadow-xs">
                <span className="text-purple-600 font-bold">✦</span>
                College Mini Project • Generative AI
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">IdeaForge AI</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
              An intelligent startup ideation platform that empowers students, researchers, and first-time entrepreneurs to convert raw passions and skills into structured, defensible venture concepts.
            </p>
          </div>

          <div className="space-y-10 sm:space-y-14">
            {/* 1. Project Mission & Objective */}
            <Card className="animate-fade-up delay-75 border-slate-200/80 border-t-4 border-t-blue-600 shadow-md shadow-slate-200/50 bg-white overflow-hidden">
              <CardHeader className="bg-slate-50/80 border-b border-slate-200/80 p-5 sm:p-7">
                <CardTitle as="h2" className="text-xl font-bold text-slate-900">
                  Project Mission & Problem Solved
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm mt-0.5">
                  Bridging the gap between initial inspiration and structured execution
                </CardDescription>
              </CardHeader>
              <CardContent className="p-5 sm:p-8 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Aspiring entrepreneurs and students frequently experience brainstorming paralysis: they possess technical abilities and industry interests but struggle to synthesize them into viable business concepts with clear value propositions, market validation, and realistic monetization strategies.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold">IdeaForge AI</strong> addresses this challenge by providing an AI-assisted brainstorming system. By feeding specific user constraints—such as programming skills, starting capital, and target audiences—into Generative AI, the platform delivers comprehensive, ready-to-prototype startup blueprints.
                </p>
              </CardContent>
            </Card>

            {/* 2. System Workflow: Inputs vs Outputs */}
            <div>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="mb-2.5">
                  <Badge variant="primary" size="sm">System Architecture</Badge>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2.5">
                  How the Ideation Engine Works
                </h2>
                <p className="text-sm sm:text-base text-slate-600">
                  From 5 user-defined parameters to an actionable multi-section blueprint.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Inputs Card (Sky Accent) */}
                <Card className="animate-fade-up delay-150 card-hover-lift border-slate-200/80 border-t-3 border-t-sky-500 shadow-xs bg-white overflow-hidden">
                  <CardHeader className="bg-sky-50/20 border-b border-slate-100 p-5 sm:p-6">
                    <div className="flex items-center justify-between">
                      <CardTitle as="h3" className="text-lg font-bold text-slate-900">
                        1. User Inputs Provided
                      </CardTitle>
                      <Badge variant="sky" size="sm">
                        5 Parameters
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-5 sm:p-6">
                    <ul className="space-y-4">
                      {inputs.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3.5 text-sm">
                          <span className="w-6 h-6 rounded-lg bg-sky-50 text-sky-700 border border-sky-100 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <div>
                            <span className="font-bold text-slate-900 block leading-tight">
                              {item.name}
                            </span>
                            <span className="text-xs text-slate-500 leading-relaxed block mt-0.5">
                              {item.desc}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Outputs Card (Emerald Accent) */}
                <Card className="animate-fade-up delay-200 card-hover-lift border-slate-200/80 border-t-3 border-t-emerald-500 shadow-xs bg-white overflow-hidden">
                  <CardHeader className="bg-emerald-50/20 border-b border-slate-100 p-5 sm:p-6">
                    <div className="flex items-center justify-between">
                      <CardTitle as="h3" className="text-lg font-bold text-slate-900">
                        2. AI Blueprint Generated
                      </CardTitle>
                      <Badge variant="emerald" size="sm">
                        Structured Output
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-5 sm:p-6">
                    <ul className="space-y-4">
                      {outputs.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3.5 text-sm">
                          <span className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            ✓
                          </span>
                          <div>
                            <span className="font-bold text-slate-900 block leading-tight">
                              {item.name}
                            </span>
                            <span className="text-xs text-slate-500 leading-relaxed block mt-0.5">
                              {item.desc}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 3. Technology Stack & Role of Generative AI */}
            <div>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="mb-2.5">
                  <Badge variant="purple" size="sm">Core Technologies</Badge>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2.5">
                  Technology Stack & Architecture
                </h2>
                <p className="text-sm sm:text-base text-slate-600">
                  Built using clean, modern web technologies and state-of-the-art Generative AI.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {techStack.map((tech, idx) => (
                  <Card
                    key={idx}
                    className={`animate-fade-up delay-250 card-hover-lift border-slate-200/80 border-l-4 ${tech.borderClass} shadow-xs bg-white`}
                  >
                    <CardContent className="p-6">
                      <div className="mb-2.5">
                        <Badge variant={tech.variant} size="sm">
                          {tech.category}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {tech.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {tech.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* 4. Academic Project Metadata */}
            <Card className="animate-fade-up delay-300 card-hover-lift border-slate-200/80 shadow-md shadow-slate-200/50 bg-white overflow-hidden">
              <CardHeader className="bg-slate-50/80 border-b border-slate-200/80 p-5 sm:p-7">
                <div className="flex items-center justify-between">
                  <CardTitle as="h2" className="text-lg font-bold text-slate-900">
                    Academic Project Details
                  </CardTitle>
                  <Badge variant="secondary" size="sm">College Mini Project</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-5 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 text-sm">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Project Title
                    </span>
                    <span className="font-semibold text-slate-900 leading-snug block break-words">
                      IdeaForge AI: An AI-Powered Startup Idea Generation System
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Project Type
                    </span>
                    <span className="font-semibold text-slate-900 block">
                      College Mini Project
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Academic Domain
                    </span>
                    <span className="font-semibold text-slate-900 block">
                      AI in Entrepreneurship
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Primary AI Model
                    </span>
                    <span className="font-semibold text-slate-900 block">
                      Google Gemini 3.6 Flash
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 5. Bottom CTA Card */}
            <div className="animate-fade-up delay-350 bg-gradient-to-br from-blue-50 via-indigo-50/40 to-slate-50 border border-blue-100 rounded-3xl p-7 sm:p-12 text-center max-w-3xl mx-auto shadow-xs">
              <div className="inline-block mb-3">
                <Badge variant="purple" size="sm">Start Exploring</Badge>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                Experience IdeaForge AI Today
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-7 leading-relaxed">
                Ready to transform your technical skills and domain interests into a tangible startup proposal?
              </p>
              <Link to="/generate" className="w-full sm:w-auto inline-block">
                <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-md shadow-blue-500/20">
                  Launch Idea Generator
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}

export default About;
