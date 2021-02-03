import React, { Component } from 'react';

class PortofolioItem extends Component {
    render(){
        return(
          <div className="col-md-4 col-sm-6">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
              <img className="img-fluid" src={this.props.image} alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>{this.props.title}</h4>
              <p className="text-muted">{this.props.subtitle}</p>
            </div>
          </div>
        );
    }
}

export default PortofolioItem;
