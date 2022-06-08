import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", this);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt=""
        className="nav_logo"
      />
      <img
        src="https://cdn6.f-cdn.com/contestentries/1642148/39338188/5db7571b12bde_thumb900.jpg"
        alt=""
        className="nav_avatar"
      />
    </div>
  );
};

export default Navbar;
