import React from 'react'
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'

const ExerciseFrame = ({ title, children }) => {
  const bgColor = useColorModeValue('green.50', 'green.900')
  const borderColor = useColorModeValue('green.200', 'green.700')
  const textColor = useColorModeValue('green.800', 'green.100')
  const headingColor = useColorModeValue('green.700', 'green.200')

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

export default ExerciseFrame 