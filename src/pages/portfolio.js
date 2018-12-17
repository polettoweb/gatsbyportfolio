import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import missguided from '../images/missguided-logo.png'
import mennace from '../images/mennace-logo.jpg'
import aquapura from '../images/aquapura-logo.jpg'
import belling from '../images/belling-logo.jpg'
import tankard from '../images/lanterntankard-logo.jpg'
import bmusa from '../images/bm-logo.jpg'
import stoves from '../images/stoves-logo.jpg'
import bbvenezia from '../images/bbvenezia-logo.jpg'
import bmuk from '../images/bm-logo.jpg'
import mag from '../images/mag-logo.jpg'

const PortfolioItems = [
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
        path: 'missguided',
        alt: 'Highly customised, multilanguage Magento eCommerce website',
        src: missguided,
        tags:
            'Magento, Frontend Development, HTML5, Sass, Javascript, JSON, AJAX, RESTful API, A/B testing',
        link: 'https://missguided.co.uk',
        linkTitle: 'Missguided',
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
        path: 'aquapura',
        alt: 'Responsive website based on Wordpress and developed from scratch',
        src: aquapura,
        tags:
            'Wordpress, Frontend Development, HTML5, Sass, Javascript, jQuery, JSON, AJAX, WebGL, RESTful API',
        link: 'https://aqua-pura.com',
        linkTitle: 'Aqua Pura UK',
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
        path: 'lanterntankard',
        alt: 'Responsive single page website built from scratch',
        src: tankard,
        tags: 'Frontend Development, HTML5, Sass, CSS animations, Javascript',
        link: 'http://www.thelanterntankard.com',
        linkTitle: 'The Lantern Tankard',
    },
    {
        path: 'brandymelville',
        alt:
            'Magento Enterprise eCommerce Website built for the USA branch of BrandyMelville. An High street fashion brand',
        src: bmusa,
        tags:
            'Graphic Design, Full Stack Development, Magento, Sass, Javascript, JSON, AJAX, RESTful API',
        link: 'http://www.brandymelvilleusa.com',
        linkTitle: 'Brandy Melville USA',
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
        path: 'bbvenezia',
        alt:
            'Responsive website built for a Bed&amp;Breakfast in Venice using HTML5, Sass, jQuery, and PHP for the online booking.',
        src: bbvenezia,
        tags:
            'Graphic Design, Full Stack Development, PHP, Sass, CSS3, Javascript, RESTful API',
        link: 'http://www.bbvenezia.com',
        linkTitle: 'B&amp;B Venezia',
    },
    {
        path: 'brandymelville',
        alt:
            'Magento Enterprise eCommerce Website built for the UK branch of BrandyMelville. An High street fashion brand',
        src: bmuk,
        tags:
            'Graphic Design, Full Stack Development, Magento, Sass, Javascript, JSON, AJAX, RESTful API',
        link: 'http://www.brandymelville.co.uk',
        linkTitle: 'Brandy Melville UK',
    },
]
class Portfolio extends Component {
    render() {
        return (
            <Layout>
                <div className="portfolio">
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
