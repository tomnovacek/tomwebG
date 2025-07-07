import React from 'react'
import { Box, Heading, useColorModeValue } from '@chakra-ui/react'

const ExerciseFrame = ({ title, children }) => {
  const bgColor = useColorModeValue('green.50', 'green.900')
  const borderColor = useColorModeValue('green.200', 'green.700')
  const titleColor = useColorModeValue('green.700', 'green.300')

  return (
    <Box
      bg={bgColor}
      border="1px solid"
      borderColor={borderColor}
      borderRadius="lg"
      p={4}
      my={4}
      boxShadow="sm"
    >
      {title && (
        <Heading
          as="h4"
          size="md"
          color={titleColor}
          mb={3}
          fontWeight="semibold"
        >
          {title}
        </Heading>
      )}
      <Box>{children}</Box>
    </Box>
  )
}

export default ExerciseFrame 