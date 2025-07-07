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
import { FaUserShield, FaFileAlt, FaLock } from 'react-icons/fa';
import Layout from '../components/Layout'
import SEOGatsby from '../components/SEOGatsby'
import SecureEmail from '../components/SecureEmail';

const GDPRPage = () => {
  return (
    <Layout>
      <Container maxW="container.md" py={10}>
        <Stack spacing={8} align="stretch">
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

          <Box>
            <Heading as="h2" size="lg" mb={4}>Rozsah zpracování osobních údajů</Heading>
            <Text mb={4}>
              V rámci poskytování psychoterapeutických služeb zpracovávám následující osobní údaje:
            </Text>
            <Stack spacing={3}>
              <Box>
                <Icon as={FaUserShield} color="blue.500" />
                <Text as="span" fontWeight="bold">Identifikační údaje:</Text>
                <Text>jméno, příjmení, datum narození, kontaktní údaje</Text>
              </Box>
              <Box>
                <Icon as={FaFileAlt} color="blue.500" />
                <Text as="span" fontWeight="bold">Zdravotní údaje:</Text>
                <Text>informace o psychickém stavu, anamnéza, průběh terapie</Text>
              </Box>
              <Box>
                <Icon as={FaLock} color="blue.500" />
                <Text as="span" fontWeight="bold">Ostatní údaje:</Text>
                <Text>platební údaje, pojištění, doporučení od lékaře</Text>
              </Box>
            </Stack>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>Účel zpracování</Heading>
            <Text>
              Osobní údaje zpracovávám za účelem:
            </Text>
            <Stack spacing={2} mt={2}>
              <Box>• Poskytování psychoterapeutických služeb</Box>
              <Box>• Vedení dokumentace o průběhu terapie</Box>
              <Box>• Komunikace s klientem</Box>
              <Box>• Fakturace a účetnictví</Box>
              <Box>• Plnění zákonných povinností</Box>
            </Stack>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>Právní základ zpracování</Heading>
            <Text>
              Zpracování osobních údajů je založeno na:
            </Text>
            <Stack spacing={2} mt={2}>
              <Box>• Váš souhlas se zpracováním osobních údajů</Box>
              <Box>• Plnění smlouvy o poskytování služeb</Box>
              <Box>• Plnění zákonných povinností (např. účetnictví)</Box>
              <Box>• Oprávněný zájem správce</Box>
            </Stack>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>Doba zpracování</Heading>
            <Text>
              Osobní údaje zpracovávám po dobu nezbytně nutnou k naplnění výše uvedených účelů:
            </Text>
            <Stack spacing={2} mt={2}>
              <Box>• Dokumentace o průběhu terapie: 10 let od poslední terapie</Box>
              <Box>• Účetní doklady: 10 let</Box>
              <Box>• Kontaktní údaje: po dobu aktivní spolupráce</Box>
            </Stack>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>Způsob zpracování</Heading>
            <Text>
              Osobní údaje jsou zpracovávány:
            </Text>
            <Stack spacing={2} mt={2}>
              <Box>• Elektronicky v zabezpečených systémech</Box>
              <Box>• Manuálně v uzamčených prostorách</Box>
              <Box>• S využitím šifrované komunikace</Box>
            </Stack>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>Práva subjektu údajů</Heading>
            <Text mb={4}>
              Máte právo na:
            </Text>
            <Stack spacing={2}>
              <Box>• Přístup k osobním údajům</Box>
              <Box>• Opravu osobních údajů</Box>
              <Box>• Výmaz osobních údajů (s výjimkou údajů, které musíme ze zákona uchovávat)</Box>
              <Box>• Omezení zpracování</Box>
              <Box>• Přenositelnost údajů</Box>
              <Box>• Odvolání souhlasu se zpracováním</Box>
              <Box>• Podání stížnosti u dozorového úřadu</Box>
            </Stack>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>Předávání údajů</Heading>
            <Text>
              Osobní údaje mohou být předány:
            </Text>
            <Stack spacing={2} mt={2}>
              <Box>• Vašemu pojišťovacímu ústavu (na základě vašeho souhlasu)</Box>
              <Box>• Dalším zdravotnickým pracovníkům (na základě vašeho souhlasu)</Box>
              <Box>• Finančnímu úřadu (ze zákona)</Box>
            </Stack>
          </Box>

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

          <Box bg={useColorModeValue('gray.50', 'gray.700')} p={4} borderRadius="md">
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
              Poslední aktualizace: {new Date().toLocaleDateString('cs-CZ')}
            </Text>
          </Box>
        </Stack>
      </Container>
    </Layout>
  );
}

export default GDPRPage

export const Head = () => (
  <SEOGatsby 
    title="Ochrana osobních údajů - Tomáš Nováček"
    description="Informace o ochraně osobních údajů a GDPR."
    pathname="/gdpr"
  />
) 