import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const ExerciseFrame = ({ title, children }) => (
  <Box
    border="1px solid"
    borderColor="gray.200"
    borderRadius="md"
    p={4}
    my={4}
    bg="gray.50"
  >
    <Text fontWeight="bold" mb={2}>{title}</Text>
    {children}
  </Box>
)

export default ExerciseFrame 