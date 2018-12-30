import React from 'react'
import Layout from '../../components/layout'
import PortfolioItem from '../../components/partials/PortfolioItem'
import mennace from '../../images/mennace-devices.png'

const item = {
    path: 'mennace',
    title: 'Mennace',
    websites: [
        {
            link: 'https://www.mennace.com',
            title: 'Mennace Menswear Website',
        },
    ],
    alt: 'I was part of a big team maintening the two company\'s websites (Missguided and Mennace) built with Magento and a Wordpress blog, reshaping them with a more up-to-date look and feel, improving their performance, introducing Webpack bundler and React components.',
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
