import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStethoscope, FaBars } from "react-icons/fa";
import "./navbar.css";
import Sidebar from "../Sidebar/Sidebar";

function Navbar() {
  //toggle
  const [click, setClick] = useState(false);
  // const history = useHistory();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [navbg, setNavbg] = useState(false);

  const changeBg = () => {
    // alert(window.scrollY);
    if (window.scrollY >= 90) {
      setNavbg(true);
    } else {
      setNavbg(false);
    }
  };

  window.addEventListener("scroll", changeBg);
  return (
    <>
      <nav
        className={navbg ? " z-depth-0  lb_active " : " z-depth-0 lb_nav_wrap"}
      >
        <ul
          style={{ display: "flex", justifyContent: "space-between" }}
          class="nav-wrapper "
        >
          <li>
            <Link
              style={{ fontWeight: "bold" }}
              to="/"
              class="brand-logo left myLogo"
            >
              <FaStethoscope size={22} />
              -Medics
            </Link>
          </li>

          <Sidebar />

          {/*  <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />{" "}
  </div>*/}
          {/*<ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link to="/blogs" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/department"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Department
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>

            <li className="link flex items-center">
              <FaBars className="h6 mr-1" />
              All
            </li>
  </ul>*/}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
