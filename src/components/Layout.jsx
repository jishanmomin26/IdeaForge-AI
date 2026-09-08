import { Navbar } from './Navbar';
import { Footer } from './Footer';

/**
 * Global application Layout component
 * Structures sticky top Navbar, flexible middle main content area, and bottom pinned Footer.
 */
export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />
      <main className="flex-1 w-full py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
