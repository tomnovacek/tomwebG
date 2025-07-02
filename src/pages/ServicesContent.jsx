import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  useColorModeValue,
  Button,
  Icon,
  Link,
  Flex,
} from '@chakra-ui/react'
import { 
  FaArrowRight,
  FaUserFriends, 
  FaVideo, 
  FaCalendarAlt, 
  FaHeartbeat,
  FaUserShield,
  FaExchangeAlt,
  FaSeedling,
  FaUsers,
  FaHandHoldingHeart,
  FaInfoCircle,
  FaClock,
  FaIdCard,
  FaMoneyBillAlt
} from 'react-icons/fa'
import { Link as GatsbyLink } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import HeroTextBox from '../components/HeroTextBox'
import PricingCard from '../components/PricingCard'
import ServicesGrid from '../components/ServicesGrid'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'

export default function Services() {
  const bgColor = useColorModeValue('gray.100', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('green.500', 'gray.200')

  return (
    <Box bg={bgColor}>
      <SEO
        title="Služby | Tomáš Nováček - Psychoterapie"
        description="Certifikované psychoterapeutické služby v centru Brna. Individuální terapie pro dospělé, pro podporu osobního růstu, při úzkosti, depresi a vztahových problémech."
        keywords="psychoterapie, poradenství, Brno, individuální terapie, online konzultace"
        url="https://tomnovacek.com/services"
        image="room.jpeg"
        preloadImages={[
          'room.jpeg',  // Hero background
          'tom1.png'  // Hero portrait
        ]}
      >
        {/* Preload critical images for LCP optimization */}
        <link 
          rel="preload" 
          as="image" 
          href="/optimized-images/room-md.jpeg" 
          fetchpriority="high"
        />
        <link 
          rel="preload" 
          as="image" 
          href="/optimized-images/tom1-md.png" 
          fetchpriority="high"
        />
      </SEO>
      <StructuredData type="MedicalBusiness" />

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
              height: '100%',
              width: '100%',
            }}
            formats={['auto', 'webp', 'avif']}
            quality={85}
            priority={true}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bg="blackAlpha.200"
            backdropFilter="blur(3px)"
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
            {/* Text Box */}
            <HeroTextBox
              title="Moje služby"
              titleAccent="& Podmínky"
              description="Nabízím terapeutická sezení na podporu vašeho duševního zdraví a osobního růstu. Společně prozkoumáme vaše potřeby a vytvoříme plán, který Vám pomůže, aby jste žili plnější a spokojenější život."
            />

            {/* Portrait Image */}
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
                  alt="Tom Nováček"
                  placeholder="blurred"
                  layout="constrained"
                  width={600}
                  height={800}
                  style={{
                    mixBlendMode: 'normal',
                    backgroundColor: 'transparent',
                    filter: 'brightness(1.1)',
                    height: 'auto',
                    width: '100%'
                  }}
                  formats={['auto', 'webp', 'avif']}
                  quality={90}
                  priority={true}
                />
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Areas of Expertise */}
      <ServicesGrid
        title="Nejčastější témata"
        description="S klienty se nejčastějí věnujeme následujícím otázkám:"
        services={[
          {
            title: 'Osobní rozvoj',
            description: 'Když se chcete posunout dál a je složité překonat překážky, které vám stojí v cestě.',
            icon: FaSeedling,
            image: 'healing-space.webp'
          },
          {
            title: 'Sebevědomí a vztah k sobě',
            description: 'Co stojí za nedostatkem sebevědomí. Jak zlepšit vztah k sobě a svému životu.',
            icon: FaHandHoldingHeart,
            image: 'safe-space.webp'
          },
          {
            title: 'Úzkost a deprese',
            description: 'Podpora při zvládání úzkosti a deprese. Rozšiřování reportoáru, jak si s tím poradit.',
            icon: FaUserShield,
            image: 'stress.webp'
          },
          {
            title: 'Stres a jeho zvládání',
            description: 'Chápání role stresu ve vašem životě, jak ho ovlivnit a zvládat.',
            icon: FaHeartbeat,
            image: 'mindfulness.webp'
          },
          {
            title: 'Vztahy',
            description: 'Podpora v budování zdravých a naplňujících vztahů. Vztahy s dětmi, partnery, přáteli, kolegy.',
            icon: FaUsers,
            image: 'relationships.webp'
          },
          {
            title: 'Zpracování složitých životních situací',
            description: 'Bezpečný prostor pro zpracování těžkých životních zkušeností.',
            icon: FaExchangeAlt,
            image: 'family.webp'
          },
        ]}
      />

      {/* What to Expect Section */}
      <Box py={20} bg={bgColor}>
        <Container maxW={'7xl'}>
          <Stack spacing={8}>
            <Stack spacing={4} textAlign={'center'} maxW={'6xl'} mx="auto">
              <Heading variant="section" color={headingColor}>
                <Text
                  as={'span'}
                  position={'relative'}
                >
                  Jak probíhají terapeutická sezení
                </Text>
              </Heading>
              <Text color={textColor} fontSize={'xl'}>
              Naše setkání probíhají v příjemném a bezpečném prostředí mé pracovny v centru Brna na Sukově 4. První sezení věnujeme tomu, abychom se poznali a společně porozuměli vašim potřebám. Bavíme se o tom, kam byste chtěli na naší společné cestě dojít. Následně se můžeme potkávat jednou týdně nebo jednou za dva týdny, podle vašich preferencí. Délka naší spolupráce je pak zcela ve vašich rukou - můžeme jít spolu tak dlouho, až se budete cítit připraveni pokračovat dál již bez mé podpory.
              </Text>
            </Stack>

            <Flex
              direction={{ base: 'column', lg: 'row' }}
              gap={10}
              align="center"
              justify="center"
            >
              <Box flex="1" maxW="2xl">
                <Stack spacing={6}>
                  <Box>
                    <Flex align="center" gap={3} mb={4}>
                      <Icon as={FaInfoCircle} w={8} h={8} color="green.400" />
                      <Heading color={headingColor} fontSize={'xl'}>Úvodní konzultace</Heading>
                    </Flex>
                    <Text color={textColor} fontSize={'lg'}>
                      Vaše první sezení je příležitostí, abychom se navzájem poznali a prodiskutovali vaše cíle pro terapii. Probereme vaši historii, současné trápění a zformuluje základ plánu terapie.
                    </Text>
                  </Box>
                  <Box>
                    <Flex align="center" gap={3} mb={4}>
                      <Icon as={FaClock} w={8} h={8} color="green.400" />
                      <Heading color={headingColor} fontSize={'xl'}>Délka a frekvence</Heading>
                    </Flex>
                    <Text color={textColor} fontSize={'lg'}>
                      Standardní sezení trvá 50 minut. Frekvence sezení je obvykle týdenní nebo čtrnáctidenní, v závislosti na vašich potřebách a cílech.
                    </Text>
                  </Box>
                </Stack>
              </Box>
              <Box
                flex="1"
                maxW="2xl"
                position="relative"
                minH="400px"
                display={{ base: 'none', lg: 'flex' }}
                alignItems="center"
                justifyContent="center"
              >
                <StaticImage
                  src="../assets/img/tom1.png"
                  alt="Tom Nováček"
                  placeholder="blurred"
                  layout="constrained"
                  width={400}
                  height={500}
                  style={{
                    borderRadius: '8px',
                    width: '70%',
                    height: '70%',
                    objectFit: 'cover'
                  }}
                  formats={['auto', 'webp', 'avif']}
                  quality={85}
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
              <Button
                as={GatsbyLink}
                to="/calendar"
                variant="cta"
                leftIcon={<FaCalendarAlt />}
              >
                Objednat konzultaci
              </Button>
              <Button
                as={GatsbyLink}
                to="/about"
                variant="ctaOutline"
                rightIcon={<FaArrowRight />}
              >
                Více o mně
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
} 