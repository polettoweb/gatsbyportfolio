import React from 'react'
import Layout from '../../components/layout'
import PortfolioItem from '../../components/partials/PortfolioItem'
import brandymelville from '../../images/bmusa-devices.png'

const item = {
    path: 'brandymelville',
    websites: [
        {
            link: 'https://www.brandymelvilleusa.com',
            title: 'Brandy Melville USA Offical Website ',
        },
        {
            link: 'https://www.brandymelville.co.uk',
            title: 'Brandy Melville UK Offical Website ',
        },
    ],
    alt: 'dummy',
    src: brandymelville,
    tags: ['Javascript', 'Magento', 'Sass', 'JSON', 'RESTful API'],
    role: 'Web Developer',
}

const BrandyMelville = () => (
    <Layout>
        <PortfolioItem {...item} />
    </Layout>
)

export default BrandyMelville
