/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Not react code

// Gatsby source file system
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // internal - property which describes the data about the node
  console.log(node.internal.type)
  // if its equal then create aslug
  // a slug is a url link inside Gatsby that the browser is able to access
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// Create Pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
