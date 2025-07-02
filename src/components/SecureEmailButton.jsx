import React, { useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react'

// Secure email button component that protects against spam harvesters
const SecureEmailButton = ({ 
  email, 
  children, 
  leftIcon,
  rightIcon,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [emailLink, setEmailLink] = useState('')

  useEffect(() => {
    // Construct email address from parts to avoid detection
    const parts = email.split('@')
    const local = parts[0]
    const domain = parts[1]
    
    // Set email link after component mounts
    setEmailLink(`mailto:${local}@${domain}`)
    setIsLoaded(true)
  }, [email])

  if (!isLoaded) {
    return (
      <Button
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        isDisabled
        {...props}
      >
        {children || 'Loading...'}
      </Button>
    )
  }

  return (
    <Button
      as="a"
      href={emailLink}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      {...props}
    >
      {children}
    </Button>
  )
}

export default SecureEmailButton 