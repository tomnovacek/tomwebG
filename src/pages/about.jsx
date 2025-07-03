import React from 'react'
import Layout from '../components/Layout'
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  useColorModeValue,
  Flex,
  Link,
  Icon,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import {
  FaGraduationCap,
  FaHeart,
  FaBrain,
  FaBook,
  FaCalendarAlt,
  FaArrowRight,
  FaCertificate,
} from 'react-icons/fa'
import { Link as GatsbyLink } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import HeroTextBox from '../components/HeroTextBox'
import SEO from '../components/SEO'

const About = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('green.500', 'gray.200')

  return (
    <Layout>
      <SEO
        title="Tomáš Nováček - psycholog a terapeut v Brně"
        description="Posledních sedm let věnuji doprovazení lidí, kteří překonávají náročné životní výzvy a hledají cestu k sobě."
        keywords="psychoterapeut, Tomáš Nováček, terapie, poradenství, Brno, Česká republika, profesionální zkušenosti, kvalifikace"
        url="https://tomnovacek.com/about"
        image="tom1.png"
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
            src="../assets/img/mountainHike.jpg"
            alt="hiking in the mountains"
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
                  layout="fullWidth"
                  style={{
                    mixBlendMode: 'normal',
                    backgroundColor: 'transparent',
                    filter: 'brightness(1.1)',
                    height: 'auto',
                    width: '100%'
                  }}
                  formats={['auto', 'webp', 'avif']}
                  quality={90}
                  priority="true"
                />
              </Box>
            </Box>
            
            {/* Text Box on the right */}
            <HeroTextBox
              title="Moje cesta"
              titleAccent="& Můj přístup"
              description="Psychoterapii vnímám jako prostor, kde se dá na chvíli zastavit, začít víc vnímat sama sebe, a lépe porozumět sobě i světu, ve kterém žijeme. A díky tomu najít pro sebe nové možnosti, které dříve nebyly možné."
              primaryText="Objednat konzultaci"
              primaryHref="/calendar"
              secondaryText="Moje služby"
              secondaryHref="/services"
            />

          </Flex>
        </Container>
      </Box>

      {/* About Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW={'7xl'}>
          <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mb={10} mx="auto">
            <Heading as="h2" size="xl" color={headingColor}>
              Můj přístup
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Věřím, že každý člověk má vnitřní schopnosti zvládat životní výzvy. Přesto se někdy můžeme cítit zablokovaní nebo bezmocní řešit složité situace. V takových chvílích se snažím pomoci porozumět vašim problémům a nacházet efektivní cesty jejich překonání.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {[
              {
                icon: FaHeart,
                title: 'Podporující',
                text: 'Snažím se vytvářet bezpečné prostředí, kde se můžete cítit slyšeni a pochopeni; kde není nutné hrát roli, kterou očekávají ostatní.',
              },
              {
                icon: FaBrain,
                title: 'Výzkumem ověřený',
                text: 'Využívám terapeutické přístupy podložené výzkumy, které však neztrácejí kontakt s unikátním okamžikem, lidskostí a tvořivostí.',
              },
              {
                icon: FaHeart,
                title: 'Na míru klientům',
                text: 'Respektuji individuálnost a specifické potřeby každého klienta. Každý příběh je jiný a zaslouží si jiný přístup – terapii na míru.',
              },
            ].map((feature, index) => (
              <Box
                key={index}
                bg={cardBg}
                boxShadow={'xl'}
                rounded={'xl'}
                p={8}
                position="relative"
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '2xl',
                }}
              >
                <Icon
                  as={feature.icon}
                  w={10}
                  h={10}
                  color="green.400"
                  mb={4}
                />
                <Heading as="h3" color={headingColor} fontSize={'xl'} mb={4}>
                  {feature.title}
                </Heading>
                <Text color={textColor}>{feature.text}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Education & Credentials - Updated layout */}
      <Box py={20} bg={bgColor}>
        <Container maxW={'7xl'}>
          <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mb={10} mx="auto">
            <Heading as="h2" size="xl" color={headingColor}>
              Vzdělání & Kvalifikace
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Mám za sebou studium psychologie a dlouhodobý psychoterapeutický výcvik. A učím se dál, od kolegů i klientů.
            </Text>
          </Stack>

          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={10}
            align="center"
          >
            <Box flex="1">
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                <Box>
                  <Flex align="center" gap={3} mb={4}>
                    <Icon as={FaGraduationCap} w={8} h={8} color="green.400" />
                    <Heading as="h3" fontSize={'xl'} color={headingColor}>Vzdělání</Heading>
                  </Flex>
                  <List spacing={3}>
                    <ListItem color={textColor}>
                      <ListIcon as={CheckCircleIcon} color="green.400" />
                      Magisterský titul v psychologii
                    </ListItem>
                    <ListItem color={textColor}>
                      <ListIcon as={CheckCircleIcon} color="green.400" />
                      Magisterský titul v managementu
                    </ListItem>
                    <ListItem color={textColor}>
                      <ListIcon as={CheckCircleIcon} color="green.400" />
                      Certifikovaný výcvik v koučování
                    </ListItem>
                    <ListItem color={textColor}>
                      <ListIcon as={CheckCircleIcon} color="green.400" />
                      Výcvik v <Link href='https://www.psychoterapie-integrace.cz/vycvik/popis-vycviku-VIP4' isExternal target='_blank' rel='noopener noreferrer'>integrativní psychoterapii</Link>
                    </ListItem>
                  </List>
                </Box>
                <Box>
                  <Flex align="center" gap={3} mb={4}>
                    <Icon as={FaCertificate} w={8} h={8} color="green.400" />
                    <Heading as="h3" color={headingColor} fontSize={'xl'}>Profesionální členství</Heading>
                  </Flex>
                  <List spacing={3}>
                    <ListItem color={textColor}>
                      <ListIcon as={CheckCircleIcon} color="green.400" />
                      Certifikovaný psychoterapeut – 1010 hodin výcviku <Link href='src/ext/Certifikat.pdf' target='_blank' rel='noopener noreferrer' color="green.400">(Certifikát)</Link>
                    </ListItem>
                    <ListItem color={textColor}>
                      <ListIcon as={CheckCircleIcon} color="green.400" />
                      Certifikovaný kouč
                    </ListItem>
                    <ListItem color={textColor}>
                      <ListIcon as={CheckCircleIcon} color="green.400" />
                      Člen profesionální psychoterapeutické asociace <Link href="https://czap.cz/" isExternal color="green.400">(ČAP)</Link>
                    </ListItem>
                  </List>
                </Box>
                <Box>
                  <Flex align="center" gap={3} mb={4}>
                    <Icon as={FaBook} w={8} h={8} color="green.400" />
                    <Heading as="h3" color={headingColor} fontSize={'xl'}>Další absolvované kurzy</Heading>
                  </Flex>
                  <List spacing={3}>
                    <ListItem color={textColor}>
                      <ListIcon as={CheckCircleIcon} color="green.400" />
                      Psychofarmaka v terapeutické praxi
                    </ListItem>
                    <ListItem color={textColor}>
                      <ListIcon as={CheckCircleIcon} color="green.400" />
                      Neurodiverzita (ADHD, ADD, Autismus)
                    </ListItem>
                    <ListItem color={textColor}>
                      <ListIcon as={CheckCircleIcon} color="green.400" />
                      Bezpečí v práci s tělem s traumatizovaným klientem
                    </ListItem>
                  </List>
                </Box>
              </SimpleGrid>
            </Box>
          </Flex>
          <Flex justify="center" mt={5}>
            <Box
              position="relative"
              width="160px"
              height="160px"
              opacity="0.8"
              transform="rotate(-15deg)"
              transition="all 0.3s"
              _hover={{
                transform: 'rotate(-15deg) scale(1.1)',
                opacity: '1',
              }}
            >
              <StaticImage
                src="../assets/img/CAP.png"
                alt="ČAP Logo"
                placeholder="blurred"
                layout="constrained"
                width={160}
                height={160}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
                formats={['auto', 'webp', 'avif']}
                quality={85}
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* My Journey Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW={'7xl'}>
          <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mb={10} mx="auto">
            <Heading as="h2" size="xl" color={headingColor}>
              O mé cestě
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
            Do světa psychologie jsem se dostal pořádnou oklikou. Roky jsem se pohyboval v marketingu a obchodu, až jsem postupně nabýval přesvědčení, že mě mnohem víc přitahují příběhy lidí než prodejní statistiky. A tak jsem se vydal na cestu k psychologii a terapii.
            </Text>
          </Stack>

          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={10}
            align="center"
          >
            {/* Text Content */}
            <Box flex="1">
              <Stack spacing={6}>
                <Text color={textColor} fontSize={'md'}>
                Doma mám skvělou podporu – manželku a dvě dcery, které mě nejen podporují, ale taky učí, kladou přede mě výzvy a pomáhají vytvářet místo, kde je lidem dobře. Mluví otevřeně a učí mě vidět svět v různých perspektivách. Zatímco dřív jsem si myslel, že je učím já, dnes už vím, že to je mínimálně vzájemné.
                </Text>
                <Text color={textColor} fontSize={'md'}>
                Před pár lety se k naší partě přidal také Ron – můj psí společník. Díky němu znám každý strom a plot v okruhu deseti kilometrů a vím, že hodně radosti se často skrývá v těch nejobyčejnějších místech. Má dar mi ukázat, jak se radovat z maličkostí. Já se zkouším takhle dívat na svůj lidský život plný nároků a očekávání. Naučil mě také, jak důležité je vědět, kde jsou hranice, a opakovaně o nich ostatní informovat. My lidé to děláme rafinovaněji než označkováním každého sloupu, ale princip je v podstatě stejný.
                </Text>
                <Text color={textColor} fontSize={'md'}>
                Tohle všechno dohromady, práce, rodina a čas v přírodě, mi dává energii a sílů, kterou pak můžu předat dál. Každý z nás má svou cestu, a já jsem tu, abych vám pomohl najít tu vaši.
                </Text>
              </Stack>
            </Box>

            {/* Image */}
            <Box
              flex="1"
              position="relative"
              width="100%"
              height="400px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="xl"
            >
              <StaticImage
                src="../assets/img/Tom&RonScootering03.jpeg"
                alt="Tom a Ron při scooteringu"
                placeholder="blurred"
                layout="fullWidth"
                objectFit="cover"
                style={{
                  borderRadius: '0.5rem',
                  width: '100%',
                  height: '100%'
                }}
                formats={['auto', 'webp', 'avif']}
                quality={85}
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box py={20} bg={bgColor}>
        <Container maxW={'7xl'}>
          <Stack
            spacing={8}
            align="center"
            textAlign="center"
            maxW={'3xl'}
            mx="auto"
          >
            <Heading as="h2" size="xl" color={headingColor}>
              Vydejme se spolu na cestu
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
                to="/services"
                variant="ctaOutline"
                rightIcon={<FaArrowRight />}
              >
                Moje služby
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Layout>
  )
}

export default About 