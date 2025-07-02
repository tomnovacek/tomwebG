import React from 'react'
import { Avatar } from '@chakra-ui/react'

const OptimizedAvatar = ({
  src,
  name,
  size = 'md',
  fallbackSrc = '/assets/optimized-images/CAP-md.webp',
  ...props
}) => {
  return (
    <Avatar
      src={src || fallbackSrc}
      name={name}
      size={size}
      {...props}
    />
  )
}

export default OptimizedAvatar 