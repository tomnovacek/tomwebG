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
    <img
      style={{
        borderRadius: '8px',
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
        margin: '24px auto',
      }}
      alt={props.alt || ''}
      loading="lazy"
      {...props}
    />
  ),
  ExerciseFrame: (props) => <ContentFrame type="exercise" {...props} />,
  InfoFrame: (props) => <ContentFrame type="info" {...props} />,
}

export default function MDXContent({ content }) {
  return (
    <MDXProvider components={mdxComponents}>
      <div className="mdx-content" dangerouslySetInnerHTML={{ __html: content }} />
    </MDXProvider>
  )
} 