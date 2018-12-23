import React from 'react'
import Layout from '../../components/layout'
import PortfolioItem from '../../components/partials/PortfolioItem'
import mennace from '../../images/mennace-devices.png'

const item = {
    path: 'mennace',
    websites: [
        {
            link: 'https://www.mennace.com',
            title: 'Mennace Menswear Website',
        },
    ],
    alt: 'Dummy',
    src: mennace,
    tags: [
        'React',
        'Magento',
        'Sass',
        'Javascript',
        'JSON',
        'AJAX',
        'RESTful API',
        'Webpack',
        'Wordpress',
    ],
    role: 'Frontend Software Engineer',
}

const Mag = () => (
    <Layout>
        <PortfolioItem {...item} />
    </Layout>
)

export default Mag
