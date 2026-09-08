import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Generate, Result, About } from './pages';

/**
 * App component configuring clean client-side routing for IdeaForge AI:
 * /         → Home
 * /generate → Generate
 * /result   → Result
 * /about    → About
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/result" element={<Result />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
