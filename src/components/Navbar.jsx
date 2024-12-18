import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  useEffect(initActiveBox, []);

  const initActiveBox = (e) => {
    console.log(lastActiveLink.current);
    activeBox.current.style.top = e.target.current.offsetTop + "px";
    activeBox.current.style.top = e.target.current.offsetLeft + "px";
    activeBox.current.style.top = e.target.current.offsetWidth + "px";
    activeBox.current.style.top = e.target.current.offsetHeight + "px";
  };
  const activeCurrentLink = (e) => {
    lastActiveLink.current?.classList.remove("active");
    e.target.classList.add("active");
    lastActiveLink.current = e.target;
  };
  const navItems = [
    {
      label: "Home",
      Link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      Link: "#about",
      className: "nav-link",
    },
    {
      label: "Projects",
      Link: "#projetc",
      className: "nav-link",
    },
    {
      label: "Contact",
      Link: "#contact",
      className: "nav-link md:hidden",
    },
  ];
  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          className={className}
          key={key}
          ref={ref}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.PropTypes = {
  navOpen: PropTypes.bool.isRequired,
};
export default Navbar;
