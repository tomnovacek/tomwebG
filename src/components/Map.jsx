import React from 'react'
import { Box, Link, Text } from '@chakra-ui/react'

// Google Business Profile listing (resolved from maps.app.goo.gl link)
const GOOGLE_MAPS_PROFILE =
  'https://www.google.com/maps/place/Mgr.+Ing.+Tom%C3%A1%C5%A1+Nov%C3%A1%C4%8Dek+-+psycholog+a+terapeut/@49.1956648,16.6099472,17z/data=!4m6!3m5!1s0x471295d6e35ec40f:0x40a3ee641541c87e!8m2!3d49.1956648!4d16.6125275!16s%2Fg%2F11tbl4lhc1'

// Opens turn-by-turn navigation in Google Maps
const GOOGLE_MAPS_NAVIGATE =
  'https://www.google.com/maps/dir/?api=1&destination=49.1956648,16.6125275'

// Embed copied from Google Maps Share → Embed (business listing, not just address)
const GOOGLE_MAPS_EMBED =
  'https://maps.app.goo.gl/pG8Ca8TBSGkpzon96'

export default function Map() {
  return (
    <Box width="100%" maxWidth="600px">
      <Box
        width="100%"
        height="250px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        position="relative"
        bg="gray.100"
      >
        <Box
          as="iframe"
          title="Mapa - Mgr. Ing. Tomáš Nováček, Sukova 4, Brno"
          src={GOOGLE_MAPS_EMBED}
          width="100%"
          height="100%"
          border="0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
      <Text textAlign="center" mt={3} fontSize="sm">
        <Link
          href={GOOGLE_MAPS_NAVIGATE}
          target="_blank"
          rel="noopener noreferrer"
          color="green.600"
          fontWeight="medium"
          _hover={{ textDecoration: 'underline' }}
        >
          Navigovat sem
        </Link>
        {' · '}
        <Link
          href={GOOGLE_MAPS_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          color="green.600"
          _hover={{ textDecoration: 'underline' }}
        >
          Profil v Google Maps
        </Link>
      </Text>
    </Box>
  )
}
