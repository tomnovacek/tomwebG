import React from 'react'
import {
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
  Icon,
  Flex,
} from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export default function AboutCard({
  title,
  description,
  image,
  imageAlt,
  icon,
  buttonText,
  buttonHref,
  textColor,
}) {
  // Move all useColorModeValue calls to the top level
  const bgColor = useColorModeValue('white', 'gray.800')
  const defaultTextColor = useColorModeValue('gray.800', 'white')
  const descriptionColor = useColorModeValue('gray.600', 'gray.300')
  
  return (
    <Box
      bg={bgColor}
      boxShadow={'xl'}
      rounded={'2xl'}
      position="relative"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: '2xl',
      }}
      overflow="hidden"
    >
      <Box
        position="relative"
        height="260px"
        overflow="hidden"
      >
        {image === 'mountinHikeGroup.jpg' && (
          <StaticImage
            src="../assets/img/mountinHikeGroup.jpg"
            alt={imageAlt}
            placeholder="blurred"
            layout="fullWidth"
            objectFit="cover"
            className="about-image"
            formats={['auto', 'webp', 'avif']}
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            breakpoints={[300, 400, 600, 800]}
            transformOptions={{
              fit: 'cover',
              cropFocus: 'center',
            }}
          />
        )}
        {image === 'room.jpeg' && (
          <StaticImage
            src="../assets/img/room.jpeg"
            alt={imageAlt}
            placeholder="blurred"
            layout="fullWidth"
            objectFit="cover"
            className="about-image"
            formats={['auto', 'webp', 'avif']}
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            breakpoints={[300, 400, 600, 800]}
            transformOptions={{
              fit: 'cover',
              cropFocus: 'center',
            }}
          />
        )}
      </Box>
      <Box p={6}>
        <Flex align="center" mb={4}>
          {icon && (
            <Icon
              as={icon}
              boxSize={6}
              color="green.400"
              mr={3}
            />
          )}
          <Heading
            as="h3"
            size="lg"
            color={textColor || defaultTextColor}
            mb={2}
          >
            {title}
          </Heading>
        </Flex>
        <Text
          color={descriptionColor}
          mb={6}
          lineHeight="tall"
        >
          {description}
        </Text>
        {buttonText && buttonHref && (
          <Button
            as={GatsbyLink}
            to={buttonHref}
            variant="solid"
            size="md"
            w="full"
          >
            {buttonText}
          </Button>
        )}
      </Box>
    </Box>
  )
} 