import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react'

export default function ServicesGrid({ 
  title = "Naše služby", 
  description = "Komplexní psychoterapeutické služby pro vaše duševní zdraví", 
  services = [
    {
      title: "Individuální terapie",
      description: "Osobní přístup zaměřený na vaše specifické potřeby a cíle",
      image: "healing-space.webp",
      imageAlt: "Individuální terapeutické sezení"
    },
    {
      title: "Bezpečný prostor",
      description: "Důvěrné a podpůrné prostředí pro vaši práci na sobě",
      image: "safe-space.webp",
      imageAlt: "Bezpečný terapeutický prostor"
    },
    {
      title: "Zvládání stresu",
      description: "Techniky a strategie pro efektivní zvládání stresu a úzkosti",
      image: "stress.webp",
      imageAlt: "Zvládání stresu a úzkosti"
    },
    {
      title: "Mindfulness",
      description: "Praktiky všímavosti pro lepší sebeuvědomění a klid",
      image: "mindfulness.webp",
      imageAlt: "Mindfulness a meditace"
    },
    {
      title: "Vztahy",
      description: "Práce na partnerských, rodinných a mezilidských vztazích",
      image: "relationships.webp",
      imageAlt: "Práce na vztazích"
    },
    {
      title: "Rodinná terapie",
      description: "Podpora pro rodiny při řešení konfliktů a zlepšování komunikace",
      image: "family.webp",
      imageAlt: "Rodinná terapie"
    }
  ] 
}) {
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
                  <img
                    src={`/img/${service.image}`}
                    alt={service.imageAlt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(1.1)',
                    }}
                    loading="lazy"
                  />
                </Box>
                <Box flex={1}>
                  <Heading fontSize={'xl'} color={headingColor} mb={4}>
                    {service.title}
                  </Heading>
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