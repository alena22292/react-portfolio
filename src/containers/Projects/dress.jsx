import React, { Component } from 'react';
import Header from '../Common/header';

class Dress extends Component {
  render() {
    return(
      <div className="page-top">
        <Header
          image='../../../assets/images/Portofolio/project_2_1.png'
          title="Dress-to-Impress!"
          subtitle="Dress up - just for fun"
          showButton={false}
          link="http://www.redu.co"
          buttonText="Show me site"
        />
        <div className="display-flex">
          <img className="portfolio-picture" src="../../../assets/images/Portofolio/project_2_2.png" alt="" />
          <div>
              <h3>Main Idea</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias deserunt ducimus minima corporis, maxime earum omnis asperiores veritatis hic odit eveniet repudiandae sit praesentium dolore id nesciunt esse maiores autem.</p>
          </div>
        </div>
        <div className="display-flex">
          <img className="portfolio-picture" src="../../../assets/images/Portofolio/project_2_3.png" alt="" />
          <div>
            <h3>Main Idea</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias deserunt ducimus minima corporis, maxime earum omnis asperiores veritatis hic odit eveniet repudiandae sit praesentium dolore id nesciunt esse maiores autem.</p>
          </div>
        </div>

      </div>

    );
  }
}

export default Dress;
