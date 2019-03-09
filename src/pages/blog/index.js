import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Helmet from 'react-helmet'

const Blog = ({ data }) => (
    <Layout>
        <Helmet>
            <meta
                name="description"
                content="Marco Poletto Frontend Web Developer, Web Designer freelance, blog"
            />
            <title>
                Marco Poletto's Blog - Frontend Web Developer | UI Engineer |
                Mentor
            </title>
        </Helmet>
        <div className="blog-cat__home">
            <h1>Blog</h1>
            <div className="blog-cat__container">
                {data.allMarkdownRemark.edges.map(post => (
                    <article className="blog-cat__post" key={post.node.frontmatter.date}>
                        <Link to={post.node.frontmatter.path}>
                            <div className="blog-cat__image">
                                <img
                                    src={
                                        post.node.frontmatter.featured
                                            .childImageSharp.fluid.src
                                    }
                                    alt={post.node.frontmatter.title}
                                    className="blog-cat__image"
                                />
                            </div>

                            <div className="blog-cat__title">
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
    query BlogIndexQuery {
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

export default Blog
