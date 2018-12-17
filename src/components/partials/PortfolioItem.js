import React, { Component } from 'react';
class PortfolioItem extends Component {
    constructor(props) {
        super(props);
        // this.image = this.props.image;
        // this.text = this.props.text;
        // this.link = this.props.link;
        this.linkTitle = this.props.linkTitle;
        // this.linkGit = this.props.linkGit;
        this.tags = this.props.tags;
        // this.linkGitTitle = this.props.linkGitTitle;
    }

    render() {
        // let tags = this.tags.split(",");
        return (
            <div className="portfolio__brand" >
                {this.props.brand}
                <a href={this.link} title={this.linkTitle} target="_blank" rel="noopener noreferrer">
                    <img src={this.image} alt={this.linkTitle} />
                </a>
            </div>
        )
    }
}

export default PortfolioItem;