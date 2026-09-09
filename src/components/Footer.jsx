import { Container } from './ui/Container';

/**
 * Footer component for IdeaForge AI
 * Minimal, clean educational style with copyright and project context.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 py-8 mt-auto text-slate-500 text-sm">
      <Container size="lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Branding & Subtitle */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-black text-xs shadow-xs">
                IF
              </div>
              <span className="font-bold text-slate-900 tracking-tight">IdeaForge AI</span>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="text-xs sm:text-sm text-slate-500">
              AI-Powered Startup Ideation Platform
            </span>
          </div>

          {/* Academic Project Context & Gemini Badge */}
          <div className="flex items-center gap-2.5 text-xs">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white border border-slate-200/80 text-slate-600 font-medium shadow-xs">
              College Mini Project
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-50 border border-purple-200/80 text-purple-700 font-medium shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
              Powered by Gemini AI
            </span>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-xs text-slate-400">
              &copy; {currentYear} IdeaForge AI. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;