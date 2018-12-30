import React from 'react'
import Layout from '../../components/layout'
import PortfolioItem from '../../components/partials/PortfolioItem'
import mg from '../../images/missguided-devices.png'

const item = {
    path: 'missguided',
    title: 'Missguided',
    websites: [
        {
            link: 'https://www.missguided.co.uk',
            title: 'Missguided Website',
        },
    ],
    alt: 'I was part of a big team maintening the two company\'s websites (Missguided and Mennace) built with Magento, reshaping them with a more up-to-date look and feel, improving their performance, introducing Webpack bundler and React components.',
    src: mg,
    tags: [
        'React',
        'Magento',
        'Sass',
        'Javascript',
        'JSON',
        'AJAX',
        'RESTful API',
        'Webpack',
    ],
    role: 'Frontend Software Engineer',
}

const Missguided = () => (
    <Layout>
        <PortfolioItem {...item} />
    </Layout>
)

export default Missguided
