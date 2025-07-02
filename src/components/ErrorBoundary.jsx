import React from 'react'
import { Box, Text, Button, VStack } from '@chakra-ui/react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          minH="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={4}
          bg="gray.50"
        >
          <VStack spacing={4} textAlign="center">
            <Text fontSize="xl" fontWeight="bold" color="red.500">
              Něco se pokazilo
            </Text>
            <Text color="gray.600">
              Omlouváme se za nepříjemnosti. Zkuste obnovit stránku.
            </Text>
            <Button
              colorScheme="blue"
              onClick={() => window.location.reload()}
            >
              Obnovit stránku
            </Button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <Box
                mt={4}
                p={4}
                bg="gray.100"
                borderRadius="md"
                maxW="600px"
                overflow="auto"
                textAlign="left"
              >
                <Text fontSize="sm" fontWeight="bold" mb={2}>
                  Error Details (Development):
                </Text>
                <Text fontSize="xs" fontFamily="mono" whiteSpace="pre-wrap">
                  {this.state.error.toString()}
                </Text>
              </Box>
            )}
          </VStack>
        </Box>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary 