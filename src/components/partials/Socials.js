import React, { Component } from 'react'

const socials = [
    {
        type: "ion-social-github",
        link: "https://github.com/polettoweb",
        title: "GitHub Page"
    },
    {
        type: "ion-social-codepen",
        link: "https://codepen.io/polettoweb/",
        title: "Codepen Page"
    },
    {
        type: "ion-social-twitter",
        link: "https://twitter.com/polettoweb",
        title: "Twitter Page"
    },
    {
        type: "ion-social-linkedin",
        link: "https://www.linkedin.com/in/marco-poletto-96853774/",
        title: "Linkedin Page"
    },
    {
        type: "ion-social-youtube",
        link: "https://www.youtube.com/channel/UC_ap7AXgonikRgAYqRhbibg",
        title: "YouTube channel"
    },
    {
        type: "ion-email",
        link: "mailto:marco@marcopoletto.eu",
        title: "Contact me via email"
    }
];

class Socials extends Component {
    render() {
        return (
            <div className="socials__container">
                {socials.map((social, index) => {
                    return (
                        <a
                            href={social.link}
                            title={social.title}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className={social.type}></i>
                        </a>
                    )
                })}
            </div>
        )
    }
}

export default Socials
