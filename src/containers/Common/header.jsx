import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render () {
    return (
      <header className="masthead page-top" style={{ backgroundImage: 'url("' + this.props.image + '")' }}>

        <div className="hero-text">
            <h1 style={{ color: '#bbf1fa' }} className="">{this.props.title}</h1>
            <h3 style={{ color: '#bbf1fa' }} className="text-uppercase">{this.props.subtitle}</h3>
            {this.props.showButton &&
                <Link className="btn btn-primary btn-xl text-uppercase " to={this.props.link}>{this.props.buttonText}</Link>
            }
        </div>

      </header>
    );
  }
}

export default Header;
