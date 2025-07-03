import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'
import { FaLeaf, FaUser, FaUserFriends, FaHeartbeat, FaPeopleGroup, FaExchangeAlt } from 'react-icons/fa'

export default function ServicesGrid() {
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('green.500', 'gray.200')
  const cardBg = useColorModeValue('white', 'gray.800')

  return (
    <Box py={20} bg={useColorModeValue('white', 'gray.900')}>
      <Container maxW={'7xl'}>
        <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mb={8} mx="auto">
          <Heading variant="section" color={headingColor}>
            Nejčastější témata
          </Heading>
          <Text color={textColor} fontSize={'xl'}>
            S klienty se nejčastěji věnujeme následujícím otázkám:
          </Text>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {/* Osobní rozvoj */}
          <Box bg={cardBg} boxShadow={'xl'} rounded={'xl'} p={6} display="flex" alignItems="center" gap={6}>
            <Box flexShrink={0} width={{ base: '100%', md: '120px' }}>
              <StaticImage src="../assets/img/safe-space.webp" alt="Osobní rozvoj" placeholder="blurred" layout="constrained" width={120} height={90} style={{ width: '100%', height: '90px', objectFit: 'cover', borderRadius: '8px' }} loading="lazy" />
            </Box>
            <Box flex={1}>
              <Stack direction="row" align="center" spacing={2} mb={2}>
                <Box as={FaLeaf} color={headingColor} boxSize={6} />
                <Heading fontSize={'xl'} color={headingColor}>Osobní rozvoj</Heading>
              </Stack>
              <Text color={textColor} fontSize={'md'}>Když se chcete posunout dál a je složité překonat překážky, které vám stojí v cestě.</Text>
            </Box>
          </Box>
          {/* Sebevědomí a vztah k sobě */}
          <Box bg={cardBg} boxShadow={'xl'} rounded={'xl'} p={6} display="flex" alignItems="center" gap={6}>
            <Box flexShrink={0} width={{ base: '100%', md: '120px' }}>
              <StaticImage src="../assets/img/healing-space.webp" alt="Sebevědomí a vztah k sobě" placeholder="blurred" layout="constrained" width={120} height={90} style={{ width: '100%', height: '90px', objectFit: 'cover', borderRadius: '8px' }} loading="lazy" />
            </Box>
            <Box flex={1}>
              <Stack direction="row" align="center" spacing={2} mb={2}>
                <Box as={FaUser} color={headingColor} boxSize={6} />
                <Heading fontSize={'xl'} color={headingColor}>Sebevědomí a vztah k sobě</Heading>
              </Stack>
              <Text color={textColor} fontSize={'md'}>Co stojí za nedostatkem sebevědomí. Jak zlepšit vztah k sobě a svému životu.</Text>
            </Box>
          </Box>
          {/* Úzkost a deprese */}
          <Box bg={cardBg} boxShadow={'xl'} rounded={'xl'} p={6} display="flex" alignItems="center" gap={6}>
            <Box flexShrink={0} width={{ base: '100%', md: '120px' }}>
              <StaticImage src="../assets/img/stress.webp" alt="Úzkost a deprese" placeholder="blurred" layout="constrained" width={120} height={90} style={{ width: '100%', height: '90px', objectFit: 'cover', borderRadius: '8px' }} loading="lazy" />
            </Box>
            <Box flex={1}>
              <Stack direction="row" align="center" spacing={2} mb={2}>
                <Box as={FaUserFriends} color={headingColor} boxSize={6} />
                <Heading fontSize={'xl'} color={headingColor}>Úzkost a deprese</Heading>
              </Stack>
              <Text color={textColor} fontSize={'md'}>Podpora při zvládání úzkosti a deprese. Rozšiřování reportoáru, jak si s tím poradit.</Text>
            </Box>
          </Box>
          {/* Stres a jeho zvládání */}
          <Box bg={cardBg} boxShadow={'xl'} rounded={'xl'} p={6} display="flex" alignItems="center" gap={6}>
            <Box flexShrink={0} width={{ base: '100%', md: '120px' }}>
              <StaticImage src="../assets/img/safe-embrace.jpg" alt="Stres a jeho zvládání" placeholder="blurred" layout="constrained" width={120} height={90} style={{ width: '100%', height: '90px', objectFit: 'cover', borderRadius: '8px' }} loading="lazy" />
            </Box>
            <Box flex={1}>
              <Stack direction="row" align="center" spacing={2} mb={2}>
                <Box as={FaHeartbeat} color={headingColor} boxSize={6} />
                <Heading fontSize={'xl'} color={headingColor}>Stres a jeho zvládání</Heading>
              </Stack>
              <Text color={textColor} fontSize={'md'}>Chápání role stresu ve vašem životě, jak ho ovlivnit a zvládat.</Text>
            </Box>
          </Box>
          {/* Vztahy */}
          <Box bg={cardBg} boxShadow={'xl'} rounded={'xl'} p={6} display="flex" alignItems="center" gap={6}>
            <Box flexShrink={0} width={{ base: '100%', md: '120px' }}>
              <StaticImage src="../assets/img/relationships.webp" alt="Vztahy" placeholder="blurred" layout="constrained" width={120} height={90} style={{ width: '100%', height: '90px', objectFit: 'cover', borderRadius: '8px' }} loading="lazy" />
            </Box>
            <Box flex={1}>
              <Stack direction="row" align="center" spacing={2} mb={2}>
                <Box as={FaPeopleGroup} color={headingColor} boxSize={6} />
                <Heading fontSize={'xl'} color={headingColor}>Vztahy</Heading>
              </Stack>
              <Text color={textColor} fontSize={'md'}>Podpora v budování zdravých a naplňujících vztahů. Vztahy s dětmi, partnery, přáteli, kolegy.</Text>
            </Box>
          </Box>
          {/* Zpracování složitých životních situací */}
          <Box bg={cardBg} boxShadow={'xl'} rounded={'xl'} p={6} display="flex" alignItems="center" gap={6}>
            <Box flexShrink={0} width={{ base: '100%', md: '120px' }}>
              <StaticImage src="../assets/img/family.webp" alt="Zpracování složitých životních situací" placeholder="blurred" layout="constrained" width={120} height={90} style={{ width: '100%', height: '90px', objectFit: 'cover', borderRadius: '8px' }} loading="lazy" />
            </Box>
            <Box flex={1}>
              <Stack direction="row" align="center" spacing={2} mb={2}>
                <Box as={FaExchangeAlt} color={headingColor} boxSize={6} />
                <Heading fontSize={'xl'} color={headingColor}>Zpracování složitých životních situací</Heading>
              </Stack>
              <Text color={textColor} fontSize={'md'}>Bezpečný prostor pro zpracování těžkých životních zkušeností.</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
} 