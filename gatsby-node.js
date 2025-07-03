const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Get all MDX blog posts
  const result = await graphql(`
    query {
      allMdx(
        filter: { frontmatter: { status: { eq: "published" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          id
          frontmatter {
            slug
            title
            date
            readTime
            excerpt
            tags
            image
            author {
              name
              image
              role
            }
            status
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.error('Error creating pages:', result.errors)
    return
  }

  const posts = result.data.allMdx.nodes

  // Create blog post pages
  posts.forEach((post) => {
    const slug = post.frontmatter.slug || path.basename(post.internal.contentFilePath, '.mdx')
    
    console.log(`Creating page for ${slug}`)
    console.log(`- Content file: ${post.internal.contentFilePath}`)
    
    createPage({
      path: `/blog/${slug}`,
      component: `${path.resolve('./src/templates/blog-post.jsx')}?__contentFilePath=${post.internal.contentFilePath}`,
      context: {
        id: post.id,
        slug: slug,
      },
    })
  })

  // Create tag pages
  const tags = [...new Set(posts.flatMap(post => post.frontmatter.tags || []))]
  
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag}`,
      component: path.resolve('./src/templates/tag.jsx'),
      context: {
        tag: tag,
      },
    })
  })
}

// Create image connections for blog posts
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  
  if (node.internal.type === 'Mdx' && node.frontmatter && node.frontmatter.image) {
    // Create a field that points to the image in src/assets/img/blog/
    createNodeField({
      node,
      name: 'imageRelativePath',
      value: `img/blog/${node.frontmatter.image}`,
    })
  }
}

// Create image sitemap
exports.onPostBuild = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allFile(filter: {extension: {regex: "/(jpg|jpeg|png|webp|avif)/"}}) {
        nodes {
          publicURL
          name
          extension
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const images = result.data.allFile.nodes
    .filter(file => file.childImageSharp)
    .map(file => ({
      url: file.publicURL,
      name: file.name,
      extension: file.extension,
    }))

  // Create image sitemap page
  createPage({
    path: '/image-sitemap.xml',
    component: path.resolve('./src/templates/image-sitemap.jsx'),
    context: {
      images,
    },
  })
} 