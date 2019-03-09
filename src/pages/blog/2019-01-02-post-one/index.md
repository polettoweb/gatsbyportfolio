---
path: '/blog/post-one'
date: '02 Jan 2019'
title: 'ReactJs features I would love in VueJs'
author: 'Marco Poletto'
featured: './vuevsreact.jpg'
---

testo di prova
![alt text](./vuevsreact.jpg "Logo Title Text 1")

```js
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
```
