import React, { Component } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import missguided from '../images/missguided-logo.png'
import mennace from '../images/mennace-logo.png'
import aquapura from '../images/aquapura-logo.png'
import belling from '../images/belling-logo.png'
import tankard from '../images/lanterntankard-logo.png'
import stoves from '../images/stoves-logo.png'
import bbvenezia from '../images/bbvenezia-logo.png'
import mag from '../images/mag-logo-white.png'

const PortfolioItems = [
    {
        path: 'missguided',
        alt: 'Highly customised, multilanguage Magento eCommerce website',
        src: missguided,
        tags:
            'Magento, Frontend Development, HTML5, Sass, Javascript, JSON, AJAX, RESTful API, A/B testing',
        link: 'https://missguided.co.uk',
        linkTitle: 'Missguided',
    },
    {
        path: 'mag',
        alt:
            'Magento Enterprise eCommerce Website built for the UK branch of BrandyMelville. An High street fashion brand',
        src: mag,
        tags:
            'Graphic Design, Full Stack Development, Magento, Sass, Javascript, JSON, AJAX, RESTful API',
        link: 'http://www.brandymelville.co.uk',
        linkTitle: 'Brandy Melville UK',
    },
    {
        path: 'mennace',
        alt: 'Highly customised, multilanguage Magento eCommerce website',
        src: mennace,
        tags:
            'Magento, Frontend Development, HTML5, Sass, Javascript, JSON, AJAX, RESTful API, A/B testing',
        link: 'https://mennace.com/uk',
        linkTitle: 'Mennace',
    },
    {
        path: 'stoves',
        alt: 'Responsive website made on top of Umbraco cms.',
        src: stoves,
        tags:
            'Frontend Development, HTML5, Sass, Javascript, jQuery, JSON, AJAX, GoogleMaps API',
        link: 'http://www.stoves.co.uk',
        linkTitle: 'Stoves UK',
    },
    {
        path: 'lanterntankard',
        alt: 'Responsive single page website built from scratch',
        src: tankard,
        tags: 'Frontend Development, HTML5, Sass, CSS animations, Javascript',
        link: 'http://www.thelanterntankard.com',
        linkTitle: 'The Lantern Tankard',
    },
    {
        path: 'belling',
        alt: 'Responsive website made on top of Umbraco cms.',
        src: belling,
        tags:
            'Frontend Development, HTML5, Sass, Javascript, jQuery, JSON, AJAX',
        link: 'http://www.belling.co.uk',
        linkTitle: 'Belling UK',
    },
    {
        path: 'aquapura',
        alt: 'Responsive website based on Wordpress and developed from scratch',
        src: aquapura,
        tags:
            'Wordpress, Frontend Development, HTML5, Sass, Javascript, jQuery, JSON, AJAX, WebGL, RESTful API',
        link: 'https://aqua-pura.com',
        linkTitle: 'Aqua Pura UK',
    },
    {
        path: 'bbvenezia',
        alt:
            'Responsive website built for a Bed&amp;Breakfast in Venice using HTML5, Sass, jQuery, and PHP for the online booking.',
        src: bbvenezia,
        tags:
            'Graphic Design, Full Stack Development, PHP, Sass, CSS3, Javascript, RESTful API',
        link: 'http://www.bbvenezia.com',
        linkTitle: 'B&amp;B Venezia',
    },
]
class Portfolio extends Component {
    render() {
        return (
            <Layout>
                <div className="portfolio">
                    <Helmet>
                        <meta
                            name="description"
                            content="Marco Poletto Frontend Web Developer, Web Designer freelance, portfolio"
                        />
                        <title>
                            Marco Poletto's Portfolio | Frontend Web Developer |
                            UI Engineer | Mentor
                        </title>
                    </Helmet>
                    <h1>Portfolio</h1>
                    <div className="portfolio__container">
                        {PortfolioItems.map((item, index) => {
                            return (
                                <div className="portfolio__img">
                                    <Link
                                        to={'/portfolio/' + item.path}
                                        alt={item.alt}
                                        tags={item.tags}
                                        linkTitle={item.linkTitle}
                                    >
                                        <img
                                            src={item.src}
                                            key={index}
                                            alt={item.alt}
                                        />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Portfolio
