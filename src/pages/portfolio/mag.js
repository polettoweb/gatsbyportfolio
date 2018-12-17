import React from 'react'
import Layout from '../../components/layout'
import { Helmet } from 'react-helmet'
import mag from '../../images/mag-devices.png'

const PortfolioItem = {
    path: 'mag',
    alt:
        'Magento Enterprise eCommerce Website built for the UK branch of BrandyMelville. An High street fashion brand',
    src: mag,
    tags: [
        'Graphic Design',
        'Full Stack Development',
        'Magento',
        'Sass',
        ' Javascript',
        'JSON',
        'AJAX',
        'RESTful API',
    ],
    link: 'http://www.brandymelville.co.uk',
    linkTitle: 'Brandy Melville UK',
}

const Mag = () => (
    <Layout>
        <Helmet>
            <body className="alternate" />
        </Helmet>
        <div className="portfolio-detail__content">
            <h1>Manchester Airport Group</h1>
            <div className="portfolio-detail__image">
                <img src={mag} alt={PortfolioItem.alt} />
            </div>
            <div className="portfolio-detail__description">
                <p>{PortfolioItem.alt}</p>
            </div>
        </div>
    </Layout>
)

export default Mag
