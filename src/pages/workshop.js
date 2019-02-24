import React, { Component } from 'react'
import Helmet from 'react-helmet'
import WorkshopItem from '../components/partials/Workshopitem'
import Layout from '../components/layout'
import nuxtCover from '../images/nuxtCover.jpg'
import reactImg from '../images/react.jpg'
import vueImg from '../images/vueCover.jpg'
import gatsbyImg from '../images/gatsby.jpg'

const workshopItems = [
    {
        text:
            'Source for this Portfolio using React.JS and GatsbyJS as frameworks.',
        image: gatsbyImg,
        tags: 'GatsbyJS, React.JS, GraphQL, Reach-router, Sass',
        link: '/',
        linkTitle: 'React portfolio Website',
        linkGit: 'https://github.com/polettoweb/gatsbyportfolio',
        linkGitTitle: 'React portfolio Github repository',
    },
    {
        text: 'Previous version of the portfolio using React.JS as framework.',
        image: reactImg,
        tags: 'React.JS, React-router, Sass',
        link: 'https://react.marcopoletto.eu',
        linkTitle: 'React portfolio Website',
        linkGit: 'https://github.com/polettoweb/reactportfolio',
        linkGitTitle: 'React portfolio Github repository',
    },
    {
        text: 'Previous version of the portfolio using Nuxt.JS as framework.',
        image: nuxtCover,
        tags: 'Nuxt.JS, Vue.JS, Vuex, Sass',
        link: 'https://nuxt.marcopoletto.eu',
        linkTitle: 'Marco Poletto Nuxt.JS',
        linkGit: 'https://github.com/polettoweb/nuxtportfolio',
        linkGitTitle: 'Nuxt portfolio Github repository',
    },
    {
        text: 'First version of the portfolio using Vue.JS as framework.',
        image: vueImg,
        tags: 'Vue.JS, Vuex, Sass',
        link: 'https://vue.marcopoletto.eu',
        linkTitle: 'Marco Poletto Vue.JS',
        linkGit: 'https://github.com/polettoweb/vueportfolio',
        linkGitTitle: 'Vue portfolio Github repository',
    },
    {
        text: 'Small example of ecommerce functionality in Vue.JS',
        image: vueImg,
        tags: 'Vue.JS, vue-resource, Imageur API',
        link: 'https://small-ecommerce-example-vuejs-ldaubcucrv.now.sh/',
        linkTitle: 'Small ecommerce example in Vue.JS',
        linkGit: 'https://github.com/polettoweb/vue-small-ecommerce',
        linkGitTitle: 'Vue eCommerce Github repository',
    },
    {
        text: 'Todo list Built with Vue.JS',
        image: vueImg,
        tags: 'Vue.JS',
        link: 'https://github.com/polettoweb/todo-vue',
        linkTitle: 'Todo list Built with Vue.JS',
        linkGit: 'https://github.com/polettoweb/todo-vue',
        linkGitTitle: 'Todo list Built with Vue.JS',
    },
]
class Workshop extends Component {
    render() {
        return (
            <Layout>
                <div className="workshop">
                    <Helmet>
                        <meta charSet="UTF-8" />
                        <meta
                            name="description"
                            content="Marco Poletto Frontend Web Developer, Web Designer freelance, workshop, side projects"
                        />
                        <meta
                            name="author"
                            content="Marco Poletto Web Developer"
                        />
                        <title>
                            Marco Poletto | Web Developer - Workshop/Side
                            Projects{' '}
                        </title>
                    </Helmet>
                    <h1>Workshop</h1>
                    <div className="workshop__container">
                        {workshopItems.map(item => {
                            return (
                                <WorkshopItem
                                    text={item.text}
                                    image={item.image}
                                    tags={item.tags}
                                    link={item.link}
                                    linkTitle={item.linkTitle}
                                    linkGit={item.linkGit}
                                    linkGitTitle={item.linkGitTitle}
                                />
                            )
                        })}
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Workshop
