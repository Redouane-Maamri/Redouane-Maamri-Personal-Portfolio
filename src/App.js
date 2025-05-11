import Accueil from "./Accueil/accueil";
import About from "./About/About";
import Teck from "./technologies/technologie";
import Contact from "./contact/contact"
import Service from "./service/service"
import Experience from "./Experience/experience"
import Project from "./projects/projects"
import Formations from "./Formations/formations";
function App() {
  return (
    <div className="scroll-smooth">
      <Accueil />
      <About />
      <Formations/>
      <Experience/>
      <Teck />
      <Service/>
      <Project/>
      <Contact/>
      
    </div>
  );
}

export default App;
