import React from "react";
import "./navbar.css";
import SubNav from "./SubNav";
import { useState, useEffect } from "react";
import { NavbarData } from "../../data";
import NavLink from "./NavLink";

const Navbar = () => {
  
  const [fixedNav, setFixedNav] = useState(false);
  const [expandNav, setExpandNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setFixedNav(true);
      } else {
        setFixedNav(false);
      }
    });
  });
  const myNavLinks = document.querySelectorAll(".navbar .navbar-nav .nav-link"),
    myNav = document.querySelector(".navbar");
  myNavLinks.forEach((navLink) => {
    navLink.addEventListener("click", (e) => {
      e.preventDefault();
      myNavLinks.forEach((element) => {
        element.classList.remove("active");
      });
      setExpandNav(false);
      e.currentTarget.classList.add("active");
      let myId = e.currentTarget.getAttribute("href").slice(1),
        myEle = document.getElementById(myId),
        navHeight = myNav.getBoundingClientRect().height,
        position = myEle.offsetTop - navHeight;
      window.scrollTo({ left: 0, top: position, behavior: "smooth" });
    });
  });

  return (
    <React.Fragment>
      <SubNav />
      <nav
        className={
          fixedNav
            ? "navbar navbar-expand-lg p-0 fixed-nav"
            : "navbar navbar-expand-lg p-0"
        }
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            Impact<span>.</span>
          </a>
          <button
            onClick={() => setExpandNav((prev) => !prev)}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
         {expandNav ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
          </button>
          <div className={
            expandNav
              ? "navbar-collapse collapse show"
              : "collapse navbar-collapse"
          } id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#top">
                  Home
                </a>
              </li>
              {NavbarData.map((navItem) => {
                return <NavLink key={navItem.id} navItem={navItem} />;
              })}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#statics">
                      Statics
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#testimonials">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#plans">
                      Plans
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#faqs">
                      FAQs
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
