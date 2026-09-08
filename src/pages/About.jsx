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
      title: 'Google Gemini AI',
      category: 'Generative AI Engine',
      desc: 'Powers the intelligence layer, transforming unstructured user parameters into a cohesive, logically consistent business blueprint.',
    },
    {
      title: 'React & Vite',
      category: 'Frontend Framework',
      desc: 'Provides a fast, modular, and reactive user interface built with modern JavaScript and component-driven architecture.',
    },
    {
      title: 'Tailwind CSS',
      category: 'Design System',
      desc: 'Powers the accessible, light-mode educational aesthetic featuring clean typography, consistent spacing, and subtle borders.',
    },
    {
      title: 'Frontend-Only Design',
      category: 'Architecture',
      desc: 'Lightweight client-side model ensuring zero server bloat, fast load times, and straightforward hosting on modern platforms.',
    },
  ];

  return (
    <Layout currentPath="/about">
      <div className="py-6 sm:py-12">
        <Container size="lg">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="mb-3">
              <Badge variant="primary" size="md">
                College Mini Project • Generative AI
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3 sm:mb-4">
              About <span className="text-blue-600">IdeaForge AI</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
              An intelligent startup ideation platform that empowers students, researchers, and first-time entrepreneurs to convert raw passions and skills into structured, defensible venture concepts.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {/* 1. Project Mission & Objective */}
            <Card className="border-slate-200 shadow-sm bg-white">
              <CardHeader className="bg-slate-50/70 border-b border-slate-100 p-4 sm:p-6">
                <CardTitle as="h2" className="text-lg sm:text-xl font-semibold text-slate-900">
                  Project Mission & Problem Solved
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Bridging the gap between initial inspiration and structured execution
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Aspiring entrepreneurs and students frequently experience brainstorming paralysis: they possess technical abilities and industry interests but struggle to synthesize them into viable business concepts with clear value propositions, market validation, and realistic monetization strategies.
                </p>
                <p>
                  <strong>IdeaForge AI</strong> addresses this challenge by providing an AI-assisted brainstorming system. By feeding specific user constraints—such as programming skills, starting capital, and target audiences—into Generative AI, the platform delivers comprehensive, ready-to-prototype startup blueprints.
                </p>
              </CardContent>
            </Card>

            {/* 2. System Workflow: Inputs vs Outputs */}
            <div>
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  How the Ideation Engine Works
                </h2>
                <p className="text-sm text-slate-600">
                  From user-defined parameters to an actionable multi-section blueprint.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Inputs Card */}
                <Card className="border-slate-200 shadow-sm bg-white">
                  <CardHeader className="bg-slate-50/70 border-b border-slate-100">
                    <div className="flex items-center justify-between">
                      <CardTitle as="h3" className="text-base font-semibold text-slate-900">
                        1. User Inputs Provided
                      </CardTitle>
                      <Badge variant="secondary" size="sm">
                        5 Parameters
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3.5">
                      {inputs.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 font-semibold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <div>
                            <span className="font-semibold text-slate-900 block">
                              {item.name}
                            </span>
                            <span className="text-xs text-slate-500">
                              {item.desc}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Outputs Card */}
                <Card className="border-slate-200 shadow-sm bg-white">
                  <CardHeader className="bg-slate-50/70 border-b border-slate-100">
                    <div className="flex items-center justify-between">
                      <CardTitle as="h3" className="text-base font-semibold text-slate-900">
                        2. AI Blueprint Generated
                      </CardTitle>
                      <Badge variant="primary" size="sm">
                        Structured Output
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3.5">
                      {outputs.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 font-semibold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            ✓
                          </span>
                          <div>
                            <span className="font-semibold text-slate-900 block">
                              {item.name}
                            </span>
                            <span className="text-xs text-slate-500">
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
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  Technology Stack & Architecture
                </h2>
                <p className="text-sm text-slate-600">
                  Built using clean, modern web technologies and state-of-the-art Generative AI.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {techStack.map((tech, idx) => (
                  <Card key={idx} className="border-slate-200 shadow-sm bg-white">
                    <CardContent className="p-6">
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
                        {tech.category}
                      </span>
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
            <Card className="border-slate-200 shadow-sm bg-white">
              <CardHeader className="bg-slate-50/70 border-b border-slate-100">
                <CardTitle as="h2" className="text-lg font-semibold text-slate-900">
                  Academic Project Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-sm">
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Project Title
                    </span>
                    <span className="font-medium text-slate-900 leading-snug block break-words">
                      IdeaForge AI: An AI-Powered Startup Idea Generation System
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Project Type
                    </span>
                    <span className="font-medium text-slate-900 block">
                      College Mini Project
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Academic Domain
                    </span>
                    <span className="font-medium text-slate-900 block">
                      AI in Entrepreneurship
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Primary AI Model
                    </span>
                    <span className="font-medium text-slate-900 block">
                      Google Gemini Generative AI
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 5. Bottom CTA Card */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 sm:p-12 text-center max-w-3xl mx-auto">
              <h2 className="text-xl sm:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">
                Experience IdeaForge AI Today
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-6">
                Ready to transform your technical skills and domain interests into a tangible startup proposal?
              </p>
              <Link to="/generate" className="w-full sm:w-auto inline-block">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Launch Idea Generator
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
