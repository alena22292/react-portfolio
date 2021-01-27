import React, { Component } from 'react';
import PortofolioItem from './portfolioItem';

const portfolio = [
  {title: 'Threads', subtitle: 'Illustration', image: '../../../assets/images/Portofolio/01-thumbnail.jpg' },
  {title: 'Explore', subtitle: 'Graphic Design', image: '../../../assets/images/Portofolio/02-thumbnail.jpg' },
  {title: 'Finish', subtitle: 'Identity', image: '../../../assets/images/Portofolio/03-thumbnail.jpg' },
  {title: 'Lines', subtitle: 'Branding', image: '../../../assets/images/Portofolio/04-thumbnail.jpg' },
  {title: 'Southwest', subtitle: 'Website Design', image: '../../../assets/images/Portofolio/05-thumbnail.jpg' },
  {title: 'Window', subtitle: 'Photography', image: '../../../assets/images/Portofolio/06-thumbnail.jpg' }
]

class Portfolio extends Component {
  render() {
    return (
      <section className="bg-light page-section" id="portfolio">
        <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
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
