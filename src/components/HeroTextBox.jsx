import React from 'react'
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Stack,
  Button,
} from '@chakra-ui/react'
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa'

export default function HeroTextBox({
  title,
  titleAccent,
  description,
  primaryText = "Objednat konzultaci",
  primaryHref = "/calendar",
  secondaryText = "Ceník služeb",
  secondaryHref = "#pricing",
}) {
  const heroCardBg = useColorModeValue('whiteAlpha.200', 'blackAlpha.200')

  return (
    <Box
      bg={heroCardBg}
      p={{ base: 6, md: 8 }}
      borderRadius="lg"
      maxW="2xl"
      flex="1"
      backdropFilter="blur(10px)"
      minH={{ base: "auto", md: "500px" }}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      pt={{ base: 8, md: 10 }}
    >
      <Heading
        as="h1"
        variant="hero"
        fontSize={{ base: '36px', sm: '48px', lg: '60px' }}
      >
        <Text as="span" className="hero-underline">
          {title}
        </Text>
        <br />
        <Text as="span" className="hero-accent">
          {titleAccent}
        </Text>
      </Heading>
      <Text color={'white'} fontSize={'xl'} mb={8}>
        {description}
      </Text>

      <Stack
        spacing={{ base: 4, sm: 6 }}
        direction={{ base: 'column', sm: 'row' }}
        pt={4}
      >
        <Button
          as="a"
          href={primaryHref}
          variant="cta"
          leftIcon={<FaCalendarAlt />}
        >
          {primaryText}
        </Button>
        <Button
          as="a"
          href={secondaryHref}
          variant="ctaOutline"
          color="white"
          borderColor="white"
          rightIcon={<FaArrowRight />}
        >
          {secondaryText}
        </Button>
      </Stack>
    </Box>
  )
} 