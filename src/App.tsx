import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Journey } from './components/sections/Journey';
import { Skills } from './components/sections/Skills';
import { Hackathon } from './components/sections/Hackathon';
import { About } from './components/sections/About';
import { Certificates } from './components/sections/Certificates';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-charcoal-900 text-beige-700">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Journey />
        <Skills />
        <Hackathon />
        <About />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
