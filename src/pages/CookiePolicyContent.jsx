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
import SecureEmail from '../components/SecureEmail';
import Seo from '../components/SEO';

export default function CookiePolicy() {
  return (
    <>
      <Seo
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
              Cookies jsou malé textové soubory, které se ukládají ve vašem prohlížeči při návštěvě webových stránek.
              Pomáhají nám poskytovat lepší uživatelský zážitek a analyzovat návštěvnost webu.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>Jaké cookies používáme?</Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FaCookieBite} color="blue.500" />
                <Text as="span" fontWeight="bold">Nezbytné cookies</Text>
                <Text>
                  Tyto cookies jsou nezbytné pro fungování webu a nelze je vypnout. Zajišťují základní funkce a bezpečnost webu.
                </Text>
              </ListItem>
              <ListItem>
                <ListIcon as={FaCookieBite} color="blue.500" />
                <Text as="span" fontWeight="bold">Analytické cookies</Text>
                <Text>
                  Pomáhají nám pochopit, jak návštěvníci používají náš web. Používáme Google Analytics pro analýzu návštěvnosti.
                  Tyto cookies můžete vypnout v nastavení.
                </Text>
              </ListItem>
            </List>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>Jak spravovat cookies?</Heading>
            <Text>
              Cookies můžete spravovat v nastavení vašeho prohlížeče. Většina prohlížečů umožňuje:
            </Text>
            <List spacing={2} mt={2}>
              <ListItem>• Blokovat všechny cookies</ListItem>
              <ListItem>• Povolit pouze nezbytné cookies</ListItem>
              <ListItem>• Vymazat cookies při zavření prohlížeče</ListItem>
            </List>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>Vaše práva</Heading>
            <Text>
              V souladu s nařízením GDPR máte právo:
            </Text>
            <List spacing={2} mt={2}>
              <ListItem>• Odvolat souhlas s používáním cookies</ListItem>
              <ListItem>• Požadovat informace o tom, jaké cookies používáme</ListItem>
              <ListItem>• Požadovat vymazání cookies</ListItem>
            </List>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>Kontakt</Heading>
            <Text>
              Pokud máte jakékoliv otázky ohledně používání cookies, neváhejte nás kontaktovat na:
            </Text>
            <Text mt={2}>
              Email: <SecureEmail email="terapie@tomnovacek.com" />
            </Text>
          </Box>
        </VStack>
      </Container>
    </>
  );
} 