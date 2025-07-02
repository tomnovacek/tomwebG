import React, { useEffect, useState } from 'react'
import { Box, List, ListItem, Link, Text, useColorModeValue } from '@chakra-ui/react'

const TableOfContents = () => {
  const [headings, setHeadings] = useState([])
  const linkColor = useColorModeValue('green.600', 'green.400')
  const hoverColor = useColorModeValue('green.700', 'green.300')
  const bgColor = useColorModeValue('gray.50', 'gray.700')

  useEffect(() => {
    // Get the main content area
    const mainContent = document.querySelector('.prose')
    if (!mainContent) return

    // Get all headings from the main content area only
    const elements = Array.from(mainContent.querySelectorAll('h1, h2'))
    const items = elements.map(element => ({
      id: element.id,
      text: element.textContent,
      level: Number(element.tagName.charAt(1))
    }))
    setHeadings(items)
  }, [])

  if (headings.length === 0) return null

  return (
    <Box
      position="sticky"
      top="100px"
      maxH="calc(100vh - 200px)"
      overflowY="auto"
      p={4}
      borderRadius="md"
      bg={bgColor}
    >
      <Text fontWeight="bold" mb={4}>
        Obsah
      </Text>
      <List spacing={2}>
        {headings.map((heading) => (
          <ListItem
            key={heading.id}
            pl={(heading.level - 1) * 4}
          >
            <Link
              href={`#${heading.id}`}
              color={linkColor}
              _hover={{ color: hoverColor }}
              fontSize="sm"
              display="block"
              py={1}
            >
              {heading.text}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default TableOfContents 