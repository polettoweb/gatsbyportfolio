import React from 'react'
import Layout from '../../components/layout'
import PortfolioItem from '../../components/partials/PortfolioItem'
import brandymelville from '../../images/bmusa-devices.png'

const item = {
    path: 'brandymelville',
    title: 'Brandy Melville',
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
    alt: 'ECommerce website built with Magento. I\'ve created he minimalist theme from scratch using Magento MVC system (PHP), Sass and Javascript. Using fetures like lookbook for shopping directly from the instagram feed. Developmnet environment created and developed from scratch started from an empty linux virtual machine (CentOS)',
    src: brandymelville,
    tags: ['Javascript', 'PHP', 'Magento', 'Sass', 'JSON', 'RESTful API'],
    role: 'Web Developer',
}

const BrandyMelville = () => (
    <Layout>
        <PortfolioItem {...item} />
    </Layout>
)

export default BrandyMelville
