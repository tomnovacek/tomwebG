import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  useColorModeValue,
  Icon,
  Flex,
} from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'

export default function ServicesGrid({ title, description, services }) {
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('green.500', 'gray.200')
  const cardBg = useColorModeValue('white', 'gray.800')

  // Function to get the correct image component based on image name
  const getImageComponent = (imageName, alt) => {
    switch (imageName) {
      case 'healing-space.webp':
        return (
          <StaticImage
            src="../assets/img/healing-space.webp"
            alt={alt}
            placeholder="blurred"
            layout="fullWidth"
            objectFit="cover"
            style={{
              width: '100%',
              height: '100%',
            }}
            formats={['auto', 'webp', 'avif']}
            quality={85}
          />
        )
      case 'safe-space.webp':
        return (
          <StaticImage
            src="../assets/img/safe-space.webp"
            alt={alt}
            placeholder="blurred"
            layout="fullWidth"
            objectFit="cover"
            style={{
              width: '100%',
              height: '100%',
            }}
            formats={['auto', 'webp', 'avif']}
            quality={85}
          />
        )
      case 'stress.webp':
        return (
          <StaticImage
            src="../assets/img/stress.webp"
            alt={alt}
            placeholder="blurred"
            layout="fullWidth"
            objectFit="cover"
            style={{
              width: '100%',
              height: '100%',
            }}
            formats={['auto', 'webp', 'avif']}
            quality={85}
          />
        )
      case 'mindfulness.webp':
        return (
          <StaticImage
            src="../assets/img/mindfulness.webp"
            alt={alt}
            placeholder="blurred"
            layout="fullWidth"
            objectFit="cover"
            style={{
              width: '100%',
              height: '100%',
            }}
            formats={['auto', 'webp', 'avif']}
            quality={85}
          />
        )
      case 'relationships.webp':
        return (
          <StaticImage
            src="../assets/img/relationships.webp"
            alt={alt}
            placeholder="blurred"
            layout="fullWidth"
            objectFit="cover"
            style={{
              width: '100%',
              height: '100%',
            }}
            formats={['auto', 'webp', 'avif']}
            quality={85}
          />
        )
      case 'family.webp':
        return (
          <StaticImage
            src="../assets/img/family.webp"
            alt={alt}
            placeholder="blurred"
            layout="fullWidth"
            objectFit="cover"
            style={{
              width: '100%',
              height: '100%',
            }}
            formats={['auto', 'webp', 'avif']}
            quality={85}
          />
        )
      default:
        // Fallback to a default image
        return (
          <StaticImage
            src="../assets/img/healing-space.webp"
            alt={alt}
            placeholder="blurred"
            layout="fullWidth"
            objectFit="cover"
            style={{
              width: '100%',
              height: '100%',
            }}
            formats={['auto', 'webp', 'avif']}
            quality={85}
          />
        )
    }
  }

  return (
    <Box py={20} bg={useColorModeValue('white', 'gray.900')}>
      <Container maxW={'7xl'}>
        <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mb={8} mx="auto">
          <Heading variant="section" color={headingColor}>
            <Text
              as={'span'}
              position={'relative'}
            >
              {title}
            </Text>
          </Heading>
          <Text color={textColor} fontSize={'xl'}>
            {description}
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {services.map((service, index) => (
            <Box
              key={index}
              bg={cardBg}
              boxShadow={'xl'}
              rounded={'xl'}
              p={6}
              position="relative"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: '2xl',
              }}
            >
              <Flex direction={{ base: 'column', md: 'row' }} gap={6}>
                <Box
                  position="relative"
                  width={{ base: '100%', md: '140px' }}
                  height={{ base: '140px', md: '140px' }}
                  borderRadius="lg"
                  overflow="hidden"
                  flexShrink={0}
                >
                  {getImageComponent(service.image, service.title)}
                </Box>
                <Box flex="1">
                  <Icon
                    as={service.icon}
                    w={8}
                    h={8}
                    color="green.400"
                    mb={4}
                  />
                  <Heading fontSize={'xl'} mb={4} color={headingColor}>
                    {service.title}
                  </Heading>
                  <Text color={textColor}>
                    {service.description}
                  </Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
} 