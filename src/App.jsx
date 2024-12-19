import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Home></Home>
        <About></About>
      </main>
      <Skill></Skill>
    </div>
  );
}

export default App;
