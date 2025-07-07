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
} from '@chakra-ui/react';
import { FaCookieBite } from 'react-icons/fa';
import Layout from '../components/Layout'
import SEOGatsby from '../components/SEOGatsby'
import SecureEmail from '../components/SecureEmail';

const CookiesPage = () => {
  return (
    <Layout>
      <Container maxW="container.md" py={10}>
        <Stack spacing={8} align="stretch">
          <Heading as="h1" size="xl">Používání cookies</Heading>
          
          <Box>
            <Heading as="h2" size="lg" mb={4}>Co jsou cookies?</Heading>
            <Text>
              Cookies jsou malé textové soubory, které se ukládají do vašeho zařízení při návštěvě webových stránek. 
              Pomáhají nám zlepšovat funkčnost stránek a poskytovat lepší uživatelskou zkušenost.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>Jaké cookies používáme</Heading>
            <Stack spacing={2}>
              <Flex align="center">
                <Icon as={FaCookieBite} color="orange.500" mr={2} />
                <Text as="span" fontWeight="bold">Nezbytné cookies:</Text>
              </Flex>
              <Text>Jsou nutné pro základní funkčnost stránek a nelze je vypnout.</Text>
            </Stack>
            <Stack spacing={2} mt={4}>
              <Flex align="center">
                <Icon as={FaCookieBite} color="blue.500" mr={2} />
                <Text as="span" fontWeight="bold">Analytické cookies:</Text>
              </Flex>
              <Text>Pomáhají nám pochopit, jak návštěvníci používají naše stránky.</Text>
            </Stack>
            <Stack spacing={2} mt={4}>
              <Flex align="center">
                <Icon as={FaCookieBite} color="green.500" mr={2} />
                <Text as="span" fontWeight="bold">Funkční cookies:</Text>
              </Flex>
              <Text>Umožňují pokročilé funkce a personalizaci.</Text>
            </Stack>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>Jak spravovat cookies</Heading>
            <Text mb={4}>
              Cookies můžete spravovat v nastavení vašeho prohlížeče:
            </Text>
            <Stack spacing={2}>
              <Text>• Chrome: Nastavení → Soukromí a zabezpečení → Cookies</Text>
              <Text>• Firefox: Možnosti → Soukromí a zabezpečení → Cookies</Text>
              <Text>• Safari: Předvolby → Soukromí → Cookies</Text>
              <Text>• Edge: Nastavení → Cookies a oprávnění stránek</Text>
            </Stack>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>Důležité informace</Heading>
            <Text>
              Vypnutím některých cookies může dojít k omezení funkčnosti stránek. 
              Nezbytné cookies jsou vždy aktivní pro zajištění základní funkčnosti.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>Kontakt</Heading>
            <Text>
              Máte-li dotazy ohledně používání cookies, kontaktujte mě na: <SecureEmail email="terapie@tomnovacek.com" />
            </Text>
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

export default CookiesPage

export const Head = () => (
  <SEOGatsby 
    title="Cookies - Tomáš Nováček"
    description="Informace o používání cookies na těchto webových stránkách."
    pathname="/cookies"
  />
) 