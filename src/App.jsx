import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Generate } from './pages/Generate';

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

  return <Home />;
}

export default App;
