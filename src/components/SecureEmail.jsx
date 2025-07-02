import React, { useState, useEffect } from 'react'
import { Link, Text } from '@chakra-ui/react'

// Secure email component that protects against spam harvesters
const SecureEmail = ({ 
  email, 
  displayText, 
  color = "green.400", 
  fontSize = "inherit",
  fontWeight = "inherit",
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [emailAddress, setEmailAddress] = useState('')
  const [emailLink, setEmailLink] = useState('')

  useEffect(() => {
    // Construct email address from parts to avoid detection
    const parts = email.split('@')
    const local = parts[0]
    const domain = parts[1]
    
    // Set email address and link after component mounts
    setEmailAddress(`${local}@${domain}`)
    setEmailLink(`mailto:${local}@${domain}`)
    setIsLoaded(true)
  }, [email])

  if (!isLoaded) {
    return (
      <Text 
        color={color} 
        fontSize={fontSize} 
        fontWeight={fontWeight}
        {...props}
      >
        {displayText || 'Loading...'}
      </Text>
    )
  }

  return (
    <Link 
      href={emailLink}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      _hover={{ textDecoration: 'underline' }}
      {...props}
    >
      {displayText || emailAddress}
    </Link>
  )
}

export default SecureEmail 