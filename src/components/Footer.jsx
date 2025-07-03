import React, { lazy, Suspense } from 'react'
import {
  Box,
  Stack,
  Text,
  Link,
  useColorModeValue,
  SimpleGrid,
  Heading,
  Icon,
  Container,
} from '@chakra-ui/react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser } from 'react-icons/fa'
import { Link as GatsbyLink } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import SecureEmail from './SecureEmail'

const Map = lazy(() => import('./Map'))

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.200', 'gray.800')}
      color={useColorModeValue('gray.700', 'gray.200')}
      borderTop={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      width="100%"
      fontSize="sm"
    >
      <Box py={10} px={{ base: 4, md: 8 }}>
        <Container maxW="1680px">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {/* Navigation Links */}
            <Stack align={{base: 'center', md: 'flex-start'}}>
              <Heading fontSize={'sm'} mb={4}>Navigace</Heading>
              <Link as={GatsbyLink} to="/">Domů</Link>
              <Link as={GatsbyLink} to="/about">O mně</Link>
              <Link as={GatsbyLink} to="/services">Služby</Link>
              <Link as={GatsbyLink} to="/calendar">Kalendář</Link>
              <Link as={GatsbyLink} to="/blog">Blog</Link>
            </Stack>

            {/* Google Maps */}
            <Stack align={'center'} justify={'center'}>
              <Heading fontSize={'sm'}>Mapa</Heading>
              <Suspense fallback={<Box w="100%" minH="300px" maxW="600px" display="flex" alignItems="center" justifyContent="center"><Text color="gray.500">Načítání mapy...</Text></Box>}>
                <Box 
                  w="100%" 
                  minH="300px" 
                  maxW="600px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Map />
                </Box>
              </Suspense>

            </Stack>

            {/* Contact Information */}
            <Stack align={{base: 'center', md: 'flex-end'}}>
              <Heading fontSize={'sm'} mb={4}>Kontakt</Heading>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Icon as={FaUser} />
                <Text>Tomáš Nováček</Text>
              </Stack>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Icon as={FaPhone} />
                <Text>+420 602 773 440</Text>
              </Stack>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Icon as={FaEnvelope} />
                <Box><SecureEmail email="terapie@tomnovacek.com" /></Box>
              </Stack>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Icon as={FaMapMarkerAlt} />
                <Text>Sukova 4, Brno, ČR</Text>
              </Stack>
              {/* Logo */}
              <Box 
                minH="120px" 
                minW="200px" 
                maxH="120px" 
                maxW="200px"
                display="flex"
                justifyContent={{ base: 'center', md: 'flex-end' }}
                width="100%"
              >
                <StaticImage
                  src="../../static/img/CAP.png"
                  alt="ČAP Logo"
                  width={120}
                  height={120}
                  quality={90}
                  placeholder="blurred"
                  loading="lazy"
                  style={{
                    maxWidth: '200px',
                    maxHeight: '120px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

      <Box
        borderTop={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        py={4}
        px={{ base: 4, md: 8 }}
      >
        <Container maxW="1680px">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}
          >
            <Text>© 2025 Tom Nováček. Všechna práva vyhrazena</Text>
            <Stack direction={'row'} spacing={6}>
              <Link href={'/gdpr'}>Ochrana osobních údajů</Link>
              <Link href={'/cookies'}>Cookies</Link>
              <Link href={'/legal'}>Právní informace</Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
} 