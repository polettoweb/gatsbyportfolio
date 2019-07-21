import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import '../main'
import Layout from '../components/layout'
import Keywords from '../components/partials/Keywords'
import me from '../images/marco-nobg.png'


const Home = ({data}) => (
    <Layout>
        <div className="home__container">
            <Helmet>
                <meta charSet="UTF-8" />
                <meta
                    name="description"
                    content="Marco Poletto Frontend Web Developer, UI Engineer, Web Designer freelance and mentor for Junion developers"
                />
                <meta
                    name="author"
                    content="Marco Poletto Web Developer"
                />
                <title>Marco Poletto | Web Developer | Mentor</title>
            </Helmet>
            <div className="home__intro">
                <h1>
                    Hi, I'm Marco, <br />
                    <span>
                        Frontend Developer,
                        <br />
                        UI Engineer &amp; Mentor
                    </span>
                </h1>
                <div className="photo">
                    <img src={me} alt="Marco Poletto" />
                </div>
                <Keywords />
                <div className="home__text">
                    <p>
                        My goal is to build clean, performant and accessible
                        user interfaces where the right user experience is a
                        focal point. My job is also my passion and,
                        therefore, seeking out new technologies and stay
                        up-to-date on industry trends and advancements is
                        more a pleasure than a duty. This allows me to stay
                        ahead of the curve and deliver exceptional work to
                        all of my clients.
                    </p>
                </div>
            </div>
            <div className="home__latest">
                <h2>Latest from blog</h2>
                {data.allMarkdownRemark.edges.map(post => (
                    <article className="" key={post.node.frontmatter.date}>
                        <Link to={post.node.frontmatter.path}>
                            <div className="">
                                <img
                                    src={
                                        post.node.frontmatter.featured
                                            .childImageSharp.fluid.src
                                    }
                                    alt={post.node.frontmatter.title}
                                    className=""
                                />
                            </div>

                            <div className="">
                                <h3>{post.node.frontmatter.title}</h3>
                                <p>{post.node.excerpt}</p>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    </Layout>
)


export const pagequery = graphql`
    query LatestQuery {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        path
                        title
                        date
                        author
                        featured {
                            childImageSharp {
                                fluid {
                                    src
                                }
                            }
                        }
                    }
                    excerpt
                }
            }
        }
    }
`

export default Home