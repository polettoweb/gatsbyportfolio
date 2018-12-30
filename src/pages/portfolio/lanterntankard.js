import React from 'react'
import Layout from '../../components/layout'
import PortfolioItem from '../../components/partials/PortfolioItem'
import tankard from '../../images/lanterntankard-devices.png'

const item = {
    path: 'lanterntankard',
    title: 'The Lantern Tankard',
    websites: [
        {
            link: 'https://www.thelanterntankard.co.uk',
            title: 'The Lantern Tankard Website',
        },
    ],
    alt: 'Single page website built in HTML, Sass, CSS animations and Vanilla JS . Fully responsive and SEO oriented.',
    src: tankard,
    tags: ['Sass', 'Javascript', 'CSS animations'],
    role: 'Frontend Web Developer',
}

const lanternTankard = () => (
    <Layout>
        <PortfolioItem {...item} />
    </Layout>
)

export default lanternTankard
