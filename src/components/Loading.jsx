import React from 'react'
import { Box, Spinner, Center } from '@chakra-ui/react'

export const LoadingFallback = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minH="calc(100vh - 64px)"
    width="100%"
    className="loading-fallback"
  >
    <Box
      as="div"
      className="loading-spinner"
      width="40px"
      height="40px"
      border="4px solid"
      borderColor="gray.200"
      borderTopColor="green.500"
      borderRadius="full"
      animation="spin 1s linear infinite"
    />
  </Box>
)

export const Loading = ({ type = 'content' }) => {
  if (type === 'fallback') {
    return <LoadingFallback />
  }

  return (
    <Center h="100vh">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="green.500"
        size="xl"
      />
    </Center>
  )
}

export default Loading 