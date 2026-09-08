import { Container } from './ui/Container';

/**
 * Footer component for IdeaForge AI
 * Minimal, clean educational style with copyright and project context.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 py-8 mt-auto text-slate-500 text-sm">
      <Container size="lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Branding & Subtitle */}
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span className="font-semibold text-slate-800">IdeaForge AI</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="text-xs sm:text-sm text-slate-500">
              AI-Powered Startup Ideation Platform
            </span>
          </div>

          {/* Academic Project Context */}
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span>College Mini Project</span>
            <span>•</span>
            <span>Powered by Gemini AI</span>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-xs text-slate-400">
              © {currentYear} IdeaForge AI. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
