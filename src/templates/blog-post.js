import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

export default function Template({ data }) {
    const post = data.markdownRemark

    return (
        <Layout>
            <Helmet>
                <meta
                    name="description"
                    content={`Marco Poletto Frontend Web Developer, Web Designer freelance, ${
                        post.frontmatter.title
                    }`}
                />
                <title>Marco Poletto | Blog | {post.frontmatter.title}</title>
            </Helmet>
            <div className="blog__container">
                <Link to="/blog" className="portfolio__back">
                    Back
                </Link>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                date
            }
        }
    }
`
