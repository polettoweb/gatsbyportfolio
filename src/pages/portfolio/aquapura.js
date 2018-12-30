import React from 'react'
import Layout from '../../components/layout'
import PortfolioItem from '../../components/partials/PortfolioItem'
import belling from '../../images/aquapura-devices.png'

const item = {
    path: 'aquapura',
    title: 'Aqua Pura',
    websites: [
        {
            link: 'https://www.aqua-pura.com',
            title: 'Aqua Pura Website',
        },
    ],
    alt: 'Project developed on Wordpress using PHP, Javascript and Sass for frontend. Creation of features in Javascript like the Hydration tool, WebGL for weather feedback and animations',
    src: belling,
    tags: ['Sass', 'Javascript', 'JSON', 'AJAX', 'RESTful API', 'Wordpress'],
    role: 'Frontend Web Developer',
}

const Belling = () => (
    <Layout>
        <PortfolioItem {...item} />
    </Layout>
)

export default Belling
