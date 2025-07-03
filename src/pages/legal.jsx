import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  Divider,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import Layout from '../components/Layout'
import SEO from '../components/SEO';

const LegalPage = () => {
  return (
    <Layout>
      <SEO
        title="Právní informace"
        description="Právní informace a podmínky poskytování psychoterapeutických služeb Tomáše Nováčka. Odborná kvalifikace, odpovědnost a autorská práva."
        keywords="právní informace, psychoterapie, Brno, podmínky, autorská práva, mlčenlivost"
        url="https://tomnovacek.com/legal"
      />
      <Container maxW="container.md" py={10}>
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="xl">Právní informace</Heading>

          <Box>
            <Heading as="h2" size="lg" mb={4}>Předmět činnosti</Heading>
            <Text>
              Poskytování psychoterapeutických služeb v rámci integrativní psychoterapie, poradenství v oblasti duševního zdraví.
            </Text>
          </Box>

          <Divider />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Odborná kvalifikace</Heading>
            <List spacing={3}>
              <ListItem>
                <Text>Certifikovaný psychoterapeut</Text>
              </ListItem>
              <ListItem>
                <Text>Certifikovaný kouč</Text>
              </ListItem>
              <ListItem>
                <Text>Člen České asociace pro psychoterapii</Text>
              </ListItem>
            </List>
          </Box>

          <Divider />

          <Alert status="warning" borderRadius="md">
            <AlertIcon />
            <Box>
              <Heading as="h3" size="md" mb={2}>Důležité upozornění</Heading>
              <Text>
                Informace na těchto stránkách nenahrazují odbornou terapeutickou péči.
                V případě akutní krize kontaktujte:
              </Text>
              <List spacing={1} mt={2}>
                <ListItem>• Linka důvěry: 116 123</ListItem>
                <ListItem>• Krizové centrum: 778 510 510</ListItem>
                <ListItem>• Při vážných psychických obtížích vyhledejte lékaře nebo psychiatra</ListItem>
              </List>
            </Box>
          </Alert>

          <Divider />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Odpovědnost za obsah</Heading>
            <Text>
              Veškerý obsah na těchto stránkách je poskytován pouze pro informační účely. 
              Nepřebíráme odpovědnost za škody vzniklé v souvislosti s použitím informací z těchto stránek.
            </Text>
          </Box>

          <Divider />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Autorská práva</Heading>
            <List spacing={2}>
              <ListItem>
                <Text>Veškerý obsah těchto stránek (texty, obrázky, grafika) je chráněn autorským právem.</Text>
              </ListItem>
              <ListItem>
                <Text>Jakékoliv kopírování nebo šíření bez písemného souhlasu je zakázáno.</Text>
              </ListItem>
            </List>
          </Box>

          <Divider />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Mlčenlivost</Heading>
            <List spacing={2}>
              <ListItem>
                <Text>
                  Jako psychoterapeut jsem vázán povinností mlčenlivosti dle:
                </Text>
                <List spacing={1} ml={6} mt={2}>
                  <ListItem>• Etického kodexu České psychoterapeutické společnosti</ListItem>
                  <ListItem>• Nařízení Evropského parlamentu a Rady (EU) 2016/679 (GDPR)</ListItem>
                  <ListItem>• Zákona č. 89/2012 Sb., občanský zákoník</ListItem>
                </List>
              </ListItem>
              <ListItem>
                <Text>
                  Všechny informace sdělené v rámci terapie jsou přísně důvěrné a podléhají 
                  povinnosti mlčenlivosti. Výjimkou je pouze situace, kdy by klient 
                  mohl být nebezpečný sobě nebo svému okolí, nebo v případě soudního příkazu.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  Jako soukromý psychoterapeut nejsem poskytovatelem zdravotních služeb 
                  dle zákona č. 373/2011 Sb. a nejsem tedy vázán povinnostmi vyplývajícími 
                  z tohoto zákona.
                </Text>
              </ListItem>
            </List>
          </Box>

          <Divider />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Řešení sporů</Heading>
            <List spacing={2}>
              <ListItem>
                <Text>
                  Případné spory budou řešeny v souladu s právním řádem České republiky 
                  u příslušných soudů.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  Před soudním řízením se snažíme o mimosoudní řešení sporů formou mediace.
                </Text>
              </ListItem>
            </List>
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

export default LegalPage 