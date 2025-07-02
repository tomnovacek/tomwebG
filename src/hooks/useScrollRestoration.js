import { useEffect } from 'react'
import { useLocation } from '@gatsbyjs/reach-router'

export function useScrollRestoration() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
} 