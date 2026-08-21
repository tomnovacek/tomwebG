import React from 'react'
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
import Map from './Map'

const GOOGLE_MAPS_PROFILE =
  'https://www.google.com/maps/place/Mgr.+Ing.+Tom%C3%A1%C5%A1+Nov%C3%A1%C4%8Dek+-+psycholog+a+terapeut/@49.1956648,16.6099472,17z/data=!4m6!3m5!1s0x471295d6e35ec40f:0x40a3ee641541c87e!8m2!3d49.1956648!4d16.6125275!16s%2Fg%2F11tbl4lhc1'

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
            <Stack align={{ base: 'center', md: 'flex-start' }}>
              <Heading as="h3" fontSize={'sm'} mb={4}>Navigace</Heading>
              <Link as={GatsbyLink} to="/">Domů</Link>
              <Link as={GatsbyLink} to="/about">O mně</Link>
              <Link as={GatsbyLink} to="/services">Služby</Link>
              <Link as={GatsbyLink} to="/calendar">Kalendář</Link>
            </Stack>

            {/* Google Maps */}
            <Stack align={'center'} justify={'center'}>
              <Heading as="h3" fontSize={'sm'}>Mapa</Heading>
              <Box
                w="100%"
                minH="250px"
                maxW="600px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Link
                  href="https://maps.app.goo.gl/pG8Ca8TBSGkpzon96"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ textDecoration: 'underline', color: 'green.600' }}
                  display="inline-block"
                >
                <StaticImage
                  src="../assets/img/map.png"
                  alt="address map"
                  placeholder="blurred"
                  layout="constrained"
                  width={539}
                  height={329}
                  formats={['auto', 'webp', 'avif']}
                  style={{ height: '329px', width: '539px' }}
                  sizes="539px"
                  breakpoints={[539, 1078]}
                />
                </Link>
              </Box>

            </Stack>

            {/* Contact Information */}
            <Stack align={{ base: 'center', md: 'flex-end' }}>
              <Heading as="h3" fontSize={'sm'} mb={4}>Kontakt</Heading>
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
                <SecureEmail email="terapie@tomnovacek.com" />
              </Stack>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Icon as={FaMapMarkerAlt} />
                <Link
                  href={GOOGLE_MAPS_PROFILE}
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ textDecoration: 'underline', color: 'green.600' }}
                >
                  Sukova 4, Brno, ČR
                </Link>
              </Stack>
              {/* Logo */}
              <Box
                minH="120px"
                minW="120px"
                maxH="200px"
                maxW="200px"
                display="flex"
                justifyContent={{ base: 'center', md: 'flex-end' }}
                width="100%"
              >
                <StaticImage
                  src="../assets/img/CAP.png"
                  alt="CAP logo"
                  placeholder="blurred"
                  layout="constrained"
                  width={120}
                  height={120}
                  formats={['auto', 'webp', 'avif']}
                  style={{ height: '120px', width: 'auto' }}
                  sizes="120px"
                  breakpoints={[120, 240]}
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
            <Text>© 2026 Tom Nováček. Všechna práva vyhrazena</Text>
            <Stack direction={'row'} spacing={6}>
              <Link href={'/gdpr/'}>Ochrana osobních údajů</Link>
              <Link href={'/cookies/'}>Cookies</Link>
              <Link href={'/legal/'}>Právní informace</Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
} 