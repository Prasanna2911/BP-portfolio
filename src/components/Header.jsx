import "./Header.css";
// import { FaBarsStaggered } from "react-icons/fa6";
import Navbar from "./Navbar";
import { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="h-20 fixed top-0 left-0 w-full md:flex md:items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          {/* for Logo */}
          <a href="">
            <img src="" alt="My-Logo" />
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <button
            className="menu-btn block md:!hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
              {/* <FaBarsStaggered /> */}
            </span>
          </button>
          <Navbar navOpen={navOpen}></Navbar>
        </div>
        <a href="#contact" className="btn btn-secondary !hidden md:!flex">
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
