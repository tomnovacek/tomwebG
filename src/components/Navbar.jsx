import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Container,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { FaCalendarAlt, FaSms } from 'react-icons/fa'
import navbarIcon from '../assets/img/navbar-icon-96x96.webp'

// Konstanty pro konzistentní rozměry
const NAV_HEIGHT = '60px'
const BUTTON_HEIGHT = '40px'
const LOGO_SIZE = '48px'

// Přidání font-display: swap pro písma
const fontStyles = {
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontDisplay: 'swap',
}

const DesktopNav = () => {
  return (
    <Stack 
      direction={'row'} 
      spacing={4} 
      h={BUTTON_HEIGHT} 
      alignItems="center"
      style={fontStyles}
    > 
      <Button 
        as={Link} 
        to="/" 
        fontSize={'sm'} 
        fontWeight={400} 
        variant={'link'} 
        h={BUTTON_HEIGHT} 
        minH={BUTTON_HEIGHT}
        style={fontStyles}
      >
        Domů
      </Button>
      <Button 
        as={Link} 
        to="/about" 
        fontSize={'sm'} 
        fontWeight={400} 
        variant={'link'} 
        h={BUTTON_HEIGHT} 
        minH={BUTTON_HEIGHT}
        style={fontStyles}
      >
        O mně
      </Button>
      <Button 
        as={Link} 
        to="/services" 
        fontSize={'sm'} 
        fontWeight={400} 
        variant={'link'} 
        h={BUTTON_HEIGHT} 
        minH={BUTTON_HEIGHT}
        style={fontStyles}
      >
        Služby
      </Button>
      <Button 
        as={Link} 
        to="/calendar" 
        fontSize={'sm'} 
        fontWeight={400} 
        variant={'link'} 
        h={BUTTON_HEIGHT} 
        minH={BUTTON_HEIGHT}
        style={fontStyles}
      >
        Kalendář
      </Button>
      <Button 
        as={Link} 
        to="/blog" 
        fontSize={'sm'} 
        fontWeight={400} 
        variant={'link'} 
        h={BUTTON_HEIGHT} 
        minH={BUTTON_HEIGHT}
        style={fontStyles}
      >
        Blog
      </Button>
    </Stack>
  )
}

const MobileNav = ({ onClose }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
      style={fontStyles}
      align="center"
      justify="center"
    >
      <Stack spacing={4} align="center" justify="center">
        <Button 
          as={Link} 
          to="/" 
          onClick={onClose}
          fontSize={'sm'} 
          fontWeight={400} 
          variant={'link'} 
          w="full" 
          h={BUTTON_HEIGHT} 
          minH={BUTTON_HEIGHT}
          style={fontStyles}
        >
          Domů
        </Button>
        <Button 
          as={Link} 
          to="/about" 
          onClick={onClose}
          fontSize={'sm'} 
          fontWeight={400} 
          variant={'link'} 
          w="full" 
          h={BUTTON_HEIGHT} 
          minH={BUTTON_HEIGHT}
          style={fontStyles}
        >
          O mně
        </Button>
        <Button 
          as={Link} 
          to="/services" 
          onClick={onClose}
          fontSize={'sm'} 
          fontWeight={400} 
          variant={'link'} 
          w="full" 
          h={BUTTON_HEIGHT} 
          minH={BUTTON_HEIGHT}
          style={fontStyles}
        >
          Služby
        </Button>
        <Button 
          as={Link} 
          to="/calendar" 
          onClick={onClose}
          fontSize={'sm'} 
          fontWeight={400} 
          variant={'link'} 
          w="full" 
          h={BUTTON_HEIGHT} 
          minH={BUTTON_HEIGHT}
          style={fontStyles}
        >
          Kalendář
        </Button>
        <Button 
          as={Link} 
          to="/blog" 
          onClick={onClose}
          fontSize={'sm'} 
          fontWeight={400} 
          variant={'link'} 
          w="full" 
          h={BUTTON_HEIGHT} 
          minH={BUTTON_HEIGHT}
          style={fontStyles}
        >
          Blog
        </Button>
      </Stack>
    </Stack>
  )
}

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()

  useEffect(() => {
    // Component mounted
  }, [])

  // Debug logging
  useEffect(() => {
    console.log('Navbar isOpen state:', isOpen)
  }, [isOpen])

  const handleToggle = () => {
    console.log('Hamburger clicked, current state:', isOpen)
    onToggle()
  }

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={1000}
      bg={useColorModeValue('white', 'gray.800')}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      width="100%"
      height={NAV_HEIGHT}
      minH={NAV_HEIGHT}
      style={{
        ...fontStyles,
        contain: 'layout size',
        willChange: 'transform',
      }}
    >
      <Container maxW="1680px" h="100%">
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          h="100%"
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={'center'}
          style={{
            contain: 'layout size',
            willChange: 'transform',
          }}
        >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
            h={BUTTON_HEIGHT}
            minH={BUTTON_HEIGHT}
            style={{
              contain: 'layout size',
              willChange: 'transform',
            }}
          >
            <IconButton
              onClick={handleToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              h={BUTTON_HEIGHT}
              w={BUTTON_HEIGHT}
              minH={BUTTON_HEIGHT}
              minW={BUTTON_HEIGHT}
              style={{
                contain: 'layout size',
                willChange: 'transform',
              }}
            />
          </Flex>
          <Flex 
            flex={{ base: 1 }} 
            justify={{ base: 'center', md: 'start' }} 
            h="100%"
            style={{
              contain: 'layout size',
              willChange: 'transform',
            }}
          >
            <Box
              as={Link}
              to="/"
              display={{ base: 'none', md: 'flex' }}
              alignItems="center"
              h="100%"
              w={LOGO_SIZE}
              minW={LOGO_SIZE}
              style={{
                contain: 'layout size',
                willChange: 'transform',
              }}
            >
              <img
                src={navbarIcon}
                alt="Tom Nováček"
                width={LOGO_SIZE}
                height={LOGO_SIZE}
                style={{ objectFit: 'contain', display: 'block' }}
                loading="eager"
              />
            </Box>

            <Flex 
              display={{ base: 'none', md: 'flex' }} 
              ml={10} 
              h="100%" 
              alignItems="center"
              style={{
                contain: 'layout size',
                willChange: 'transform',
              }}
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
            style={{
              contain: 'layout size',
              willChange: 'transform',
            }}
          >
            <Box 
              display="flex" 
              alignItems="center" 
              h={BUTTON_HEIGHT}
              minH={BUTTON_HEIGHT}
              minW="160px"
              style={{
                contain: 'layout size',
                willChange: 'transform',
              }}
            >
              <Text 
                fontSize={'sm'} 
                color={useColorModeValue('gray.500', 'white')} 
                fontWeight={400} 
                variant={'link'} 
                display="flex" 
                alignItems="center" 
                gap={2} 
                textAlign="center" 
                whiteSpace="nowrap"
                lineHeight="1.2"
                style={fontStyles}
              >
                <Box as={FaSms} boxSize={8}/> Tomáš Nováček <br /> +420 602 773 440
              </Text>
            </Box>
            <Button
              as={Link}
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
              style={{
                ...fontStyles,
                contain: 'layout size',
                willChange: 'transform',
              }}
              display={{ base: 'none', md: 'inline-flex' }}
            >
              Objednat se
            </Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Box
            display={{ base: 'block', md: 'none' }}
            w="100%"
            position="absolute"
            top="100%"
            left={0}
            right={0}
            zIndex={999}
            bg={useColorModeValue('white', 'gray.800')}
            borderTop="1px solid"
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            boxShadow="lg"
            style={{ contain: 'layout size', willChange: 'transform' }}
          >
            <MobileNav onClose={onToggle} />
          </Box>
        </Collapse>
      </Container>
    </Box>
  )
} 