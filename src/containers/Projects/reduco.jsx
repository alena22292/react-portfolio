import React, { Component } from 'react';
import Header from '../Common/header';

class Reduco extends Component {
  render() {
    return(
      <div className="page-top">
        <Header
          image='../../../assets/images/Portofolio/project_1_0.png'
          title="Reduco!"
          subtitle="We can make our planet treats better"
          showButton={false}
          link="http://www.redu.co"
          buttonText="Show me site"
        />
        <div className="display-flex">
          <img className="portfolio-picture" src="../../../assets/images/Portofolio/project_1_1.png" alt="" />
          <div>
            <h3>Main Idea</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias deserunt ducimus minima corporis, maxime earum omnis asperiores veritatis hic odit eveniet repudiandae sit praesentium dolore id nesciunt esse maiores autem.</p>
          </div>
        </div>
        <div className="display-flex">
          <img className="portfolio-picture" src="../../../assets/images/Portofolio/project_1_2.png" alt="" />
          <div>
            <h3>Main Idea</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias deserunt ducimus minima corporis, maxime earum omnis asperiores veritatis hic odit eveniet repudiandae sit praesentium dolore id nesciunt esse maiores autem.</p>
          </div>
        </div>
        <div className="display-flex">
          <img className="portfolio-picture" src="../../../assets/images/Portofolio/project_1_3.png"  alt="" />
        <div>
           <h3>Main Idea</h3>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias deserunt ducimus minima corporis, maxime earum omnis asperiores veritatis hic odit eveniet repudiandae sit praesentium dolore id nesciunt esse maiores autem.</p>
        </div>
      </div>
    </div>

    );
  }
}

export default Reduco;
