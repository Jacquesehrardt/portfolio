import './scss/App.scss';

import Header from './components/Header';
import SkillSection from './components/SkillSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <SkillSection/>
      <AboutSection/>
      <ProjectsSection/>
      <Footer/>
    </div>
  );
}

export default App;
