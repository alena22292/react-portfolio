import React, { Component } from 'react';
import PortofolioItem from './portfolioItem';

const portfolio = [
  {title: 'Redu.co', subtitle: 'The App will help you to reduce CO2 emissions on daily base', image: '../../../assets/images/Portofolio/01-thumbnail.jpg' },
]

class Portfolio extends Component {
  render() {
    return (
      <section className="bg-light page-top" id="portfolio">
        <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="text-uppercase">Portfolio</h2>
              <h3 className="text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
        </div>
        <div className="row">
            {portfolio.map((item, i)=>{
                return <PortofolioItem {...item} key={i} />
            })}
        </div>
        </div>
       </section>
    );
  }
}

export default Portfolio;
