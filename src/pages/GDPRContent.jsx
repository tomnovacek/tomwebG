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
  Divider,
} from '@chakra-ui/react';
import { FaUserShield, FaFileAlt, FaLock } from 'react-icons/fa';
import SecureEmail from '../components/SecureEmail';
import Seo from '../components/SEO';

export default function GDPR() {
  return (
    <>
      <Seo
        title="Ochrana osobních údajů"
        description="Informace o zpracování osobních údajů v rámci psychoterapeutických služeb Tomáše Nováčka. GDPR compliance a práva subjektů údajů."
        keywords="GDPR, ochrana osobních údajů, psychoterapie, Brno, soukromí, práva klientů"
        url="https://tomnovacek.com/gdpr"
      />
      <Container maxW="container.md" py={10}>
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="xl">Ochrana osobních údajů</Heading>
          
          <Box>
            <Heading as="h2" size="lg" mb={4}>Správce osobních údajů</Heading>
            <Text>
              Tomáš Nováček<br />
              Sukova 4<br />
              602 00 Brno-střed<br />
              IČ: 70453217
            </Text>
            <Text mt={2}>
              Email: <SecureEmail email="terapie@tomnovacek.com" />
            </Text>
          </Box>

          <Divider />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Rozsah zpracování osobních údajů</Heading>
            <Text mb={4}>
              V rámci poskytování psychoterapeutických služeb zpracovávám následující osobní údaje:
            </Text>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FaUserShield} color="blue.500" />
                <Text as="span" fontWeight="bold">Identifikační údaje:</Text>
                <Text>jméno, příjmení, datum narození, kontaktní údaje</Text>
              </ListItem>
              <ListItem>
                <ListIcon as={FaFileAlt} color="blue.500" />
                <Text as="span" fontWeight="bold">Zdravotní údaje:</Text>
                <Text>informace o psychickém stavu, anamnéza, průběh terapie</Text>
              </ListItem>
              <ListItem>
                <ListIcon as={FaLock} color="blue.500" />
                <Text as="span" fontWeight="bold">Ostatní údaje:</Text>
                <Text>platební údaje, pojištění, doporučení od lékaře</Text>
              </ListItem>
            </List>
          </Box>

          <Divider />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Účel zpracování</Heading>
            <Text>
              Osobní údaje zpracovávám za účelem:
            </Text>
            <List spacing={2} mt={2}>
              <ListItem>• Poskytování psychoterapeutických služeb</ListItem>
              <ListItem>• Vedení dokumentace o průběhu terapie</ListItem>
              <ListItem>• Komunikace s klientem</ListItem>
              <ListItem>• Fakturace a účetnictví</ListItem>
              <ListItem>• Plnění zákonných povinností</ListItem>
            </List>
          </Box>

          <Divider />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Právní základ zpracování</Heading>
            <Text>
              Zpracování osobních údajů je založeno na:
            </Text>
            <List spacing={2} mt={2}>
              <ListItem>• Váš souhlas se zpracováním osobních údajů</ListItem>
              <ListItem>• Plnění smlouvy o poskytování služeb</ListItem>
              <ListItem>• Plnění zákonných povinností (např. účetnictví)</ListItem>
              <ListItem>• Oprávněný zájem správce</ListItem>
            </List>
          </Box>

          <Divider />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Doba zpracování</Heading>
            <Text>
              Osobní údaje zpracovávám po dobu nezbytně nutnou k naplnění výše uvedených účelů:
            </Text>
            <List spacing={2} mt={2}>
              <ListItem>• Dokumentace o průběhu terapie: 10 let od poslední terapie</ListItem>
              <ListItem>• Účetní doklady: 10 let</ListItem>
              <ListItem>• Kontaktní údaje: po dobu aktivní spolupráce</ListItem>
            </List>
          </Box>

          <Divider />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Způsob zpracování</Heading>
            <Text>
              Osobní údaje jsou zpracovávány:
            </Text>
            <List spacing={2} mt={2}>
              <ListItem>• Elektronicky v zabezpečených systémech</ListItem>
              <ListItem>• Manuálně v uzamčených prostorách</ListItem>
              <ListItem>• S využitím šifrované komunikace</ListItem>
            </List>
          </Box>

          <Divider />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Práva subjektu údajů</Heading>
            <Text mb={4}>
              Máte právo na:
            </Text>
            <List spacing={2}>
              <ListItem>• Přístup k osobním údajům</ListItem>
              <ListItem>• Opravu osobních údajů</ListItem>
              <ListItem>• Výmaz osobních údajů (s výjimkou údajů, které musíme ze zákona uchovávat)</ListItem>
              <ListItem>• Omezení zpracování</ListItem>
              <ListItem>• Přenositelnost údajů</ListItem>
              <ListItem>• Odvolání souhlasu se zpracováním</ListItem>
              <ListItem>• Podání stížnosti u dozorového úřadu</ListItem>
            </List>
          </Box>

          <Divider />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Předávání údajů</Heading>
            <Text>
              Osobní údaje mohou být předány:
            </Text>
            <List spacing={2} mt={2}>
              <ListItem>• Vašemu pojišťovacímu ústavu (na základě vašeho souhlasu)</ListItem>
              <ListItem>• Dalším zdravotnickým pracovníkům (na základě vašeho souhlasu)</ListItem>
              <ListItem>• Finančnímu úřadu (ze zákona)</ListItem>
            </List>
          </Box>

          <Divider />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Kontaktní údaje</Heading>
            <Text>
              Pro uplatnění vašich práv nebo pro jakékoliv dotazy ohledně zpracování osobních údajů mě můžete kontaktovat na:
            </Text>
            <Text mt={2}>
              Email: <SecureEmail email="terapie@tomnovacek.com" />
            </Text>
            <Text mt={2}>
              Telefon: +420 602 773 440
            </Text>
            <Text mt={2}>
              Adresa: Sukova 4, 602 00 Brno-střed
            </Text>
          </Box>

          <Box bg="gray.50" p={4} borderRadius="md">
            <Text fontSize="sm" color="gray.600">
              Poslední aktualizace: {new Date().toLocaleDateString('cs-CZ')}
            </Text>
          </Box>
        </VStack>
      </Container>
    </>
  );
} 