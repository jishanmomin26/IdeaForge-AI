import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Generate } from './pages/Generate';
import { Result } from './pages/Result';

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

  return <Home />;
}

export default App;
