import React, { Component } from 'react';
import Header from '../Common/header';
import Service from './service';
// import Portfolio from './portfolio';

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          image='../../assets/images/header.jpg'
          title="Welcome to my Studio!"
          subtitle="It's nice to meet you"
          showButton={true}
          link="/service"
          buttonText="Show me more"
        />
        <Service />
      </div>
    );
  }
}

export default Home;
