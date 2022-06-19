import * as React from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"

import Nav from "../components/nav"

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Home" />

        <p>
          No blog posts found.
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />

      <Nav />
      <section className="blog-content">

      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article className="post-list-item" itemScope itemType="http://schema.org/Article">

                <section>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
            
                  <p dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }} itemProp="description"/>
                  
                </section>
              </article>
            </li>
          )
        })}
      </ol>

      </section>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
