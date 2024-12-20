import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Testmonials from "./components/Testmonials";
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
    </div>
  );
}

export default App;
