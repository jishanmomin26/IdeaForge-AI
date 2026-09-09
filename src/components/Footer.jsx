import { Link } from 'react-router-dom';
import { Container } from './ui/Container';

/**
 * Footer component for IdeaForge AI
 * Enhanced with subtle interactive links, clear hierarchy, and clean educational branding.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200/90 py-10 mt-auto text-slate-500 text-sm">
      <Container size="lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Branding & Subtitle */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-black text-xs shadow-xs group-hover:scale-105 transition-transform">
                IF
              </div>
              <span className="font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                IdeaForge AI
              </span>
            </Link>
            <span className="hidden sm:inline text-slate-300">&bull;</span>
            <span className="text-xs sm:text-sm text-slate-500">
              AI-Powered Startup Ideation Platform
            </span>
          </div>

          {/* Quick Page Links */}
          <nav className="flex items-center gap-5 text-xs font-medium text-slate-600" aria-label="Footer Navigation">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/generate" className="hover:text-blue-600 transition-colors">
              Generate
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition-colors">
              About
            </Link>
          </nav>

          {/* Academic Context Badges & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-slate-600 font-medium shadow-2xs">
                College Mini Project
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-50 border border-purple-200/80 text-purple-700 font-medium shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
                Gemini AI
              </span>
            </div>
            <p className="text-xs text-slate-400">
              &copy; {currentYear} IdeaForge AI.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;