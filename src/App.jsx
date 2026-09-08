import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Generate } from './pages/Generate';
import { Result } from './pages/Result';
import { About } from './pages/About';

function App() {
  const [pathname, setPathname] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handleLocationChange = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  if (pathname === '/generate') {
    return <Generate />;
  }

  if (pathname === '/result') {
    return <Result />;
  }

  if (pathname === '/about') {
    return <About />;
  }

  return <Home />;
}

export default App;
