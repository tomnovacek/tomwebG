import React, { useState, useEffect, useRef } from 'react'
import { Box, Text, Link } from '@chakra-ui/react'

// Přesné souřadnice pro Sukova 4, Brno
const LAT = 49.195639166019745;
const LNG = 16.61257329325352;
// Google Static Maps API klíč níže
const API_KEY = 'AIzaSyAyROAkqASp8ZcxlYmY3PaCRgobpgvl7Hs';

const STATIC_MAP_URL =
  `https://maps.googleapis.com/maps/api/staticmap?center=${LAT},${LNG}` +
  `&zoom=16&size=600x250&maptype=roadmap` +
  `&markers=color:red|label:T|${LAT},${LNG}` +
  `&key=${API_KEY}`;

const GOOGLE_MAPS_LINK =
  'https://maps.app.goo.gl/vAm4TABGDnFNtMTQ7';

export default function Map() {
  const [isVisible, setIsVisible] = useState(false)
  const mapRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '200px',
        threshold: 0.1
      }
    )

    if (mapRef.current) {
      observer.observe(mapRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <Box
      ref={mapRef}
      width="100%"
      minWidth="350px"
      maxWidth="600px"
      height="250px"
      minHeight="250px"
      maxHeight="250px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      position="relative"
      bg="gray.100"
    >
      {!isVisible && (
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="gray.100"
          zIndex={1}
        >
          <Text color="gray.500">Načítání mapy...</Text>
        </Box>
      )}
      {isVisible && (
        <Link href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" display="block" width="100%" height="100%">
          <img
            src={STATIC_MAP_URL}
            alt="Mapa - Sukova 4, Brno"
            width="600"
            height="250"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            loading="lazy"
          />
        </Link>
      )}
    </Box>
  )
} 