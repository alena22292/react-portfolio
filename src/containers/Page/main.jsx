import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div>
        <section className="s1">
          <div className="main-container">
            <div className="greeting-wrapper">
              <h1>Hi, I am Alena</h1>
            </div>

            <div className="intro-wrapper">
              <div className="nav-wrapper">
                <div className="dots-wrapper">
                  <div id="dot-1" className="nav-dots"></div>
                  <div id="dot-2" className="nav-dots"></div>
                  <div id="dot-3" className="nav-dots"></div>
                </div>
                <div id="navigation">
                  <ul>
                    <li>
                      <Link className="" to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link className="" to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>

              </div>
              <div className="left-wrapper">
                <img className="img-fluid my-picture" src="../../assets/images/image_myself.jpg" alt="" />
                <h5 style={{ textAlign: 'center' }}>Personalize Theme</h5>
                <div className="theme-options">
                   <div id="light-mode" className="theme-dots"></div>
                   <div id="green-mode" className="theme-dots"></div>
                   <div id="blue-mode" className="theme-dots"></div>
                   <div id="purple-mode" className="theme-dots"></div>
                </div>
                <p className="light-text">*Theme settings will be saved for<br />your next visit</p>
              </div>
              <div className="right-wrapper">
                 right-column
              </div>
            </div>
          </div>
        </section>
        <section className="s2">
          <div className="main-container">
            <h1>About</h1>
          </div>
        </section>
        <section className="s1">
          <div className="main-container">
            <h1>Contact</h1>
          </div>
        </section>
        <section className="s2">
          <div className="main-container">
            <h1>Portfolio</h1>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
