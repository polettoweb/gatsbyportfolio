import React, { Component } from 'react'
import github from '../../images/GitHub.png'

class WorkshopItem extends Component {
    constructor(props) {
        super(props)
        this.image = this.props.image
        this.text = this.props.text
        this.link = this.props.link
        this.linktitle = this.props.linktitle
        this.linkGit = this.props.linkGit
        this.tags = this.props.tags
        this.linkGitTitle = this.props.linkGitTitle
    }
    render() {
        let tags = this.tags.split(',')
        return (
            <div className="workshop__box">
                <div className="workshop__img">
                    <a
                        href={this.link}
                        title={this.linktitle}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="workshop__techImg"
                            src={this.image}
                            alt={this.linktitle}
                        />
                    </a>
                </div>
                <div className="workshop__links">
                    <p className="workshop__links-text">{this.text}</p>
                    <div className="workshop__tags">
                        {tags.map(tag => {
                            return <i key={tag}>{tag}</i>
                        })}
                    </div>
                    {this.linkGit ? (
                        <a
                            href={this.linkGit}
                            title={this.linkGitTitle}
                            target="_blank"
                            className="workshop__links-git"
                            rel="noopener noreferrer"
                        >
                            <img src={github} alt="GitHub Logo" />
                        </a>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        )
    }
}

export default WorkshopItem
