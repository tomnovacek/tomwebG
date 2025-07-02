import React from 'react'
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'

const InfoFrame = ({ title, children }) => {
  const bgColor = useColorModeValue('blue.50', 'blue.900')
  const borderColor = useColorModeValue('blue.200', 'blue.700')
  const textColor = useColorModeValue('blue.800', 'blue.100')
  const headingColor = useColorModeValue('blue.700', 'blue.200')

  return (
    <Box
      bg={bgColor}
      border="1px solid"
      borderColor={borderColor}
      borderRadius="lg"
      p={6}
      my={6}
      boxShadow="sm"
    >
      {title && (
        <Heading as="h3" size="md" color={headingColor} mb={3}>
          {title}
        </Heading>
      )}
      <Text color={textColor} lineHeight="1.6">
        {children}
      </Text>
    </Box>
  )
}

export default InfoFrame 