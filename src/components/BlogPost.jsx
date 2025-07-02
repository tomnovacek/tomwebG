import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Tag,
  TagLabel,
  Link,
  VStack,
  HStack,
  Divider,
  useColorModeValue,
  SimpleGrid,
  useStyleConfig,
  Grid,
  GridItem,
  Tooltip,
} from '@chakra-ui/react'
import { getPostBySlug } from '../utils/mdx'
import MDXContent from './MDXContent'

// Blog post data
export const blogPosts = [
  {
    title: 'Porozumění úzkosti: Kompletní průvodce',
    excerpt: 'Naučte se o různých typech úzkosti, jejich příznacích a efektivních strategiích zvládání úzkosti v každodenním životě.',
    date: '15. března 2024',
    readTime: '5 min',
    author: {
      name: 'Tom Nováček',
      image: '/src/assets/img/tom1.png',
      role: 'Licencovaný psychoterapeut'
    },
    tags: ['Úzkost', 'Duševní zdraví', 'Strategie zvládání'],
    image: '/src/assets/img/stress.webp',
    slug: 'porozumeni-uzkosti-kompletni-pruvodce'
  },
  {
    title: 'Síla všímavosti v terapii',
    excerpt: 'Objevte, jak mohou praktiky všímavosti posílit vaši terapeutickou cestu a zlepšit celkovou pohodu.',
    date: '10. března 2024',
    readTime: '4 min',
    author: {
      name: 'Tom Nováček',
      image: '/src/assets/img/tom1.png',
      role: 'Licencovaný psychoterapeut'
    },
    tags: ['Všímavost', 'Terapie', 'Pohoda'],
    image: '/src/assets/img/tom1.png',
    slug: 'sila-vsimavosti-v-terapii'
  }
]

const defaultPost = {
  title: 'Článek nenalezen',
  date: new Date().toISOString(),
  readTime: '0 min čtení',
  excerpt: 'Požadovaný článek nebyl nalezen.',
  tags: [],
  image: 'tom1.png',
  author: {
    name: 'Tom Nováček',
    role: 'Licencovaný psychoterapeut',
    image: 'tom1.png'
  }
}

export default function BlogPost({ slug }) {
  // Find the post by slug
  const post = blogPosts.find(p => p.slug === slug) || defaultPost

  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const headingColor = useColorModeValue('green.600', 'green.400')

  return (
    <Box bg={bgColor} minH="calc(100vh - 64px)">
      <Container maxW="4xl" py={8}>
        <Box bg={cardBg} p={8} borderRadius="lg" boxShadow="md">
          {/* Header */}
          <VStack spacing={6} align="stretch" mb={8}>
            <Heading as="h1" size="2xl" color={headingColor}>
              {post.title}
            </Heading>
            <HStack spacing={4} color={textColor}>
              <Text>{post.date}</Text>
              <Text>•</Text>
              <Text>{post.readTime}</Text>
            </HStack>
            <HStack spacing={2}>
              {post.tags.map(tag => (
                <Tag key={tag} colorScheme="green" variant="subtle">
                  <TagLabel>{tag}</TagLabel>
                </Tag>
              ))}
            </HStack>
          </VStack>
          
          {/* Content */}
          <Box>
            <Text fontSize="lg" color={textColor} lineHeight="tall">
              {post.excerpt}
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  )
} 