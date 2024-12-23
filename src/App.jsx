import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Testmonials from "./components/Testmonials";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Home></Home>
        <About></About>
      </main>
      <Skill></Skill>
      <Project></Project>
      <Testmonials></Testmonials>
      <Contact></Contact>
    </div>
  );
}

export default App;
