import React, { useState } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Container,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { FaCalendarAlt, FaUser, FaSms } from 'react-icons/fa'
import { StaticImage } from 'gatsby-plugin-image'

// Konstanty pro konzistentní rozměry
const NAV_HEIGHT = '60px'
const BUTTON_HEIGHT = '40px'
const LOGO_SIZE = '48px'

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')

  return (
    <Stack direction={'row'} spacing={4} h="100%" alignItems="center">
      <Button
        as={GatsbyLink}
        to="/"
        variant={'ghost'}
        color={linkColor}
        _hover={{
          textDecoration: 'none',
          color: linkHoverColor,
        }}
        h={BUTTON_HEIGHT}
        minH={BUTTON_HEIGHT}
      >
        Domů
      </Button>
      <Button
        as={GatsbyLink}
        to="/about"
        variant={'ghost'}
        color={linkColor}
        _hover={{
          textDecoration: 'none',
          color: linkHoverColor,
        }}
        h={BUTTON_HEIGHT}
        minH={BUTTON_HEIGHT}
      >
        O mně
      </Button>
      <Button
        as={GatsbyLink}
        to="/services"
        variant={'ghost'}
        color={linkColor}
        _hover={{
          textDecoration: 'none',
          color: linkHoverColor,
        }}
        h={BUTTON_HEIGHT}
        minH={BUTTON_HEIGHT}
      >
        Služby
      </Button>
      <Button
        as={GatsbyLink}
        to="/calendar"
        variant={'ghost'}
        color={linkColor}
        _hover={{
          textDecoration: 'none',
          color: linkHoverColor,
        }}
        h={BUTTON_HEIGHT}
        minH={BUTTON_HEIGHT}
      >
        Kalendář
      </Button>
    </Stack>
  )
}

const MobileNav = ({ onClose }) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')

  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
      borderTop="1px solid"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      boxShadow="lg"
      position="absolute"
      top="100%"
      left={0}
      right={0}
      zIndex={999}
    >
      <Stack spacing={4}>
        <Button
          as={GatsbyLink}
          to="/"
          variant={'ghost'}
          color={linkColor}
          _hover={{
            textDecoration: 'none',
            color: linkHoverColor,
          }}
          onClick={onClose}
          justifyContent="flex-start"
          w="100%"
        >
          Domů
        </Button>
        <Button
          as={GatsbyLink}
          to="/about"
          variant={'ghost'}
          color={linkColor}
          _hover={{
            textDecoration: 'none',
            color: linkHoverColor,
          }}
          onClick={onClose}
          justifyContent="flex-start"
          w="100%"
        >
          O mně
        </Button>
        <Button
          as={GatsbyLink}
          to="/services"
          variant={'ghost'}
          color={linkColor}
          _hover={{
            textDecoration: 'none',
            color: linkHoverColor,
          }}
          onClick={onClose}
          justifyContent="flex-start"
          w="100%"
        >
          Služby
        </Button>
        <Button
          as={GatsbyLink}
          to="/calendar"
          variant={'ghost'}
          color={linkColor}
          _hover={{
            textDecoration: 'none',
            color: linkHoverColor,
          }}
          onClick={onClose}
          justifyContent="flex-start"
          w="100%"
        >
          Kalendář
        </Button>
        <Button
          as={GatsbyLink}
          to="/calendar"
          colorScheme={'green'}
          variant={'outline'}
          _hover={{
            bg: 'green.400',
            color: 'white',
          }}
          leftIcon={<FaCalendarAlt />}
          onClick={onClose}
          w="100%"
        >
          Objednat se
        </Button>
      </Stack>
    </Box>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.600', 'white')
  const defaultTextColor = useColorModeValue('gray.500', 'white')

  // Debug function to handle hamburger click
  const handleHamburgerClick = () => {
    console.log('Hamburger clicked! Current isOpen:', isOpen)
    setIsOpen(!isOpen)
    console.log('After toggle, isOpen will be:', !isOpen)
  }

  return (
    <Box
      as="nav"
      bg={bgColor}
      borderBottom="1px solid"
      borderColor={borderColor}
      width="100%"
      height={NAV_HEIGHT}
      minH={NAV_HEIGHT}
      position="relative"
    >
      <Container maxW="1680px" h="100%">
        <Flex
          color={textColor}
          h="100%"
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={'center'}
        >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
            h={BUTTON_HEIGHT}
            minH={BUTTON_HEIGHT}
          >
            <IconButton
              onClick={handleHamburgerClick}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              h={BUTTON_HEIGHT}
              w={BUTTON_HEIGHT}
              minH={BUTTON_HEIGHT}
              minW={BUTTON_HEIGHT}
              color={textColor}
            />
          </Flex>
          <Flex 
            flex={{ base: 1 }} 
            justify={{ base: 'center', md: 'start' }} 
            h="100%"
          >
            <Box
              as={GatsbyLink}
              to="/"
              display={{ base: 'none', md: 'flex' }}
              alignItems="center"
              h="100%"
              w={LOGO_SIZE}
              minW={LOGO_SIZE}
            >
              <StaticImage
                src="../assets/img/navbar-icon-96x96.webp"
                alt="Tom Nováček"
                width={48}
                height={48}
                quality={90}
                placeholder="blurred"
                formats={['auto', 'webp', 'avif']}
                style={{ objectFit: 'contain', display: 'block' }}
                loading="eager"
                sizes="48px"
                breakpoints={[48, 96]}
              />
            </Box>

            <Flex 
              display={{ base: 'none', md: 'flex' }} 
              ml={10} 
              h="100%" 
              alignItems="center"
            >
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={3}
            h="100%"
            alignItems="center"
          >
            <Box 
              display="flex" 
              alignItems="center" 
              h={BUTTON_HEIGHT}
              minH={BUTTON_HEIGHT}
              minW="160px"
            >
              <Text 
                fontSize={'sm'} 
                color={defaultTextColor} 
                fontWeight={400} 
                variant={'link'} 
                display="flex" 
                alignItems="center" 
                gap={2} 
                textAlign="center" 
                whiteSpace="nowrap"
                lineHeight="1.2"
              >
                <Icon as={FaSms} boxSize={8}/> Tomáš Nováček <br /> +420 602 773 440
              </Text>
            </Box>
            <Button
              as={GatsbyLink}
              to="/calendar"
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={8}
              h={BUTTON_HEIGHT}
              minH={BUTTON_HEIGHT}
              minW="180px"
              colorScheme={'green'}
              variant={'outline'}
              _hover={{
                bg: 'green.400',
                color: 'white',
              }}
              leftIcon={<FaCalendarAlt />}
              display={{ base: 'none', md: 'inline-flex' }}
            >
              Objednat se
            </Button>
          </Stack>
        </Flex>

        {/* Mobile Navigation */}
        {isOpen && (
          <MobileNav onClose={() => setIsOpen(false)} />
        )}
      </Container>
    </Box>
  )
} 