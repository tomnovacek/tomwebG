import React, { useMemo, useCallback, useState } from 'react'
import { graphql } from 'gatsby'
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Stack,
  Flex,
  Icon,
  VStack,
  Link as ChakraLink,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { FaCheck, FaArrowRight, FaCalendar, FaUser, FaHeart, FaUsers, FaHandshake, FaEnvelope } from 'react-icons/fa'
import BlogCard from '../components/BlogCard'
import AnalyticsButton from '../components/AnalyticsButton'
import AboutCard from '../components/AboutCard'
import HeroTextBox from '../components/HeroTextBox'

const HomePage = React.memo(({ data }) => {
  const { allMdx } = data
  
  const generateSlug = useCallback((internal, id) => {
    if (internal?.contentFilePath) {
      const pathParts = internal.contentFilePath.split('/')
      const fileName = pathParts[pathParts.length - 1]
      // Remove both .md and .mdx extensions
      return fileName.replace(/\.(md|mdx)$/, '')
    }
    // Fallback to using the post ID if contentFilePath is null
    return id ? id.split('-').pop() : 'post'
  }, [])

  const newestPosts = useMemo(() => {
    return allMdx.nodes.slice(0, 3).map(post => ({
      ...post,
      slug: generateSlug(post.internal, post.id),
      frontmatter: {
        ...post.frontmatter,
        slug: generateSlug(post.internal, post.id)
      }
    }))
  }, [allMdx.nodes, generateSlug])

  // Static color values (light mode only)
  const bgColor = 'white'
  const textColor = 'gray.600'
  const headingColor = 'gray.800'
  const servicesBgColor = 'gray.50'
  const blogBgColor = 'white'

  // Debug logging - removed for TBT optimization
  // console.log('Homepage - newestPosts:', newestPosts)
  // newestPosts.forEach(post => {
  //   console.log(`Homepage Post ${post.frontmatter.title}:`, {
  //     image: post.frontmatter.image,
  //     hasImage: !!post.frontmatter.image
  //   })
  // })

  // Memoize services data
  const servicesData = useMemo(() => [
    {
      icon: FaUser,
      title: 'Osobní potíže',
      description: 'Individuální terapie',
      features: [
        'Úzkost a deprese',
        'Výkyvy nálady',
        'Nároky na sebe',
        'Sebevědomí',
        'Vztah k sobě'
      ]
    },
    {
      icon: FaUsers,
      title: 'Vztahy a vztahové problémy',
      description: 'Porozumění a řešení vztahových potíží.',
      features: [
        'Potřeby ve vztazích',
        'Komunikační problémy',
        'Upřednostňování druhých',
        'Mezigenerační vztahy',
        'Intimita a vztahové potíže'
      ]
    },
    {
      icon: FaHeart,
      title: 'Zvládání stresu',
      description: 'Strategie zvládání stresu.',
      features: [
        'Zdravotní potíže',
        'Životní změny',
        'Traumatické zkušenosti',
        'Strategie zvládání',
        'Balancování práce a osobního života'
      ]
    }
  ], [])

  return (
    <>
      <Box as="main" position="relative" width="100%" height={{ base: "auto", md: "75vh" }} overflow="hidden" className="hero-section">
        {/* Background Image */}
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex={0}
          className="hero-background"
        >
          {/* Use StaticImage for optimized forrest background */}
          <StaticImage
            src="../assets/img/forrest.webp"
            alt="Lesní cesta - klidné prostředí pro psychoterapii v centru Brna"
            placeholder="blurred"
            layout="fullWidth"
            objectFit="cover"
            objectPosition="center"
            quality={85}
            formats={['auto', 'webp', 'avif']}
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 0,
            }}
            loading="eager"
            sizes="100vw"
            breakpoints={[400, 768, 1200, 1920]}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            backdropFilter="blur(2px)"
          />
        </Box>

        {/* Content Container */}
        <Container maxW="7xl" height="100%" position="relative" zIndex={1} className="hero-content">
          <Flex
            height="100%"
            align="flex-end"
            justify="center"
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: 6, md: 8 }}
            pt={{ base: 10, md: 28 }}
            mt={{ base: 0, md: 0 }}
          >
            {/* Text Box */}
            <Box
              display="flex"
              justifyContent="center"
              flex={{ base: "1", md: "1" }}
              mb={{ base: 10, md: 10 }}
            >
              <HeroTextBox
                title="Psychoterapie "
                titleAccent="v centru Brna"
                description="Vítejte, jmenuji se Tomáš Nováček. Doprovázím klienty při překonávaní jejich životních výzev. Snažím se vytvářet prostředí, ve kterém se na tomto putování můžou všichni cítit bezpečně a najít v sobě schopnost zahlédnout světlo nadějě prosvítající i potemnělým lesem."
                primaryText="Objednat konzultaci"
                primaryHref="/calendar/"
                secondaryText="Moje služby"
                secondaryHref="/services/"
              />
            </Box>

            {/* Portrait Image */}
            <Box
              display="flex"
              alignItems="flex-end"
              justifyContent="center"
              flex={{ base: "1", md: "1" }}
              py={{ base: 4, md: 0 }}
            >
              <StaticImage
                src="../assets/img/tom1.png"
                alt="Tomáš Nováček - psycholog a terapeut v centru Brna"
                placeholder="blurred"
                layout="constrained"
                width={480}
                height={500}
                quality={90}
                style={{
                  mixBlendMode: 'normal',
                  backgroundColor: 'transparent',
                  filter: 'brightness(1.1)',
                  maxWidth: '100%',
                  height: 'auto'
                }}
                loading="eager"
                formats={['auto', 'webp', 'avif']}
                sizes="(max-width: 768px) 100vw, 50vw"
                breakpoints={[300, 400, 600, 800]}
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* About Section */}
      <Box as="section" py={20} bg="white" position="relative" zIndex={2}>
        <Container maxW={'7xl'} centerContent>
          <Stack spacing={4} maxW={'2xl'} textAlign={'center'} mb={10}>
            <Heading as="h2" variant="section">
              <Text as={'span'} position={'relative'}>
                Tomáš Nováček - psycholog a terapeut
              </Text>
            </Heading>
                          <Text color="gray.600" fontSize={'xl'}>
              Mám multioborové vzdělání a zkušenosti v doprovázení lidí překonávajících své životní výzvy. Znalosti a perspektivy z různých profesních oblastí mi pomáhají pochopit klientovu situaci a následně společně rozšiřovat obzory o perspektivy, které mohou přinášet větší svobodu při hledání cesty vpřed.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} w="full">
            <AboutCard
              title="Soukromá praxe v centru Brna"
              description={
                <>
                  Posledních sedm let se intenzivně věnuji psychologickému poradenství a čtyři roky praktikuji terapii v soukromé praxi v centru Brna. Vystudoval jsem jednooborovou psychologii a absolvoval dvouletý výcvik v koučování, následně šestiletý výcvik v{' '}
                  <ChakraLink href="https://www.psychoterapie-integrace.cz" isExternal color="grey.400">
                    integrativní psychoterapii
                  </ChakraLink>
                  . Jsem řádným členem{' '}
                  <ChakraLink href="https://www.czap.cz/" isExternal color="grey.400">
                    České asociace pro psychoterapii
                  </ChakraLink>
                  {' '}- komunity, která klade důraz na etické standardy a vysokou kvalifikaci v oboru psychoterapie. Jinými slovy, snažím pracovat poctivě a stále se učit.
                </>
              }
              image="room.jpeg"
              imageAlt="Terapeutická místnost"
              icon={FaUser}
              buttonText="Více o mně"
              buttonHref="/about/"
              textColor="gray.600"
            />
            <AboutCard
              title="Můj terapeutický přístup"
              description="Věřím, že všichni máme vnitřní zdroje k zvládání životních výzev, které se před námi objevují. Mohou se však objevit situace, ve kterých se můžeme cítit uvězněni nebo bezmocní. V takových chvílích  podporuji klienty v pochopení jejich problémů a hledání efektivních způsobů, jak je překonat. Společně prozkoumáváme jejich osobní cestu k sebepoznání a odhalujeme vnitřní síly, které jim mohou pomoci žít plnější a spokojenější život. Nemám všechny odpovědi, pomůžu vám najít ty vaše."
              image="mountinHikeGroup.jpg"
              imageAlt="Skupina lidí na horách"
              icon={FaHandshake}
              buttonText="Moje služby"
              buttonHref="/services/"
              textColor="gray.600"
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box as="section" py={20} bg={servicesBgColor}>
        <Container maxW={'7xl'} centerContent>
          <Stack spacing={4} maxW={'2xl'} textAlign={'center'} mb={10}>
            <Heading as="h2" variant="section">
              <Text as={'span'} position={'relative'} zIndex={1}>
                Komu by terapie mohla být užitečná
              </Text>
            </Heading>
            <Text color="gray.600" fontSize={'xl'}>
              Lidé za mnou přicházejí s nejrůznějšími tématy, ale nejčastěji se bavíme o vztazích (k sobě i k druhým), úzkosti, pokleslé náladě a&nbsp;o&nbsp;tom, jak najít klid ve shonu každodenního života.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
            {useMemo(() => servicesData.map((service, index) => (
              <Box
                key={index}
                bg={bgColor}
                boxShadow={'2xl'}
                rounded={'xl'}
                overflow={'hidden'}
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '2xl',
                }}
              >
                <Box p={6}>
                  <Stack spacing={4}>
                    <Icon
                      as={service.icon}
                      w={10}
                      h={10}
                      color="green.400"
                      mb={2}
                    />
                    <Heading
                      as="h3"
                      color={headingColor}
                      fontSize={'2xl'}
                      fontFamily={'body'}
                    >
                      {service.title}
                    </Heading>
                    <Text color={textColor} mb={4}>
                      {service.description}
                    </Text>
                    <Box as="ul" spacing={2}>
                      {service.features.map((feature, idx) => (
                        <Box as="li" key={idx} color={textColor} display="flex" alignItems="center" gap={2} mb={2}>
                          <Icon as={FaCheck} color="green.400" size="14px" />
                          {feature}
                        </Box>
                      ))}
                    </Box>
                  </Stack>
                </Box>
              </Box>
            )), [servicesData])}
          </SimpleGrid>
          <Stack align={'center'} mt={10}>
            <AnalyticsButton
              as={GatsbyLink}
              to="/services"
              variant="outline"
              buttonName="services_button"
              location="home_services_section"
            >
              Více o službách a podmínkách
            </AnalyticsButton>
          </Stack>
        </Container>
      </Box>

      {/* Latest Blog Posts Section */}
      <Box as="section" py={16} bg={blogBgColor}>
        <Container maxW="container.xl">
          <VStack spacing={12} align="stretch">
            <Box textAlign="center">
              <Heading
                as="h2"
                variant="section"
                size="xl"
                mb={4}
              >
                Z mého terapeutického bloku
              </Heading>
              <Text
                fontSize="lg"
                color="gray.600"
                maxW="2xl"
                mx="auto"
              >
                Píšu si poznámky – pro sebe, pro práci, pro život. Napadlo mě, že některé z nich by mohly být užitečné i pro 
                ostatní. Nejsou to vědecké články ani návody na štěstí, spíš 
                takové mapy terénu, který znám z vlastní zkušenosti i z 
                práce s klienty.
              </Text>
            </Box>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {newestPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </SimpleGrid>
            
            <Box textAlign="center">
              <Button
                as={GatsbyLink}
                to="/blog"
                size="lg"
                colorScheme="green"
                variant="solid"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                Zobrazit všechny články
              </Button>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box as="section" py={20} bg={servicesBgColor}>
        <Container maxW={'7xl'}>
          <VStack spacing={12}>
            <Box textAlign="center" maxW={'3xl'}>
              <Heading as="h2" variant="section" mb={6}>
                Často kladené otázky
              </Heading>
              <Text color={textColor} fontSize={'xl'}>
                Odpovědi na nejčastější otázky o psychoterapii a mém přístupu
              </Text>
            </Box>

            <Box w="full" maxW="4xl">
              <Accordion allowToggle>
                <AccordionItem 
                  border="1px solid" 
                  borderColor="gray.200" 
                  borderRadius="lg" 
                  mb={4}
                  _hover={{ borderColor: "green.400" }}
                  transition="all 0.3s"
                >
                  <AccordionButton 
                    py={6} 
                    px={6}
                    _expanded={{ bg: "green.50", color: "green.600" }}
                    _hover={{ bg: "gray.50" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading as="h3" size="md" color={headingColor}>
                        Jak probíhá první sezení?
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={6} px={6}>
                    <Text color="gray.600" lineHeight="tall">
                      První sezení je úvodní konzultace, kde se seznámíme a povíme si o vašich potížích. 
                      Vysvětlím vám, jak pracuji a co můžete očekávat. Společně se domluvíme na dalším postupu. 
                      Sezení trvá 50 minut a je to bezpečný prostor pro sdílení vašich starostí.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem 
                  border="1px solid" 
                  borderColor="gray.200" 
                  borderRadius="lg" 
                  mb={4}
                  _hover={{ borderColor: "green.400" }}
                  transition="all 0.3s"
                >
                  <AccordionButton 
                    py={6} 
                    px={6}
                    _expanded={{ bg: "green.50", color: "green.600" }}
                    _hover={{ bg: "gray.50" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading as="h3" size="md" color={headingColor}>
                        Jak dlouho trvá terapie?
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={6} px={6}>
                    <Text color="gray.600" lineHeight="tall">
                      Délka terapie je individuální a závisí na vašich potřebách. Někteří klienti potřebují 
                      jen několik sezení, jiní pracujeme dlouhodobě. Domluvíme se podle vašich možností a potřeb.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem 
                  border="1px solid" 
                  borderColor="gray.200" 
                  borderRadius="lg" 
                  mb={4}
                  _hover={{ borderColor: "green.400" }}
                  transition="all 0.3s"
                >
                  <AccordionButton 
                    py={6} 
                    px={6}
                    _expanded={{ bg: "green.50", color: "green.600" }}
                    _hover={{ bg: "gray.50" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading as="h3" size="md" color={headingColor}>
                        Je terapie hrazena pojišťovnou?
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={6} px={6}>
                    <Text color="gray.600" lineHeight="tall">
                      Soukromá psychoterapie není hrazena zdravotními pojišťovnami. Cena za sezení je 1200 Kč 
                      za 50 minut. Většina zdravotních pojišťoven nabízí podpůrné programy, ve kterých můžete 
                      získat na terapii příspěvek.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem 
                  border="1px solid" 
                  borderColor="gray.200" 
                  borderRadius="lg" 
                  mb={4}
                  _hover={{ borderColor: "green.400" }}
                  transition="all 0.3s"
                >
                  <AccordionButton 
                    py={6} 
                    px={6}
                    _expanded={{ bg: "green.50", color: "green.600" }}
                    _hover={{ bg: "gray.50" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading as="h3" size="md" color={headingColor}>
                        Jak často se setkáváme?
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={6} px={6}>
                    <Text color="gray.600" lineHeight="tall">
                      Standardně se setkáváme jednou týdně nebo jednou za 2 týdny, ale frekvence se může přizpůsobit vašim potřebám. 
                      Na začátku je vyšší frekvence a pravidelnost důležitá, později můžeme frekvenci upravit podle a vašich možností.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem 
                  border="1px solid" 
                  borderColor="gray.200" 
                  borderRadius="lg" 
                  mb={4}
                  _hover={{ borderColor: "green.400" }}
                  transition="all 0.3s"
                >
                  <AccordionButton 
                    py={6} 
                    px={6}
                    _expanded={{ bg: "green.50", color: "green.600" }}
                    _hover={{ bg: "gray.50" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading as="h3" size="md" color={headingColor}>
                        Co když se mi nebude dařit mluvit?
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={6} px={6}>
                    <Text color="gray.600" lineHeight="tall">
                      Je normální mít obavy z mluvení o osobních věcech. Snažím se vytvářet bezpečný prostor, kde 
                      můžete mluvit svým tempem. Nemusíte mluvit o všem hned, postupujeme krok za krokem.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem 
                  border="1px solid" 
                  borderColor="gray.200" 
                  borderRadius="lg" 
                  mb={4}
                  _hover={{ borderColor: "green.400" }}
                  transition="all 0.3s"
                >
                  <AccordionButton 
                    py={6} 
                    px={6}
                    _expanded={{ bg: "green.50", color: "green.600" }}
                    _hover={{ bg: "gray.50" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading as="h3" size="md" color={headingColor}>
                        Jaký je rozdíl mezi psychologem a psychoterapeutem?
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={6} px={6}>
                    <Text color="gray.600" lineHeight="tall">
                      Psycholog má magisterské vzdělání v psychologii. Psychoterapeut má navíc dlouhodobý 
                      výcvik v konkrétním terapeutickém směru. Jsem certifikovaný psychoterapeut s 1010 
                      hodinami výcviku v integrativní psychoterapii, což znamená, že kombinuji různé přístupy 
                      podle potřeb klienta.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>

            <Box textAlign="center" pt={8}>
              <Text color={textColor} fontSize="lg" mb={6}>
                Máte další otázky? Neváhejte mě kontaktovat
              </Text>
              <AnalyticsButton
                as="a"
                href="mailto:terapie@tomnovacek.com?subject=Dotaz%20k%20psychoterapii&body=Dobrý%20den,%0A%0A%0A%0AS%20pozdravem%0A"
                variant="cta"
                leftIcon={<FaEnvelope />}
                buttonName="faq_contact_button"
                location="home_faq_section"
                target="_blank"
                rel="noopener noreferrer"
              >
                Napsat email
              </AnalyticsButton>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box as="section" py={20} bg={blogBgColor}>
        <Container maxW={'7xl'}>
          <Stack
            spacing={8}
            align="center"
            textAlign="center"
            maxW={'3xl'}
            mx="auto"
          >
            <Heading as="h2" variant="section">
                Vydejme se spolu na cestu
            </Heading>
            <Text color="gray.600" fontSize={'xl'} maxW={'2xl'}>
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
                leftIcon={<FaCalendar />}
                buttonName="cta_consultation_button"
                location="home_cta_section"
              >
                Objednat konzultaci
              </AnalyticsButton>
              <AnalyticsButton
                as={GatsbyLink}
                to="/services"
                variant="ctaOutline"
                rightIcon={<FaArrowRight />}
                buttonName="cta_services_button"
                location="home_cta_section"
              >
                Moje služby
              </AnalyticsButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  )
})

export default HomePage

export const pageQuery = graphql`
  query HomePageQuery {
    allMdx(
      filter: { frontmatter: { status: { eq: "published" } } }
      sort: { frontmatter: { date: DESC } }
      limit: 3
    ) {
      nodes {
        id
        frontmatter {
          title
          date
          readTime
          excerpt
          tags
          featuredImage {
            publicURL
            childImageSharp {
              gatsbyImageData(width: 400, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          author {
            name
          }
          status
        }
        internal {
          contentFilePath
        }
      }
    }
  }
`