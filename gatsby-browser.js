/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Box, Heading, Text, Link, List, ListItem } from '@chakra-ui/react'

const components = {
  h1: (props) => <Heading as="h1" size="2xl" color="green.600" mb={4} {...props} />,
  h2: (props) => <Heading as="h2" size="xl" color="green.600" mb={3} {...props} />,
  h3: (props) => <Heading as="h3" size="lg" color="gray.700" mb={2} {...props} />,
  h4: (props) => <Heading as="h4" size="md" color="gray.700" mb={2} {...props} />,
  h5: (props) => <Heading as="h5" size="sm" color="gray.700" mb={2} {...props} />,
  h6: (props) => <Heading as="h6" size="xs" color="gray.700" mb={2} {...props} />,
  p: (props) => <Text mb={4} lineHeight="1.7" {...props} />,
  a: (props) => <Link color="green.500" textDecoration="underline" _hover={{ color: 'green.600' }} {...props} />,
  ul: (props) => <List as="ul" styleType="disc" pl={6} mb={4} {...props} />,
  ol: (props) => <List as="ol" styleType="decimal" pl={6} mb={4} {...props} />,
  li: (props) => <ListItem mb={1} {...props} />,
  blockquote: (props) => (
    <Box
      borderLeft="4px solid"
      borderColor="green.500"
      pl={4}
      py={2}
      bg="gray.50"
      borderRadius="md"
      mb={4}
      fontStyle="italic"
      {...props}
    />
  ),
  code: (props) => (
    <Box
      as="code"
      bg="gray.100"
      px={2}
      py={1}
      borderRadius="sm"
      fontSize="sm"
      color="red.600"
      {...props}
    />
  ),
  pre: (props) => (
    <Box
      as="pre"
      bg="gray.800"
      color="white"
      p={4}
      borderRadius="md"
      overflow="auto"
      mb={4}
      fontSize="sm"
      {...props}
    />
  ),
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    {element}
  </MDXProvider>
)
