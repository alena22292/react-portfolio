import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div>
        <section class="s1">
          <div class="main-container">
            <h1>This is main content</h1>
          </div>
        </section>
        <section class="s2">
          <div class="main-container">
            <h1>About</h1>
          </div>
        </section>
        <section class="s1">
          <div class="main-container">
            <h1>Contact</h1>
          </div>
        </section>
        <section class="s2">
          <div class="main-container">
            <h1>Portfolio</h1>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
