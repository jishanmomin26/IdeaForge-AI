import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { NavLink } from './NavLink';

/**
 * Navbar component for IdeaForge AI
 * Features clean educational branding, primary links (Home, Generate, About),
 * and responsive mobile navigation powered by React Router.
 */
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Generate', href: '/generate' },
    { label: 'About', href: '/about' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-xs border-b border-slate-200/80 sticky top-0 z-50 shadow-xs">
      <Container size="lg">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 text-slate-900 transition-colors"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 flex items-center justify-center text-white font-black text-sm shadow-xs shadow-blue-500/20 group-hover:shadow-md group-hover:shadow-blue-500/25 transition-all">
              IF
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                IdeaForge <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-extrabold">AI</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/generate">
              <Button variant="primary" size="sm">
                Generate Idea
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="animate-menu-slide md:hidden py-3 border-t border-slate-100 flex flex-col gap-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full px-4 py-2.5 min-h-[44px] flex items-center text-sm font-medium rounded-lg"
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-2 px-1">
              <Link
                to="/generate"
                className="w-full block"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button variant="primary" size="md" className="w-full min-h-[44px]">
                  Generate Idea
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Navbar;
