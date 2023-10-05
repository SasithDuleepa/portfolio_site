import './App.css';

import ProjectCard from './components/project card/projectCard';
import Project_carocel from './components/project carocel/project_carocel';
import Nav_menu from './components/Nav Menu/nav_menu';

function App() {
  return (
    <div className="App">
      <Nav_menu/>

     <Project_carocel/>
    </div>
  );
}

export default App;
