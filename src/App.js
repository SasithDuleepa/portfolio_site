import './App.css';

import ProjectCard from './components/project card/projectCard';
import Skillt_carocel from './components/skill carocel/skill_carocel';
import Nav_menu from './components/Nav Menu/nav_menu';
import HeroSection from './components/hero/heroSection';
import Project_container from './components/project container/project_container';

function App() {
  return (
    <div className="App">
      {/* <Nav_menu/> */}
      <HeroSection/>

     <Skillt_carocel/>
     
     <Project_container/>
    
    </div>
  );
}

export default App;
