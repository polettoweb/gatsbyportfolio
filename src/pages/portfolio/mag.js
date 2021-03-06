import React from 'react'
import Layout from '../../components/layout'
import PortfolioItem from '../../components/partials/PortfolioItem'
import mag from '../../images/mag-devices.png';

const item = {
    path: 'mag',
    title: 'Manchester Airport Group',
    websites: [
        {
            link:'https://www.manchesterairport.co.uk',
            title: 'Manchester Airport Official Website'
        },
        {
            link:'https://www.stanstedairport.com/',
            title: 'Stansted Airport Official Website'
        },
        {
            link: 'https://www.eastmidlandsairport.com/',
            title: 'East Midlands Official Airport'
        },
        {
            link: 'https://www.escapelounges.com/',
            title: 'Airports Escape lounges Website'
        }
    ],
    alt:'Various websites built and maintained for the MAG Airports group using VueJS as a frontend framework and deep diving into its ecosystem. VueX for state management, NuxtJS for server-side rendering, Sass for styling, Webpack as development bundler.',
    src: mag,
    tags: [
        'VueJS',
        'VueX',
        'Server-Side Rendering',
        'Razor',
        'Sass',
        'Javascript',
        'JSON',
        'AJAX',
        'RESTful API',
        'GraphQL',
        'Webpack'
    ],
    role: 'UI Engineer'
}

const Mag = () => (
    <Layout>
        <PortfolioItem {...item}/>
    </Layout>
)

export default Mag
