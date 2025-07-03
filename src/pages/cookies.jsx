import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { FaCookieBite } from 'react-icons/fa';
import Layout from '../components/Layout'
import SEO from '../components/SEO';
import SecureEmail from '../components/SecureEmail';

const CookiesPage = () => {
  return (
    <Layout>
      <SEO
        title="Používání cookies"
        description="Informace o používání cookies na webových stránkách Tomáše Nováčka. Jaké cookies používáme a jak je můžete spravovat."
        keywords="cookies, psychoterapie, Brno, webové stránky, soukromí, nastavení"
        url="https://tomnovacek.com/cookies"
      />
      <Container maxW="container.md" py={10}>
        <VStack spacing={8} align="stretch">
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
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FaCookieBite} color="orange.500" />
                <Text as="span" fontWeight="bold">Nezbytné cookies:</Text>
                <Text>Jsou nutné pro základní funkčnost stránek a nelze je vypnout.</Text>
              </ListItem>
              <ListItem>
                <ListIcon as={FaCookieBite} color="blue.500" />
                <Text as="span" fontWeight="bold">Analytické cookies:</Text>
                <Text>Pomáhají nám pochopit, jak návštěvníci používají naše stránky.</Text>
              </ListItem>
              <ListItem>
                <ListIcon as={FaCookieBite} color="green.500" />
                <Text as="span" fontWeight="bold">Funkční cookies:</Text>
                <Text>Umožňují pokročilé funkce a personalizaci.</Text>
              </ListItem>
            </List>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>Jak spravovat cookies</Heading>
            <Text mb={4}>
              Cookies můžete spravovat v nastavení vašeho prohlížeče:
            </Text>
            <List spacing={2}>
              <ListItem>• Chrome: Nastavení → Soukromí a zabezpečení → Cookies</ListItem>
              <ListItem>• Firefox: Možnosti → Soukromí a zabezpečení → Cookies</ListItem>
              <ListItem>• Safari: Předvolby → Soukromí → Cookies</ListItem>
              <ListItem>• Edge: Nastavení → Cookies a oprávnění stránek</ListItem>
            </List>
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
        </VStack>
      </Container>
    </Layout>
  );
}

export default CookiesPage 