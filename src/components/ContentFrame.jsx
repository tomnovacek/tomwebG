import React from 'react'
import {
  Box,
  Heading,
  useColorModeValue,
  Icon,
  VStack,
  HStack,
} from '@chakra-ui/react'
import { FaLightbulb, FaInfoCircle } from 'react-icons/fa'

const ContentFrame = ({ type = 'info', title, children }) => {
  const bgColor = useColorModeValue(
    type === 'exercise' ? 'green.50' : 'blue.50',
    type === 'exercise' ? 'green.900' : 'blue.900'
  )
  const borderColor = useColorModeValue(
    type === 'exercise' ? 'green.200' : 'blue.200',
    type === 'exercise' ? 'green.700' : 'blue.700'
  )
  const iconColor = useColorModeValue(
    type === 'exercise' ? 'green.500' : 'blue.500',
    type === 'exercise' ? 'green.300' : 'blue.300'
  )

  const IconComponent = type === 'exercise' ? FaLightbulb : FaInfoCircle
  const defaultTitle = type === 'exercise' ? 'Cvičení' : 'Důležitá informace'

  return (
    <Box
      bg={bgColor}
      border="1px solid"
      borderColor={borderColor}
      borderRadius="lg"
      p={6}
      my={6}
      position="relative"
      _hover={{
        boxShadow: 'md',
        transform: 'translateY(-2px)',
      }}
      transition="all 0.2s"
    >
      <HStack spacing={3} mb={4}>
        <Icon as={IconComponent} color={iconColor} boxSize={5} />
        <Heading
          as="h3"
          size="md"
          color={iconColor}
        >
          {title || defaultTitle}
        </Heading>
      </HStack>
      <VStack align="stretch" spacing={4}>
        {children}
      </VStack>
    </Box>
  )
}

export default ContentFrame 