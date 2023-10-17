import './App.css';

import Header from './components/header/header';
import ProjectCard from './components/project card/projectCard';
import Skillt_carocel from './components/skill carocel/skill_carocel';
import Nav_menu from './components/Nav Menu/nav_menu';
import HeroSection from './components/hero/heroSection';
import Project_container from './components/project container/project_container';
import About from './components/about/about';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <Nav_menu/>
      <Header/>
      {/* <HeroSection/> */}

     <Skillt_carocel/>
     <About/>
     
     <Project_container/>

     <Contact/>
    
    </div>
  );
}

export default App;
