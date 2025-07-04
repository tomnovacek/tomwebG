import React from 'react'
import { Button } from '@chakra-ui/react'
import { useAnalytics } from '../hooks/useAnalytics'

const AnalyticsButton = ({ 
  children, 
  buttonName, 
  location = 'unknown',
  onClick,
  as,
  ...props 
}) => {
  const { trackButtonClick } = useAnalytics()

  const handleClick = (e) => {
    // Track the button click
    trackButtonClick(buttonName, location)
    
    // Call the original onClick if provided
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <Button as={as} onClick={handleClick} {...props}>
      {children}
    </Button>
  )
}

export default AnalyticsButton 