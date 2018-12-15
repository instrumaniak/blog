/**
 * Template for pages that are in markdown
 */

import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default ({ data }) => {
  const page = data.markdownRemark

  return (
    <Layout>
      <h1>{page.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: page.html}}></div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug }}) {
      html
      frontmatter {
        title
      }
    }
  }
`