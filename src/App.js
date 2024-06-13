import "./App.css";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/contact";
import { Experience } from "./components/experience/Experience";
import { Footer } from "./components/footer/footer";
import { NavBar } from "./components/navbar/Navbar";
import { Project } from "./components/project/Project";
import { Skills } from "./components/skills/Skills";

function App() {
  return (
    <div className="App w-full h-auto bg-bodyColor text-lightText">
      <NavBar />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
