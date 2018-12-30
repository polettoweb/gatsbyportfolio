import React from 'react'
import Layout from '../../components/layout'
import PortfolioItem from '../../components/partials/PortfolioItem'
import stoves from '../../images/stoves-devices.png'

const item = {
    path: 'stoves',
    title: 'Stoves Appliances',
    websites: [
        {
            link: 'https://www.stoves.co.uk',
            title: 'Stoves Aplliances Website',
        },
    ],
    alt: 'Project developed on Umbraco MVC using HTML, Razor and JAvascript for frontend. Creation of tools in Javascript like product configurator and new carousels',
    src: stoves,
    tags: ['Sass', 'Javascript', 'JSON', 'AJAX', 'RESTful API', 'Umbraco'],
    role: 'Frontend Web Developer',
}

const Stoves = () => (
    <Layout>
        <PortfolioItem {...item} />
    </Layout>
)

export default Stoves
