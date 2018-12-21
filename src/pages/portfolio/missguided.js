import React from 'react'
import Layout from '../../components/layout'
import PortfolioItem from '../../components/partials/PortfolioItem'
import mg from '../../images/missguided-devices.jpg';

const item = {
    path: 'missguided',
    websites: [
        {
            link:'https://www.missguided.co.uk',
            title: 'Missguided Website'
        },
    ],
    alt:'Dummy text',
    src: mg,
    tags: [
        'React',
        'Magento',
        'Sass',
        'Javascript',
        'JSON',
        'AJAX',
        'RESTful API',
        'Webpack'
    ],
    role: 'Frontend Software Engineer'
}

const Missguided = () => (
    <Layout>
        <PortfolioItem {...item}/>
    </Layout>
)

export default Missguided
