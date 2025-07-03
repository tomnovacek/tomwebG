import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Box, Heading, Text } from '@chakra-ui/react'
import ContentFrame from './ContentFrame'

// MDX components
const mdxComponents = {
  h1: (props) => <Heading as="h1" size="xl" mb={4} {...props} />,
  h2: (props) => <Heading as="h2" size="lg" mb={3} mt={6} {...props} />,
  h3: (props) => <Heading as="h3" size="md" mb={2} mt={4} {...props} />,
  p: (props) => <Text mb={4} lineHeight="tall" {...props} />,
  ul: (props) => <Box as="ul" pl={6} mb={4} {...props} />,
  ol: (props) => <Box as="ol" pl={6} mb={4} {...props} />,
  li: (props) => <Text as="li" mb={1} {...props} />,
  blockquote: (props) => (
    <Box
      as="blockquote"
      borderLeft="4px"
      borderColor="green.400"
      pl={4}
      my={4}
      fontStyle="italic"
      {...props}
    />
  ),
  img: (props) => (
    <Box my={6} textAlign="center">
      <img
        src={props.src}
        alt={props.alt || 'Blog post image'}
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '8px',
          display: 'block',
          margin: '0 auto',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
        loading="lazy"
        decoding="async"
        onLoad={(e) => {
          // Prevent layout shift by setting aspect ratio
          e.target.style.aspectRatio = '16/9'
        }}
        {...props}
      />
      {props.alt && (
        <Text fontSize="sm" color="gray.600" mt={2} fontStyle="italic">
          {props.alt}
        </Text>
      )}
    </Box>
  ),
  ExerciseFrame: (props) => <ContentFrame type="exercise" {...props} />,
  InfoFrame: (props) => <ContentFrame type="info" {...props} />,
}

export default function MDXProviderWrapper({ children }) {
  return (
    <MDXProvider components={mdxComponents}>
      {children}
    </MDXProvider>
  )
} 