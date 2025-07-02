import { format } from 'date-fns'
import { cs } from 'date-fns/locale'

// Gatsby GraphQL query to get all blog posts
export const getAllPosts = async () => {
  // In Gatsby, we need to use GraphQL queries
  // This function should be called from a component that has access to GraphQL data
  // For now, we'll return an empty array and handle the data fetching in the components
  
  // The actual data fetching should be done using useStaticQuery or page queries
  // in the React components that need the data
  
  return []
}

// Get a single post by slug
export const getPostBySlug = async (slug) => {
  // This function should be called from a component that has access to GraphQL data
  // For now, we'll return null and handle the data fetching in the components
  
  return null
}

// Get posts by tag
export const getPostsByTag = async (tag) => {
  const posts = await getAllPosts()
  return posts.filter((post) => post.tags.includes(tag))
}

// Get all unique tags
export const getAllTags = async () => {
  const posts = await getAllPosts()
  const tags = new Set()
  posts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => tags.add(tag))
    }
  })
  return Array.from(tags).sort()
}

// Get related posts
export const getRelatedPosts = async (currentPost, limit = 3) => {
  const posts = await getAllPosts()
  return posts
    .filter((post) => post.slug !== currentPost.slug)
    .filter((post) => post.tags && currentPost.tags && post.tags.some((tag) => currentPost.tags.includes(tag)))
    .slice(0, limit)
}

export async function getLatestPosts(count = 3) {
  const posts = await getAllPosts()
  return posts.slice(0, count)
}

// Helper function to format dates
export const formatDate = (dateString) => {
  return format(new Date(dateString), 'd. MMMM yyyy', { locale: cs })
}

// Helper function to process blog post data from GraphQL
export const processBlogPost = (node) => {
  try {
    const { frontmatter, fields, internal } = node
    
    // Create slug from file path if fields.slug doesn't exist
    let slug = fields?.slug
    if (!slug && internal?.contentFilePath) {
      const pathParts = internal.contentFilePath.split('/')
      const fileName = pathParts[pathParts.length - 1]
      slug = fileName.replace('.mdx', '')
    }
    
    const processed = {
      slug: slug,
      title: frontmatter.title,
      date: formatDate(frontmatter.date),
      readTime: frontmatter.readTime,
      excerpt: frontmatter.excerpt,
      tags: frontmatter.tags || [],
      image: frontmatter.image ? `/assets/img/${frontmatter.image}` : null,
      author: frontmatter.author,
      content: node.body || node.internal?.content,
      status: frontmatter.status || 'draft'
    }
    
    return processed
  } catch (error) {
    console.error('Error processing blog post:', error, 'Node:', node)
    return null
  }
} 