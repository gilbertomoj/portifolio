import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Degree from './components/Degree';
import Skills from './components/Skills';
import Projects from './components/Projects'

import './index.css';

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font border-t-0">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Degree />
      <Contact />
    </main>
  );
}

