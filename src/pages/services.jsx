import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ServicesGrid from '../components/ServicesGrid'
import PricingCard from '../components/PricingCard'
import HeroTextBox from '../components/HeroTextBox'
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  useColorModeValue,
  Flex,
  Icon,
  Link,
} from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'
import {
  FaUserFriends,
  FaVideo,
  FaIdCard,
  FaMoneyBillAlt,
  FaCalendarAlt,
  FaArrowRight,
  FaInfoCircle,
  FaRegClock,
} from 'react-icons/fa'
import { Link as GatsbyLink } from 'gatsby'
import AnalyticsButton from '../components/AnalyticsButton'

const ServicesPage = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('green.500', 'gray.200')

  return (
    <Layout>
      <SEO
        title="Služby | Tomáš Nováček - Psychoterapie"
        description="Certifikované psychoterapeutické služby v centru Brna. Individuální terapie pro dospělé, pro podporu osobního růstu, při úzkosti, depresi a vztahových problémech."
        url="https://tomnovacek.com/services"
        image="https://tomnovacek.com/static/room-1200x630.webp"
      />

      {/* Hero Section */}
      <Box position="relative" width="100%" height={{ base: "auto", md: "75vh" }} overflow="hidden">
        {/* Background Image */}
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex={0}
        >
          <StaticImage
            src="../assets/img/room.jpeg"
            alt="Terapeutická místnost"
            placeholder="blurred"
            layout="fullWidth"
            objectFit="cover"
            style={{
              width: '100%',
              height: '100%',
            }}
            formats={['auto', 'webp', 'avif']}
            quality={85}
            priority="true"
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bg="blackAlpha.100"
            backdropFilter="blur(2px)"
          />
        </Box>

        {/* Content Container */}
        <Container maxW="7xl" height="100%" position="relative" zIndex={1}>
          <Flex
            height="100%"
            justify="center"
            align="center"
            direction={{ base: 'column', md: 'row' }}
            gap={8}
            pt={{ base: 10, md: 28 }}
            mt={{ base: 0, md: 0 }}
          >
            {/* Text Box on the right */}
            <HeroTextBox
              title="Moje služby"
              titleAccent="& Podmínky"
              description="Nabízím individuální psychoterapii pro dospělé v centru Brna. Společně prozkoumáváme vaše životní výzvy a hledáme cesty k jejich překonání. Vytvářím bezpečný prostor pro vaše sebepoznání a osobní růst."
              primaryText="Objednat konzultaci"
              primaryHref="/calendar"
              secondaryText="O mně"
              secondaryHref="/about"
            />

            {/* Image on the left */}
            <Box
              flex="1"
              maxW="2xl"
              position="relative"
              bg="transparent"
              height="100%"
              minH={{ base: "400px", md: "500px" }}
              display="flex"
            >
              <Box
                width="100%"
                mt="auto"
              >
                <StaticImage
                  src="../assets/img/tom1.png"
                  alt="Tomáš Nováček - Psychoterapeut"
                  placeholder="blurred"
                  layout="fullWidth"
                  style={{
                    borderRadius: '12px',
                    height: 'auto',
                    width: '100%'
                  }}
                  formats={['auto', 'webp', 'avif']}
                  quality={90}
                  priority="true"
                />
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Services Grid */}
      <ServicesGrid />

      {/* Jak probíhají terapeutická sezení */}
      <Box py={20} bg={bgColor}>
        <Container maxW={'7xl'}>
          <Stack spacing={10} align="center">
            <Heading as="h2" size="xl" color={headingColor} textAlign="center">
              Jak probíhají terapeutická sezení
            </Heading>
            <Text color={textColor} fontSize={'xl'} textAlign="center" maxW="4xl">
              Naše setkání probíhají v příjemném a bezpečném prostředí mé pracovny v centru Brna na Sukově 4. První sezení věnujeme tomu, abychom se poznali a společně porozuměli vašim potřebám. Bavíme se o tom, kam byste chtěli na naší společné cestě dojít.
              Následně se můžeme potkávat jednou týdně nebo jednou za dva týdny, podle vašich preferencí. Délka naší spolupráce je pak zcela ve vašich rukou – můžeme jít spolu tak dlouho, až se budete cítit připraveni pokračovat dál již bez mé podpory.
            </Text>
            <Flex direction={{ base: 'column', md: 'row' }} align="flex-start" justify="center" gap={12} w="full" maxW="5xl">
              <Box flex={1}>
                <Stack spacing={8}>
                  <Flex align="flex-start" gap={4}>
                    <Box mt={1}>
                      <Icon as={FaInfoCircle} w={7} h={7} color={headingColor} />
                    </Box>
                    <Box>
                      <Text fontWeight="bold" color={headingColor} fontSize="lg" mb={1}>Úvodní konzultace</Text>
                      <Text color={textColor}>
                        Vaše první sezení je příležitostí, abychom se navzájem poznali a prodiskutovali vaše cíle pro terapii. Probereme vaši historii, současné trápení a zformuluje základ plánu terapie.
                      </Text>
                    </Box>
                  </Flex>
                  <Flex align="flex-start" gap={4}>
                    <Box mt={1}>
                      <Icon as={FaRegClock} w={7} h={7} color={headingColor} />
                    </Box>
                    <Box>
                      <Text fontWeight="bold" color={headingColor} fontSize="lg" mb={1}>Délka a frekvence</Text>
                      <Text color={textColor}>
                        Standardní sezení trvá 50 minut. Frekvence sezení je obvykle týdenní nebo čtrnáctidenní, v závislosti na vašich potřebách a cílech.
                      </Text>
                    </Box>
                  </Flex>
                </Stack>
              </Box>
              <Box flexShrink={0} alignSelf={{ base: 'center', md: 'flex-end' }}>
                <StaticImage
                  src="../assets/img/tom1.png"
                  alt="Tomáš Nováček - Psychoterapeut"
                  placeholder="blurred"
                  layout="constrained"
                  width={220}
                  height={220}
                  style={{ borderRadius: '16px', background: 'white' }}
                  quality={90}
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box py={20} bg={cardBg} id="pricing" >
        <Container maxW={'7xl'}>
          <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mb={20} mx="auto">
            <Heading variant="section" color={headingColor}>
              <Text
                as={'span'}
                position={'relative'}
              >
                Ceník služeb
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Transparentní ceny pro všechny služby. Platba je možná v hotovosti nebo převodem.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {[
              {
                title: 'Individuální terapie',
                price: '1 100 Kč',
                duration: '50 minut',
                description: 'Standardní terapeutické sezení.',
                features: [
                  'Osobní setkání v terapeutické místnosti',
                  'Individuální přístup',
                  'Bezpečný a důvěrný prostor',
                ],
                icon: FaUserFriends,
                image: 'room.jpeg',
                popular: true
              },
              {
                title: 'Online terapie',
                price: '1 200 Kč',
                duration: '50 minut',
                description: 'Terapeutické sezení přes video hovor pro vaše pohodlí.',
                features: [
                  'Bezpečné video hovory',
                  'Komfort vašeho domova',
                  'Dostupnost odkudkoliv'
                ],
                icon: FaVideo,
                image: 'laptop2.jpg'
              }
            ].map((service, index) => (
              <PricingCard key={index} {...service} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Insurance & Payment Section */}
      <Box py={20} bg={bgColor}>
        <Container maxW={'7xl'}>
          <Stack spacing={8}>
            <Stack spacing={4} textAlign={'center'} maxW={'3xl'} mx="auto">
              <Heading variant="section" color={headingColor}>
                <Text
                  as={'span'}
                  position={'relative'}
                >
                  Platba
                </Text>
              </Heading>
              <Text color={textColor} fontSize={'xl'}>
                Informace o možnostech placení a preventivních programech zdravotních pojišťoven.
              </Text>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Box>
                <Flex align="center" gap={3} mb={4}>
                  <Icon as={FaIdCard} w={8} h={8} color="green.400" />
                  <Heading color={headingColor} fontSize={'xl'}>Přímá platba</Heading><Text color={textColor} fontSize={'sm'}>(s podporou Zdravotnich pojištoven)</Text>
                </Flex>
                <Text color={textColor} fontSize={'lg'}>
                  Služby si klienti hradí z vlastních prostředků. Nicméně, některé pojišťovny částečně přispívají na psychoterapii v rámci svych nadstandardních preventivních programů. Jsem zapojen do těchto programů, aby klienti mohli tyto výhody čerpat. Více informací naleznete na stránce <Link href="https://czap.cz/spoluprace-zp" target="_blank">České asociace pro psychoterapii</Link> nebo u vaší pojišťovny.
                </Text>
              </Box>
              <Box>
                <Flex align="center" gap={3} mb={4}>
                  <Icon as={FaMoneyBillAlt} w={8} h={8} color="green.400" />
                  <Heading color={headingColor} fontSize={'xl'}>Způsoby platby</Heading>
                </Flex>
                <Text color={textColor} fontSize={'lg'}>
                  Platba je možná v hotovosti nebo převodem na účet. Obvykle po sezení vystavuji fakturu s QR kódem a zasílám jí emailem. Pro více informací o platbách mě neváhejte kontaktovat.
                </Text>
              </Box>
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW={'7xl'}>
          <Stack
            spacing={8}
            align="center"
            textAlign="center"
            maxW={'3xl'}
            mx="auto"
          >
            <Heading variant="section" color={headingColor}>
              <Text
                as={'span'}
                position={'relative'}
              >
                Vydejme se spolu na cestu
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'} maxW={'2xl'}>
              První krok je často ten nejtěžší. Domluvte si úvodní konzultaci a společně prozkoumáme, jak vám mohu pomoci.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
              pt={4}
            >
              <AnalyticsButton
                as={GatsbyLink}
                to="/calendar"
                variant="cta"
                leftIcon={<FaCalendarAlt />}
              >
                Objednat konzultaci
              </AnalyticsButton>
              <AnalyticsButton
                as={GatsbyLink}
                to="/about"
                variant="ctaOutline"
                rightIcon={<FaArrowRight />}
              >
                Více o mně
              </AnalyticsButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Layout>
  )
}

export default ServicesPage 