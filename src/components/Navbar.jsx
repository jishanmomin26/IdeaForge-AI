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
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <Container size="lg">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-slate-900 hover:text-blue-600 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              IF
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight leading-tight">
                IdeaForge <span className="text-blue-600">AI</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
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
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <div className="md:hidden py-3 border-t border-slate-100 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-2">
              <Link
                to="/generate"
                className="w-full block"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button variant="primary" size="sm" className="w-full">
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
