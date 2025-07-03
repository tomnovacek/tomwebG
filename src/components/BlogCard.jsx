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
import { FaRegClock, FaRegCalendarAlt, FaTag } from 'react-icons/fa'

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

  const tagBg = useColorModeValue('green.50', 'green.900')
  const tagColor = 'green.700'
  const tagBorder = useColorModeValue('green.200', 'green.700')

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
      case 'emotion-faces.jpg':
        return (
          <StaticImage
            src="../assets/img/blog/emotion-faces.jpg"
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
    <Link to={`/blog/${slug}`} style={{ textDecoration: 'none' }}>
      <Box
        bg={bgColor}
        borderRadius="xl"
        boxShadow="md"
        overflow="hidden"
        transition="all 0.2s"
        _hover={{
          transform: 'translateY(-4px)',
          boxShadow: 'xl',
        }}
        h="100%"
        display="flex"
        flexDirection="column"
      >
        {/* Blog Image */}
        <Box
          height="200px"
          overflow="hidden"
          borderTopRadius="xl"
          borderBottomRadius="none"
          mb={0}
          position="relative"
        >
          {renderImage()}
        </Box>

        {/* Content */}
        <Box p={6} flex="1" display="flex" flexDirection="column">
          {/* Title */}
          <Heading as="h3" fontSize="1.35rem" fontWeight="bold" color="green.600" mb={2} mt={2} lineHeight="1.3">
            {title}
          </Heading>

          {/* Excerpt */}
          <Text color={textColor} fontSize="md" lineHeight="1.5" mb={4} flex="1">
            {excerpt}
          </Text>

          {/* Meta */}
          <Flex align="center" gap={4} color={useColorModeValue('gray.500', 'gray.400')} fontSize="sm" mb={3}>
            <Flex align="center" gap={1}>
              <FaRegClock />
              <Text>{readTime}</Text>
            </Flex>
            <Flex align="center" gap={1}>
              <FaRegCalendarAlt />
              <Text>{new Date(date).toLocaleDateString('cs-CZ', { year: 'numeric', month: 'long', day: 'numeric' })}</Text>
            </Flex>
          </Flex>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <Flex gap={2} flexWrap="wrap" mt={2}>
              {tags.map((tag) => (
                <Box
                  key={tag}
                  px={2}
                  py={0.5}
                  fontSize="xs"
                  fontWeight="semibold"
                  color={tagColor}
                  bg={tagBg}
                  border="1px solid"
                  borderColor={tagBorder}
                  borderRadius="md"
                  mb={1}
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  <FaTag style={{ fontSize: '0.8em', marginRight: 3 }} />
                  {tag}
                </Box>
              ))}
            </Flex>
          )}
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