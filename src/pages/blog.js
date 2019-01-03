import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout'

const Blog = ({data}) =>(
    <Layout>
        <div className="blog-cat__home">
            <h1>Blog</h1>
            <div className="blog-cat__container">
                {data.allMarkdownRemark.edges.map(post => (

                    <article className="blog-cat__post" key={post.node.id}>
                        <Link to={post.node.frontmatter.path}>
                            <div className="blog-cat__image">
                                <img src={post.node.frontmatter.featured.childImageSharp.fluid.src} alt={post.node.frontmatter.title} className="blog-cat__image" />
                            </div>
                            <div className="blog-cat__title">
                                <h2>{post.node.frontmatter.title}</h2>
                            </div>
                            <div className="blog-cat__text">
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

export default Blog;
