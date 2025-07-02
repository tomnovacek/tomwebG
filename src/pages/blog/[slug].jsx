import React from 'react'
import Layout from '../../components/Layout'
import BlogPostContent from '../BlogPostContent.jsx'

const BlogPostPage = ({ params }) => {
  return (
    <Layout>
      <BlogPostContent slug={params.slug} />
    </Layout>
  )
}

export default BlogPostPage 