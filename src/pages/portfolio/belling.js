import React from 'react'
import Layout from '../../components/layout'
import PortfolioItem from '../../components/partials/PortfolioItem'
import belling from '../../images/belling-devices.png'

const item = {
    path: 'stoves',
    websites: [
        {
            link: 'https://www.belling.co.uk',
            title: 'Belling Aplliances Website',
        },
    ],
    alt: 'dummy',
    src: belling,
    tags: ['Sass', 'Javascript', 'JSON', 'AJAX', 'RESTful API', 'Umbraco'],
    role: 'Frontend Web Developer',
}

const Belling = () => (
    <Layout>
        <PortfolioItem {...item} />
    </Layout>
)

export default Belling
