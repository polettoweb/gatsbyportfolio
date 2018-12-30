import React from 'react'
import Layout from '../../components/layout'
import PortfolioItem from '../../components/partials/PortfolioItem'
import belling from '../../images/bbvenezia-devices.png'

const item = {
    path: 'bbvenezia',
    title: 'B&B Venezia',
    websites: [
        {
            link: 'https://www.bbvenezia.com',
            title: 'B&B Venezia Website',
        },
    ],
    alt: 'Project developed on pure HTML and CSS with a touch of Javascript. Multi page / multi language website built for a Bed and Breakfast in Venice - Italy ',
    src: belling,
    tags: ['HTML', 'CSS', 'Javascript', 'AJAX', 'RESTful API'],
    role: 'Web Designer Freelance',
}

const Belling = () => (
    <Layout>
        <PortfolioItem {...item} />
    </Layout>
)

export default Belling
