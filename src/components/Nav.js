import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={`nav-link ${this.props.location === "/" ? "active": ""}`} href="/">
                Home 
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${this.props.location === "/about" ? "active": ""}`} href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${this.props.location === "/books" ? "active": ""}`} href="/books">
                Books
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${this.props.location === "/interviews" ? "active": ""}`} href="/interviews">
                Interviews
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${this.props.location === "/faq" ? "active": ""}`} href="/faq">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}