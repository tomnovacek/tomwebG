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
import OptimizedImage from './OptimizedImage'
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
    >
      <Box py={10} px={{ base: 4, md: 8 }}>
        <Container maxW="1680px">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {/* Navigation Links */}
            <Stack align={{base: 'center', md: 'flex-start'}}>
              <Heading fontSize={'lg'} mb={4}>Navigace</Heading>
              <Link as={GatsbyLink} to="/">Domů</Link>
              <Link as={GatsbyLink} to="/about">O mně</Link>
              <Link as={GatsbyLink} to="/services">Služby</Link>
              <Link as={GatsbyLink} to="/calendar">Kalendář</Link>
              <Link as={GatsbyLink} to="/blog">Blog</Link>
            </Stack>

            {/* Google Maps */}
            <Stack align={'center'}>
              <Heading fontSize={'lg'} mb={4}>Mapa</Heading>
              <Suspense fallback={<Box w="100%" minH="300px" maxW="350px" display="flex" alignItems="center" justifyContent="center"><Text color="gray.500">Načítání mapy...</Text></Box>}>
                <Box w="100%" minH="300px" maxW="350px">
                  <Map />
                </Box>
              </Suspense>
              <Text fontSize="sm" color="gray.500" mt={2}>
                Sukova 4, 602 00 Brno-střed
              </Text>
            </Stack>

            {/* Contact Information */}
            <Stack align={{base: 'center', md: 'flex-end'}}>
              <Heading fontSize={'lg'} mb={4}>Kontakt</Heading>
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
                <Text>Sukova 4, Brno, Česká republika</Text>
              </Stack>
              {/* Logo */}
              <Box minH="80px" minW="200px" maxH="80px" maxW="200px">
                <OptimizedImage
                  src="CAP.png"
                  alt="ČAP Logo"
                  width={200}
                  height={80}
                  style={{ maxWidth: '200px', height: 'auto', display: 'block' }}
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