import React, { Component } from 'react';
import PortofolioItem from './portfolioItem';

const portfolio = [
  { title: 'Redu.co', subtitle: 'The App will help you to reduce CO2 emissions on daily base', image: '../../../assets/images/Portofolio/project_1_2.png', link: 'http://www.redu.co', local: '/reduco' },
  { title: 'Dress-to-Impress', subtitle: 'How often do you wonder what to dress to the comming party...', image: '../../../assets/images/Portofolio/project_2_1.png', link: 'https://dress-to-impress-alena.herokuapp.com/', local: '/dress' },
  { title: 'Task Tracker', subtitle: 'This app helps you to maintain a time management of daily life', image: '../../../assets/images/Portofolio/project_3_2.png', link: '/tasks', local: '/tasks' },
];

class Portfolio extends Component {
  render() {
    return (
      <section className="bg-light page-top" id="portfolio">
        <div className="container">
          <div className="text-center mb-3">
            <h2 className="text-uppercase">Portfolio</h2>
            <h3 className="text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
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
