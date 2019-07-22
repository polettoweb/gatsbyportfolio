import React from 'react'
import { Link } from 'gatsby'

const Latest = ({ data }) => (
    <div className="home__latest">
        <h2>Latest from blog</h2>
        {data.allMarkdownRemark.edges.map(post => (
            <article className="home__blog" key={post.node.frontmatter.date}>
                <Link
                    className="home__blog-title"
                    to={post.node.frontmatter.path}
                >
                    {post.node.frontmatter.title}
                </Link>
                <p className="home__blog-text">{post.node.excerpt}</p>
            </article>
        ))}
    </div>
)

export default Latest
