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
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
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
        {image === 'room.jpeg' && (
          <StaticImage
            src="../assets/img/room.jpeg"
            alt={imageAlt}
            placeholder="blurred"
            layout="fullWidth"
            objectFit="cover"
            style={{
              height: '100%',
              width: '100%',
              filter: 'brightness(1.2)',
            }}
            formats={['auto', 'webp', 'avif']}
            quality={85}
            breakpoints={[400, 768, 1200]}
            sizes="(max-width: 768px) 100vw, 50vw"
            transformOptions={{
              fit: 'cover',
              cropFocus: 'center',
            }}
          />
        )}
        {image === 'mountinHikeGroup.jpg' && (
          <StaticImage
            src="../assets/img/mountinHikeGroup.jpg"
            alt={imageAlt}
            placeholder="blurred"
            layout="fullWidth"
            objectFit="cover"
            style={{
              height: '100%',
              width: '100%',
              filter: 'brightness(1.2)',
            }}
            formats={['auto', 'webp', 'avif']}
            quality={85}
            breakpoints={[400, 768, 1200]}
            sizes="(max-width: 768px) 100vw, 50vw"
            transformOptions={{
              fit: 'cover',
              cropFocus: 'center',
            }}
          />
        )}
        {(!image || (image !== 'room.jpeg' && image !== 'mountinHikeGroup.jpg')) && (
          <StaticImage
            src="../assets/img/room.jpeg"
            alt={imageAlt}
            placeholder="blurred"
            layout="fullWidth"
            objectFit="cover"
            style={{
              height: '100%',
              width: '100%',
              filter: 'brightness(1.2)',
            }}
            formats={['auto', 'webp', 'avif']}
            quality={85}
            breakpoints={[400, 768, 1200]}
            sizes="(max-width: 768px) 100vw, 50vw"
            transformOptions={{
              fit: 'cover',
              cropFocus: 'center',
            }}
          />
        )}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.300"
        />
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          p={6}
          bg="linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
        >
          <Flex align="center" gap={3}>
            <Icon as={icon} w={8} h={8} color="white" />
            <Heading fontSize={'2xl'} color="white">{title}</Heading>
          </Flex>
        </Box>
      </Box>
      <Box p={8}>
        <Text fontSize={'lg'} mb={6} color={textColor}>
          {description}
        </Text>
        <Button
          as={GatsbyLink}
          to={buttonHref}
          variant="card"
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  )
} 