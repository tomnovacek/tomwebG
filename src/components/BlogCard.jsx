import React from 'react'
import { Link } from 'gatsby'
import {
  Box,
  Heading,
  Text,
  Badge,
  Flex,
  Avatar,
  useColorModeValue,
  Skeleton,
  VStack,
  HStack,
} from '@chakra-ui/react'
import OptimizedImage from './OptimizedImage'

const BlogCard = ({ post }) => {
  const {
    frontmatter: { title, excerpt, date, readTime, tags, image, author },
    slug
  } = post

  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const headingColor = useColorModeValue('gray.800', 'white')
  const hoverBgColor = useColorModeValue('gray.50', 'gray.700')

  return (
    <Link to={`/blog/${slug}`}>
      <Box
        bg={bgColor}
        border="1px solid"
        borderColor={borderColor}
        borderRadius="lg"
        overflow="hidden"
        transition="all 0.2s"
        _hover={{
          transform: 'translateY(-2px)',
          shadow: 'lg',
          bg: hoverBgColor,
        }}
        h="100%"
        display="flex"
        flexDirection="column"
      >
        {/* Image */}
        {image && (
          <Box h="200px" overflow="hidden">
            <OptimizedImage
              src={image}
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        )}

        {/* Content */}
        <Box p={6} flex="1" display="flex" flexDirection="column">
          {/* Tags */}
          {tags && tags.length > 0 && (
            <Flex gap={2} mb={3} flexWrap="wrap">
              {tags.slice(0, 3).map((tag) => (
                <Badge key={tag} colorScheme="green" variant="subtle" fontSize="xs">
                  {tag}
                </Badge>
              ))}
              {tags.length > 3 && (
                <Badge colorScheme="gray" variant="subtle" fontSize="xs">
                  +{tags.length - 3}
                </Badge>
              )}
            </Flex>
          )}

          {/* Title */}
          <Heading as="h3" size="md" mb={3} color={headingColor} lineHeight="1.3">
            {title}
          </Heading>

          {/* Excerpt */}
          <Text color={textColor} fontSize="sm" lineHeight="1.5" mb={4} flex="1">
            {excerpt}
          </Text>

          {/* Meta */}
          <Box mt="auto">
            <Flex align="center" justify="space-between" flexWrap="wrap" gap={2}>
              {author && (
                <Flex align="center" gap={2}>
                  <Avatar size="xs" name={author.name} src={author.image} />
                  <Text fontSize="xs" color={textColor}>
                    {author.name}
                  </Text>
                </Flex>
              )}
              
              <Flex gap={3} fontSize="xs" color={textColor}>
                <Text>
                  {new Date(date).toLocaleDateString('cs-CZ', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </Text>
                {readTime && (
                  <Text>{readTime}</Text>
                )}
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}

// Skeleton component for blog cards during loading
export const BlogCardSkeleton = () => {
  const cardBg = useColorModeValue('white', 'gray.800')
  
  return (
    <Box
      bg={cardBg}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="sm"
      className="blog-card"
    >
      <Skeleton 
        className="blog-card-image-container"
        height="200px"
        width="100%"
      />
      <Box p={6} className="blog-card-content">
        <VStack align="start" spacing={4}>
          <Skeleton height="24px" width="80%" />
          <Skeleton height="16px" width="100%" />
          <Skeleton height="16px" width="90%" />
          <Skeleton height="16px" width="70%" />
          <HStack spacing={4}>
            <Skeleton height="16px" width="60px" />
            <Skeleton height="16px" width="8px" />
            <Skeleton height="16px" width="80px" />
          </HStack>
          <HStack spacing={2}>
            <Skeleton height="20px" width="60px" borderRadius="full" />
            <Skeleton height="20px" width="80px" borderRadius="full" />
          </HStack>
        </VStack>
      </Box>
    </Box>
  )
}

export default BlogCard 