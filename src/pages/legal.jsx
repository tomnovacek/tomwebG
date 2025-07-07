import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Flex,
  Link,
  Icon,
  Button,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import Layout from '../components/Layout'
import SEOGatsby from '../components/SEOGatsby'

const LegalPage = () => {
  return (
    <Layout>
      <Container maxW="container.md" py={10}>
        <Stack spacing={8} align="stretch">
          <Heading as="h1" size="xl">Právní informace</Heading>

          <Box>
            <Heading as="h2" size="lg" mb={4}>Předmět činnosti</Heading>
            <Text>
              Poskytování psychoterapeutických služeb v rámci integrativní psychoterapie, poradenství v oblasti duševního zdraví.
            </Text>
          </Box>

          <Box borderBottom="1px" borderColor={useColorModeValue('gray.200', 'gray.700')} py={4} />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Odborná kvalifikace</Heading>
            <Stack spacing={3}>
              <Text>Certifikovaný psychoterapeut</Text>
              <Text>Certifikovaný kouč</Text>
              <Text>Člen České asociace pro psychoterapii</Text>
            </Stack>
          </Box>

          <Box borderBottom="1px" borderColor={useColorModeValue('gray.200', 'gray.700')} py={4} />

          <Alert status="warning" borderRadius="md">
            <AlertIcon />
            <Box>
              <Heading as="h3" size="md" mb={2}>Důležité upozornění</Heading>
              <Text>
                Informace na těchto stránkách nenahrazují odbornou terapeutickou péči.
                V případě akutní krize kontaktujte:
              </Text>
              <Stack spacing={1} mt={2}>
                <Text>• Linka důvěry: 116 123</Text>
                <Text>• Krizové centrum: 778 510 510</Text>
                <Text>• Při vážných psychických obtížích vyhledejte lékaře nebo psychiatra</Text>
              </Stack>
            </Box>
          </Alert>

          <Box borderBottom="1px" borderColor={useColorModeValue('gray.200', 'gray.700')} py={4} />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Odpovědnost za obsah</Heading>
            <Text>
              Veškerý obsah na těchto stránkách je poskytován pouze pro informační účely. 
              Nepřebíráme odpovědnost za škody vzniklé v souvislosti s použitím informací z těchto stránek.
            </Text>
          </Box>

          <Box borderBottom="1px" borderColor={useColorModeValue('gray.200', 'gray.700')} py={4} />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Autorská práva</Heading>
            <Stack spacing={2}>
              <Text>Veškerý obsah těchto stránek (texty, obrázky, grafika) je chráněn autorským právem.</Text>
              <Text>Jakékoliv kopírování nebo šíření bez písemného souhlasu je zakázáno.</Text>
            </Stack>
          </Box>

          <Box borderBottom="1px" borderColor={useColorModeValue('gray.200', 'gray.700')} py={4} />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Mlčenlivost</Heading>
            <Stack spacing={2}>
              <Text>
                Jako psychoterapeut jsem vázán povinností mlčenlivosti dle:
              </Text>
              <Stack spacing={1} ml={6} mt={2}>
                <Text>• Etického kodexu České psychoterapeutické společnosti</Text>
                <Text>• Nařízení Evropského parlamentu a Rady (EU) 2016/679 (GDPR)</Text>
                <Text>• Zákona č. 89/2012 Sb., občanský zákoník</Text>
              </Stack>
            </Stack>
            <Text>
              Všechny informace sdělené v rámci terapie jsou přísně důvěrné a podléhají 
              povinnosti mlčenlivosti. Výjimkou je pouze situace, kdy by klient 
              mohl být nebezpečný sobě nebo svému okolí, nebo v případě soudního příkazu.
            </Text>
            <Text>
              Jako soukromý psychoterapeut nejsem poskytovatelem zdravotních služeb 
              dle zákona č. 373/2011 Sb. a nejsem tedy vázán povinnostmi vyplývajícími 
              z tohoto zákona.
            </Text>
          </Box>

          <Box borderBottom="1px" borderColor={useColorModeValue('gray.200', 'gray.700')} py={4} />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Řešení sporů</Heading>
            <Stack spacing={2}>
              <Text>
                Případné spory budou řešeny v souladu s právním řádem České republiky 
                u příslušných soudů.
              </Text>
              <Text>
                Před soudním řízením se snažíme o mimosoudní řešení sporů formou mediace.
              </Text>
            </Stack>
          </Box>

          <Box bg="gray.50" p={4} borderRadius="md">
            <Text fontSize="sm" color="gray.600">
              Poslední aktualizace: {new Date().toLocaleDateString('cs-CZ')}
            </Text>
          </Box>
        </Stack>
      </Container>
    </Layout>
  );
}

export default LegalPage

export const Head = () => (
  <SEOGatsby 
    title="Právní informace - Tomáš Nováček"
    description="Právní informace a podmínky používání webových stránek."
    pathname="/legal"
  />
) 