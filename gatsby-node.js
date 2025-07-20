const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Get all MDX blog posts
  const result = await graphql(`
    query {
      allMdx(
        filter: { 
          frontmatter: { status: { eq: "published" } }
          internal: { contentFilePath: { regex: "/blogPosts/" } }
        }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          id
          frontmatter {
            title
            date
            readTime
            excerpt
            tags
            author {
              name
            }
            status
          }
          internal {
            contentFilePath
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.error('GraphQL errors:', result.errors)
    throw result.errors
  }

  const posts = result.data.allMdx.nodes
  console.log(`Found ${posts.length} blog posts`)

  // Debug: Log each post's contentFilePath
  posts.forEach((post, index) => {
    console.log(`Post ${index + 1}:`, {
      id: post.id,
      title: post.frontmatter.title,
      contentFilePath: post.internal.contentFilePath,
      hasContentFilePath: !!post.internal.contentFilePath
    })
  })

  // Create individual blog post pages
  posts.forEach(post => {
    if (!post.internal.contentFilePath) {
      console.warn(`Skipping post ${post.id} - no contentFilePath`)
      console.warn(`Post title: ${post.frontmatter.title}`)
      return
    }

    const slug = post.fields?.slug || path.basename(post.internal.contentFilePath, path.extname(post.internal.contentFilePath))
    
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
    const tagPosts = posts.filter(post => 
      post.frontmatter.tags && post.frontmatter.tags.includes(tag)
    )
    
    createPage({
      path: `/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`,
      component: path.resolve('./src/templates/tag.jsx'),
      context: {
        tag,
        posts: tagPosts
      }
    })
  })
}

// Create slug field for MDX nodes and handle image connections
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  
  if (node.internal.type === 'Mdx') {
    // Debug: Log MDX node creation
    console.log('Creating MDX node:', {
      id: node.id,
      contentFilePath: node.internal.contentFilePath,
      hasContentFilePath: !!node.internal.contentFilePath,
      absolutePath: node.internal.absolutePath,
      relativePath: node.internal.relativePath
    })
    
    // Create slug field for MDX files
    const filePath = node.internal.contentFilePath
    if (filePath && filePath.includes('/blogPosts/')) {
      const fileName = path.basename(filePath, path.extname(filePath))
      createNodeField({
        node,
        name: 'slug',
        value: fileName,
      })
    }
    
    // Handle featuredImage connections for MDX nodes
    if (node.frontmatter && node.frontmatter.featuredImage) {
      // Create a field that points to the image in src/assets/img/
      const imagePath = node.frontmatter.featuredImage.startsWith('img/') 
        ? node.frontmatter.featuredImage 
        : `img/${node.frontmatter.featuredImage}`
      
      createNodeField({
        node,
        name: 'imageRelativePath',
        value: imagePath,
      })
    }
  }
  
  if (node.internal.type === 'MarkdownRemark' && node.frontmatter && node.frontmatter.featuredImage) {
    // Create a field that points to the image in src/assets/img/blog/
    // Check if the path already contains img/blog prefix
    const imagePath = node.frontmatter.featuredImage.startsWith('img/blog/') 
      ? node.frontmatter.featuredImage 
      : `img/blog/${node.frontmatter.featuredImage}`
    
    createNodeField({
      node,
      name: 'imageRelativePath',
      value: imagePath,
    })
  }
}

// Create image sitemap
exports.onPostBuild = async ({ graphql, actions }) => {
  const { createPage } = actions

  try {
    const result = await graphql(`
      query {
        allFile(filter: {extension: {regex: "/(jpg|jpeg|png|webp)/"}}) {
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
      console.error('Error creating image sitemap:', result.errors)
      return
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
  } catch (error) {
    console.error('Error in onPostBuild:', error)
  }
} 

/**
 * @param {import('gatsby').CreateWebpackConfigArgs} args
 * @param {import('gatsby').CreateWebpackConfigArgs['actions']} args.actions
 * @param {import('gatsby').CreateWebpackConfigArgs['getConfig']} args.getConfig
 */
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  const config = getConfig()
  
  // Disable source maps in production
  if (stage === 'build-html' || stage === 'develop-html') {
    config.devtool = false
  }
  
  if (stage === 'build-javascript') {
    config.devtool = false
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    }
  }
  
  actions.replaceWebpackConfig(config)
} 