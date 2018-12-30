import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Link } from 'gatsby'

class PortfolioItem extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta name="description" content={`Marco Poletto Frontend Web Developer, Web Designer freelance, ${this.props.title}`}/>
                    <title>Marco Poletto | Web Developer - Portfolio - {this.props.title}</title>
                    <body className="alternate" />
                </Helmet>
                <div className="portfolio-detail__content">
                    <h1>{this.props.title}</h1>
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
                            <span>Role</span>
                            <p className="portfolio-detail__role">{this.props.role}</p>
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
                <Link to="/portfolio" className="portfolio__back">Back</Link>
            </React.Fragment>
        )
    }
}

export default PortfolioItem;