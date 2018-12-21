import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

class PortfolioItem extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                <body className="alternate" />
            </Helmet>
            <div className="portfolio-detail__content">
                <h1>Manchester Airport Group</h1>
                <div className="portfolio-detail__image">
                    <img src={this.props.src} alt={this.props.alt} />
                </div>
                <div className="portfolio-detail__description">
                    <div className="portfolio-detail__websites">
                        <span>Websites</span>
                        <ul>
                            {
                                this.props.websites.map(item => <li><a href={item.link} title={item.title}>{item.link}</a></li>)
                            }
                        </ul>
                        <span>Techs used</span>
                        <div className="portfolio-detail__techs-list">
                            {
                                this.props.tags.map(item => <p>{item}</p>)
                            }
                        </div>
                    </div>
                    <div className="portfolio-detail__text">
                        <p>{this.props.alt}</p>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default PortfolioItem;