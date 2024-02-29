import Header from './components/header';
import HeroSection from './components/hero-section';
import AboutMe from './components/about-me';
import ProjectSection from './components/projects-section';
import SkillsSection from './components/skills';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <HeroSection />
        <AboutMe />
        <ProjectSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
