import { useState, useEffect } from 'react'
import { getPostBySlug } from '../utils/mdx'

export function useBlogPost(slug) {
  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadPost = async () => {
      try {
        const postData = await getPostBySlug(slug)
        setPost(postData)
        setError(null)
      } catch (err) {
        setError(err)
        setPost(null)
      } finally {
        setIsLoading(false)
      }
    }

    loadPost()
  }, [slug])

  return { post, isLoading, error }
} 