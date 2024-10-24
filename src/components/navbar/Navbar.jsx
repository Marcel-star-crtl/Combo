import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from "../../assets/logo.png"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        {/* <div className="gpt3__navbar-links_container">
          <p><a href="#ulev">About creative evenings</a></p>
          <p><a href="#locations">Locations</a></p>
        </div> */}
      </div>
      <div className="gpt3__navbar-sign">
        <a href="#">
          <button type="button">Register Here </button>
        </a>
      </div>
      {/* <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#wgpt3">What are Creative-evening?</a></p>
            <p><a href="#locations">Locations</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <a href="#">
              <button type="button">Sign Up</button>
            </a>
          </div>
        </div>
        )}
      </div> */}
    </div>
  );
};

export default Navbar;
