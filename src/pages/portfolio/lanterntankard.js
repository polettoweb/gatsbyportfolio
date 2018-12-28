import React from 'react'
import Layout from '../../components/layout'
import PortfolioItem from '../../components/partials/PortfolioItem'
import tankard from '../../images/lanterntankard-devices.png'

const item = {
    path: 'lanterntankard',
    websites: [
        {
            link: 'https://www.thelanterntankard.co.uk',
            title: 'The Lantern Tankard Website',
        },
    ],
    alt: 'dummy',
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
