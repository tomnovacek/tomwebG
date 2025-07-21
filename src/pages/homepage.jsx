import React, { useMemo, useCallback } from 'react'
import { graphql } from 'gatsby'
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Stack,
  useColorModeValue,
  Flex,
  Icon,
  VStack,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { FaCheck, FaArrowRight, FaCalendar, FaUser, FaHeart, FaUsers, FaHandshake } from 'react-icons/fa'
import BlogCard from '../components/BlogCard'
import AnalyticsButton from '../components/AnalyticsButton'
import AboutCard from '../components/AboutCard'
import HeroTextBox from '../components/HeroTextBox'

const HomePage = React.memo(({ data }) => {
  const { allMdx, allFile } = data
  
  // Get all images data safely
  const allImages = allFile?.nodes || []
  
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

  // Move all useColorModeValue calls to the top level
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const headingColor = useColorModeValue('gray.800', 'white')
  const aboutBgColor = useColorModeValue('white', 'gray.900')
  const servicesBgColor = useColorModeValue('gray.50', 'gray.900')
  const ctaBgColor = useColorModeValue('gray.50', 'gray.900')
  const aboutTextColor = useColorModeValue('gray.600', 'gray.400')
  const servicesTextColor = useColorModeValue('gray.600', 'gray.400')
  const ctaTextColor = useColorModeValue('gray.600', 'gray.400')
  const blogBgColor = useColorModeValue('white', 'gray.900')
  const blogTextColor = useColorModeValue('gray.600', 'gray.400')

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
            backdropFilter="blur(2x)"
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
                description="Vítejte, jmenuji se Tomáš Nováček. Doprovázím lidi při překonávaní jejich životních výchev. Snažím se, aby se na tomto putování cítili bezpečně a našli v sobě schopnost zahlédnout světlo nadějě prosvítající i potemnělým lesem."
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
                formats={['auto', 'webp', 'avif']}
                style={{
                  mixBlendMode: 'normal',
                  backgroundColor: 'transparent',
                  filter: 'brightness(1.1)',
                  maxWidth: '100%',
                  height: 'auto'
                }}
                loading="eager"
                priority="true"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* About Section */}
      <Box as="section" py={20} bg={aboutBgColor} position="relative" zIndex={2}>
        <Container maxW={'7xl'} centerContent>
          <Stack spacing={4} maxW={'6xl'} textAlign={'center'} mb={10}>
            <Heading as="h2" variant="section">
              <Text as={'span'} position={'relative'}>
                O mně
              </Text>
            </Heading>
            <Text color={aboutTextColor} fontSize={'xl'}>
              Jsem psycholog a terapeut s multioborovým vzděláním a zkušenostmi v doprovázení lidí překonávajících své životní výzvy. Znalosti a perspektivy z různých profesních oblastí mi pomáhají pochopit klientovu situaci a následně společně rozšiřovat obzory o perspektivy, které mohou přinášet větší svobodu při hledání cesty vpřed.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} w="full">
            <AboutCard
              title="Moje praxe"
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
              textColor={aboutTextColor}
            />
            <AboutCard
              title="Můj přístup"
              description="Věřím, že všichni máme vnitřní zdroje k zvládání životních výzev, které se před námi objevují. Mohou se však objevit situace, ve kterých se můžeme cítit uvězněni nebo bezmocní. V takových chvílích  podporuji klienty v pochopení jejich problémů a hledání efektivních způsobů, jak je překonat. Společně prozkoumáváme jejich osobní cestu k sebepoznání a odhalujeme vnitřní síly, které jim mohou pomoci žít plnější a spokojenější život. Nemám všechny odpovědi, pomůžu vám najít ty vaše."
              image="mountinHikeGroup.jpg"
              imageAlt="Skupina lidí na horách"
              icon={FaHandshake}
              buttonText="Moje služby"
              buttonHref="/services/"
              textColor={aboutTextColor}
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box as="section" py={20} bg={servicesBgColor}>
        <Container maxW={'7xl'} centerContent>
          <Stack spacing={4} maxW={'6xl'} textAlign={'center'} mb={10}>
            <Heading as="h2" variant="section">
              <Text as={'span'} position={'relative'} zIndex={1}>
                S čím vám mohu pomoci
              </Text>
            </Heading>
            <Text color={servicesTextColor} fontSize={'xl'}>
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
            )), [servicesData, bgColor, headingColor, textColor])}
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
                Z mého bloku
              </Heading>
              <Text
                fontSize="lg"
                color={blogTextColor}
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
                <BlogCard key={post.id} post={post} allImages={allImages} />
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

      {/* Call to Action Section */}
      <Box as="section" py={20} bg={ctaBgColor}>
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
            <Text color={ctaTextColor} fontSize={'xl'} maxW={'2xl'}>
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
            childImageSharp {
              gatsbyImageData(width: 400, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
            publicURL
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
    allFile(filter: {sourceInstanceName: {eq: "assets"}}) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(width: 400, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`