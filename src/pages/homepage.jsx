import React from 'react'
import { graphql } from 'gatsby'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Flex,
  VStack,
  Link,
  Icon,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { FaUser, FaUserFriends, FaHeartbeat, FaHandHoldingHeart, FaCalendarAlt, FaArrowRight } from 'react-icons/fa'
import { Link as GatsbyLink } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import AboutCard from '../components/AboutCard'
import AnalyticsButton from '../components/AnalyticsButton'
import StructuredData from '../components/StructuredData'
import BlogCard from '../components/BlogCard'
import HeroTextBox from '../components/HeroTextBox'

export default function Home({ data }) {
  // Process the blog posts data
  const newestPosts = React.useMemo(() => {
    if (!data?.allMdx?.nodes) {
      return []
    }
    
    // Function to generate slug from file path
    const generateSlug = (internal) => {
      if (internal?.contentFilePath) {
        const pathParts = internal.contentFilePath.split('/')
        const fileName = pathParts[pathParts.length - 1]
        return fileName.replace('.mdx', '')
      }
      return ''
    }
    
    const processedPosts = data.allMdx.nodes
      .map(node => ({
        ...node,
        slug: generateSlug(node.internal),
        frontmatter: {
          ...node.frontmatter,
          slug: generateSlug(node.internal)
        }
      }))
      .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      .slice(0, 3) // Get only the 3 most recent posts
    
    return processedPosts
  }, [data?.allMdx?.nodes])

  // Get all images data safely
  const allImages = data?.allFile?.nodes || []

  // Hookd
  const bgColor = useColorModeValue('gray.100', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('green.500', 'gray.200')

  return (
    <>
      <SEO 
        title="Psychoterapie v centru Brna | Tomáš Nováček"
        description="Psycholog a terapeut Tomáš Nováček nabízí psychoterapii v centru Brna. Pomáhám lidem překonávat životní výzvy a dosahovat osobního růstu."
        image="/img/forrest.webp"
        article={false}
      >
        {/* Preload critical hero images for LCP optimization */}
        <link 
          rel="preload" 
          as="image" 
          href="/img/forrest.webp" 
          fetchpriority="high"
          type="image/webp"
        />
        <link 
          rel="preload" 
          as="image" 
          href="/img/tom1.png" 
          fetchpriority="high"
          type="image/png"
        />
        
        {/* Image structured data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Psychoterapie v centru Brna | Tomáš Nováček",
            "description": "Psycholog a terapeut Tomáš Nováček nabízí psychoterapii v centru Brna. Pomáhám lidem překonávat životní výzvy a dosahovat osobního růstu.",
            "image": {
              "@type": "ImageObject",
              "url": "/img/forrest.webp",
              "width": 1200,
              "height": 630,
              "alt": "Lesní cesta - klidné prostředí pro psychoterapii"
            },
            "mainEntity": {
              "@type": "Person",
              "name": "Tomáš Nováček",
              "jobTitle": "Psycholog a terapeut",
              "image": {
                "@type": "ImageObject",
                "url": "/img/tom1.png",
                "width": 600,
                "height": 800,
                "alt": "Tomáš Nováček - psycholog a terapeut"
              }
            }
          })}
        </script>
      </SEO>
      <StructuredData type="MedicalBusiness" />
      <StructuredData type="Person" />

      {/* Hero Section */}
      <Box position="relative" width="100%" height={{ base: "auto", md: "75vh" }} overflow="hidden" className="hero-section">
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
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 0,
            }}
            loading="eager"
            priority={true}
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
            justify="center"
            align="center"
            direction={{ base: 'column', md: 'row' }}
            gap={8}
            pt={{ base: 10, md: 28 }}
            mt={{ base: 0, md: 0 }}
          >
            {/* Text Box */}
            <HeroTextBox
              title="Psychoterapie"
              titleAccent="v centru Brna"
              description="Vítejte, jmenuji se Tomáš Nováček. Doprovázím lidi při překonvání jejich životních výchev. Snažím se, aby se na tomto putování cítili bezpečně a našli v sobě schopnost zahlédnout světlo nadějě prosvítající i potemnělým lesem."
              primaryText="Objednat konzultaci"
              primaryHref="/calendar"
              secondaryText="Moje služby"
              secondaryHref="/services"
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
                {/* Portrait image using StaticImage for optimized image */}
                <StaticImage
                  src="../../static/img/tom1.png"
                  alt="Tomáš Nováček - psycholog a terapeut v centru Brna"
                  placeholder="blurred"
                  layout="fullWidth"
                  width={600}
                  height={800}
                  quality={90}
                  style={{
                    mixBlendMode: 'normal',
                    backgroundColor: 'transparent',
                    filter: 'brightness(1.1)',
                    height: 'auto',
                    width: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center'
                  }}
                  loading="eager"
                />
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* About Section */}
      <Box py={20} bg={cardBg} position="relative" zIndex={2}>
        <Container maxW={'7xl'} centerContent>
          <Stack spacing={4} maxW={'6xl'} textAlign={'center'} mb={10}>
            <Heading as="h2" variant="section" color={headingColor}>
              <Text as={'span'} position={'relative'}>
                O mně
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Jsem psycholog a terapeut s multioborovým vzděláním a zkušenostmi v doprovázení lidí překonávajících své životní výzvy. Znalosti a perspektivy z různých profesních oblastí mi pomáhají pochopit klientovu situaci a následně společně rozšiřovat obzory o perspektivy, které mohou přinášet větší svobodu při hledání cesty vpřed.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} w="full">
            <AboutCard
              title="Moje praxe"
              description={
                <>
                  Posledních sedm let se intenzivně věnuji psychologickému poradenství a čtyři roky praktikuji terapii v soukromé praxi v centru Brna. Vystudoval jsem jednooborovou psychologii a absolvoval dvouletý výcvik v koučování, následně šestiletý výcvik v{' '}
                  <Link href="https://www.psychoterapie-integrace.cz" isExternal color="grey.400">
                    integrativní psychoterapii
                  </Link>
                  . Jsem řádným členem{' '}
                  <Link href="https://www.czap.cz/" isExternal color="grey.400">
                    České asociace pro psychoterapii
                  </Link>
                  {' '}- komunity, která klade důraz na etické standardy a vysokou kvalifikaci v oboru psychoterapie. Jinými slovy, snažím pracovat poctivě a stále se učit.
                </>
              }
              image="room.jpeg"
              imageAlt="Terapeutická místnost"
              icon={FaUser}
              buttonText="Více o mně"
              buttonHref="/about"
              textColor={textColor}
            />
            <AboutCard
              title="Můj přístup"
              description="Věřím, že všichni máme vnitřní zdroje k zvládání životních výzev, které se před námi objevují. Mohou se však objevit situace, ve kterých se můžeme cítit uvězněni nebo bezmocní. V takových chvílích  podporuji klienty v pochopení jejich problémů a hledání efektivních způsobů, jak je překonat. Společně prozkoumáváme jejich osobní cestu k sebepoznání a odhalujeme vnitřní síly, které jim mohou pomoci žít plnější a spokojenější život. Nemám všechny odpovědi, pomůžu vám najít ty vaše."
              image="mountinHikeGroup.jpg"
              imageAlt="Skupina lidí na horách"
              icon={FaHandHoldingHeart}
              buttonText="Moje služby"
              buttonHref="/services"
              textColor={textColor}
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={20} bg={bgColor}>
        <Container maxW={'7xl'} centerContent>
          <Stack spacing={4} maxW={'6xl'} textAlign={'center'} mb={10}>
            <Heading as="h2" variant="section" color={headingColor}>
              <Text as={'span'} position={'relative'} zIndex={1}>
                S čím vám mohu pomoci
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Lidé za mnou přicházejí s nejrůznějšími tématy, ale nejčastěji se bavíme o vztazích (k sobě i k druhým), úzkosti, pokleslé náladě a&nbsp;o&nbsp;tom, jak najít klid ve shonu každodenního života.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
            {[
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
                icon: FaUserFriends,
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
                icon: FaHeartbeat,
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
            ].map((service, index) => (
              <Box
                key={index}
                bg={cardBg}
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
                    <List spacing={2}>
                      {service.features.map((feature, idx) => (
                        <ListItem key={idx} color={textColor}>
                          <ListIcon as={CheckCircleIcon} color="green.400" />
                          {feature}
                        </ListItem>
                      ))}
                    </List>
                  </Stack>
                </Box>
              </Box>
            ))}
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

      {/* Latest Posts Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW="container.xl">
          <VStack spacing={12} align="stretch">
            <Box textAlign="center">
              <Heading as="h2" variant="section">
                Z mého bloku
              </Heading>
              <Text fontSize="xl" color="gray.600">
                Píšu si poznámky – pro sebe, pro práci, pro život. Po čase jsem zjistil, že některé z nich mohou být užitečné i pro ostatní. Nejsou to vědecké články ani návody na štěstí, spíš takové mapy terénu, který znám z vlastní zkušenosti i z práce s klienty.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {newestPosts.map(post => (
                <BlogCard key={post.slug} post={post} allImages={allImages} />
              ))}
            </SimpleGrid>

            <Box textAlign="center">
              <AnalyticsButton
                as={GatsbyLink}
                to="/blog"
                variant="outline"
                buttonName="blog_button"
                location="home_blog_section"
              >
                Více článků
              </AnalyticsButton>
            </Box>
          </VStack>
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
            <Heading as="h2" variant="section" color={headingColor}>
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
              <AnalyticsButton
                as={GatsbyLink}
                to="/calendar"
                variant="cta"
                leftIcon={<FaCalendarAlt />}
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
}

export const pageQuery = graphql`
  query HomePageQuery {
    allMdx(
      filter: { frontmatter: { status: { eq: "published" } } }
      sort: { frontmatter: { date: DESC } }
      limit: 6
    ) {
      nodes {
        id
        frontmatter {
          title
          date
          readTime
          excerpt
          tags
          image
          author {
            name
            image
            role
          }
          status
        }
        internal {
          contentFilePath
        }
        fields {
          imageRelativePath
        }
      }
    }
    allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(width: 400, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
` 