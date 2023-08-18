import React from "react";
import ".././styles.css";
import Hamburger from "../component/imges/hamburger (1).png";
import Close from "../component/imges/close.png";

function Header() {
  return (
    <div className="main-header">
      <nav className="main-nav">
        <a className="logo-title" href="#">
          <img
            className="index-logo"
            src="https://raw.githubusercontent.com/lendmid/bluerex/58f3a887cae075f55f56a3caa55cc65cb6ca65c6/img/logo.png"
            width="69"
            height="62"
            alt="Logo"
          />
          BlueRex
        </a>
        <ul className="site-nav">
          <li>
            <a className="site-nav-link current" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="site-nav-link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="site-nav-link" href="#">
              Features
            </a>
          </li>
          <li>
            <a className="site-nav-link" href="#">
              Product
            </a>
          </li>
          <li>
            <a className="site-nav-link" href="#">
              Reviews
            </a>
          </li>
          <li>
            <a className="site-nav-link" href="#">
              Faq
            </a>
          </li>
          <li>
            <a className="site-nav-link" href="#">
              Contact
            </a>
          </li>

          <li className="site-nav-list-menu">
            <a className="link-menu" href="#">
              <img
                className="icon-menu"
                src={Hamburger}
                width="30"
                height="24"
                alt="Menu"
              />
              <img
                className="icon-xmark"
                src={Close}
                width="28"
                height="28"
                alt="Close"
              />
            </a>

            <div className="menu-wrapper">
              <ul className="menu-list">
                <li>
                  <a className="menu-list-link" href="#">
                    Login
                  </a>
                </li>
                <li>
                  <a className="menu-list-link" href="#">
                    Sign Up
                  </a>
                </li>
                <li>
                  <a className="menu-list-link" href="#">
                    Support
                  </a>
                </li>
                <li>
                  <a className="menu-list-link" href="#">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
