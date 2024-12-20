import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  useEffect(() => {
    // Initialize the active box when the component mounts
    if (lastActiveLink.current) {
      updateActiveBox(lastActiveLink.current);
    }
  }, []);

  // window.addEventListener("resize", updateActiveBox);
  const updateActiveBox = (element) => {
    if (activeBox.current && element) {
      activeBox.current.style.top = element.offsetTop + "px";
      activeBox.current.style.left = element.offsetLeft + "px";
      activeBox.current.style.width = element.offsetWidth + "px";
      activeBox.current.style.height = element.offsetHeight + "px";
    }
  };

  const activeCurrentLink = (event) => {
    // Remove 'active' class from the previous link
    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove("active");
    }

    // Add 'active' class to the clicked link
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    // Update the active box position
    updateActiveBox(event.target);
  };

  const navItems = [
    { label: "Home", link: "#home", className: "nav-link active" },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Projects", link: "#projects", className: "nav-link" },
    { label: "Testmonials", link: "#testmonials", className: "nav-link" },
    // { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          className={className}
          key={key}
          ref={key === 0 ? lastActiveLink : null} // Set ref for the first link initially
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
