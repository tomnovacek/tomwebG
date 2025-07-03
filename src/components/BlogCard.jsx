import React from 'react'
import { Link } from 'gatsby'
import {
  Box,
  Heading,
  Text,
  Badge,
  Flex,
  useColorModeValue,
  Skeleton,
  VStack,
  HStack,
  Center,
} from '@chakra-ui/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { StaticImage } from 'gatsby-plugin-image'

const BlogCard = ({ post }) => {
  const {
    frontmatter: { title, excerpt, date, readTime, tags, image },
    slug,
  } = post

  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const headingColor = useColorModeValue('gray.800', 'white')
  const hoverBgColor = useColorModeValue('gray.50', 'gray.700')
  const placeholderBg = useColorModeValue('gray.200', 'gray.700')
  const placeholderText = useColorModeValue('gray.500', 'gray.400')

  // Simple image rendering based on frontmatter.image
  const renderImage = () => {
    if (!image) {
      return (
        <Center
          bg={placeholderBg}
          color={placeholderText}
          height="100%"
          fontSize="sm"
        >
          No Image
        </Center>
      )
    }

    // Use switch statement for known images
    switch (image) {
      case 'stress.webp':
        return (
          <StaticImage
            src="../assets/img/blog/stress.webp"
            alt={title}
            placeholder="blurred"
            layout="constrained"
            width={400}
            height={200}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            loading="lazy"
          />
        )
      case 'under-blanket.jpg':
        return (
          <StaticImage
            src="../assets/img/blog/under-blanket.jpg"
            alt={title}
            placeholder="blurred"
            layout="constrained"
            width={400}
            height={200}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            loading="lazy"
          />
        )
      case 'self-hug.jpg':
        return (
          <StaticImage
            src="../assets/img/blog/self-hug.jpg"
            alt={title}
            placeholder="blurred"
            layout="constrained"
            width={400}
            height={200}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            loading="lazy"
          />
        )
      default:
        return (
          <Center
            bg={placeholderBg}
            color={placeholderText}
            height="100%"
            fontSize="sm"
          >
            {image}
          </Center>
        )
    }
  }

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
        {/* Blog Image */}
        <Box
          height="200px"
          overflow="hidden"
          borderRadius="lg"
          mb={4}
          position="relative"
        >
          {renderImage()}
        </Box>

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
            <Flex align="center" justify="flex-start" flexWrap="wrap" gap={2}>
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