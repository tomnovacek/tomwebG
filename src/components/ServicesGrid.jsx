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
                  flexShrink={0}
                  width={{ base: '100%', md: '200px' }}
                  height={{ base: '200px', md: '150px' }}
                  position="relative"
                  overflow="hidden"
                  rounded="lg"
                >
                  {service.image === 'healing-space.webp' && (
                    <StaticImage
                      src="../assets/img/healing-space.webp"
                      alt={service.imageAlt}
                      placeholder="blurred"
                      layout="fullWidth"
                      objectFit="cover"
                      style={{
                        height: '100%',
                        width: '100%',
                        filter: 'brightness(1.1)',
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
                  {service.image === 'safe-space.webp' && (
                    <StaticImage
                      src="../assets/img/safe-space.webp"
                      alt={service.imageAlt}
                      placeholder="blurred"
                      layout="fullWidth"
                      objectFit="cover"
                      style={{
                        height: '100%',
                        width: '100%',
                        filter: 'brightness(1.1)',
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
                  {service.image === 'stress.webp' && (
                    <StaticImage
                      src="../assets/img/stress.webp"
                      alt={service.imageAlt}
                      placeholder="blurred"
                      layout="fullWidth"
                      objectFit="cover"
                      style={{
                        height: '100%',
                        width: '100%',
                        filter: 'brightness(1.1)',
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
                  {service.image === 'mindfulness.webp' && (
                    <StaticImage
                      src="../assets/img/mindfulness.webp"
                      alt={service.imageAlt}
                      placeholder="blurred"
                      layout="fullWidth"
                      objectFit="cover"
                      style={{
                        height: '100%',
                        width: '100%',
                        filter: 'brightness(1.1)',
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
                  {service.image === 'relationships.webp' && (
                    <StaticImage
                      src="../assets/img/relationships.webp"
                      alt={service.imageAlt}
                      placeholder="blurred"
                      layout="fullWidth"
                      objectFit="cover"
                      style={{
                        height: '100%',
                        width: '100%',
                        filter: 'brightness(1.1)',
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
                  {service.image === 'family.webp' && (
                    <StaticImage
                      src="../assets/img/family.webp"
                      alt={service.imageAlt}
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
                  )}
                  {(!service.image || 
                    (service.image !== 'healing-space.webp' && 
                     service.image !== 'safe-space.webp' && 
                     service.image !== 'stress.webp' && 
                     service.image !== 'mindfulness.webp' && 
                     service.image !== 'relationships.webp' && 
                     service.image !== 'family.webp')) && (
                    <StaticImage
                      src="../assets/img/healing-space.webp"
                      alt={service.imageAlt}
                      placeholder="blurred"
                      layout="fullWidth"
                      objectFit="cover"
                      style={{
                        height: '100%',
                        width: '100%',
                        filter: 'brightness(1.1)',
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
                </Box>
                <Box flex={1}>
                  <Flex align="center" gap={3} mb={4}>
                    <Icon as={service.icon} w={6} h={6} color="green.500" />
                    <Heading fontSize={'xl'} color={headingColor}>
                      {service.title}
                    </Heading>
                  </Flex>
                  <Text color={textColor} fontSize={'md'} lineHeight={'tall'}>
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