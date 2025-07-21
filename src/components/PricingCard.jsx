import React from 'react'
import {
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
  Flex,
  Icon,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { StaticImage } from 'gatsby-plugin-image'

export default function PricingCard({
  title,
  price,
  duration,
  description,
  features,
  icon: IconComponent,
  image,
  popular,
}) {
  const textColor = useColorModeValue('gray.700', 'gray.300')

  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'xl'}
      rounded={'2xl'}
      position="relative"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: '2xl',
      }}
      overflow="hidden"
    >
      {popular && (
        <Box
          position="absolute"
          top={0}
          right={0}
          bg="green.400"
          color="white"
          px={4}
          py={1}
          fontSize="sm"
          fontWeight="bold"
          borderBottomLeftRadius="lg"
        >
          Nejpopulárnější
        </Box>
      )}
      <Box
        position="relative"
        height="260px"
        overflow="hidden"
      >
        {(() => {
          switch (image) {
            case 'room.jpeg':
              return (
                <StaticImage
                  src="../assets/img/room.jpeg"
                  alt={title}
                  placeholder="blurred"
                  layout="constrained"
                  width={400}
                  height={200}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  loading="lazy"
                  formats={['auto', 'webp', 'avif']}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  breakpoints={[300, 400, 600, 800]}
                />
              )
            case 'laptop2.jpg':
              return (
                <StaticImage
                  src="../assets/img/laptop2.jpg"
                  alt={title}
                  placeholder="blurred"
                  layout="constrained"
                  width={400}
                  height={200}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  loading="lazy"
                  formats={['auto', 'webp', 'avif']}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  breakpoints={[300, 400, 600, 800]}
                />
              )
            case 'family.webp':
              return (
                <StaticImage
                  src="../assets/img/family.webp"
                  alt={title}
                  placeholder="blurred"
                  layout="constrained"
                  width={400}
                  height={200}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  loading="lazy"
                  formats={['auto', 'webp', 'avif']}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  breakpoints={[300, 400, 600, 800]}
                />
              )
            default:
              return (
                <Box
                  bg="gray.200"
                  width="100%"
                  height="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text color="gray.500" fontSize="sm">
                    {title}
                  </Text>
                </Box>
              )
          }
        })()}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.100"
        />
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          p={6}
          bg="linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
        >
          <Flex align="center" gap={3}>
            <Icon as={IconComponent} w={8} h={8} color="white" />
            <Heading fontSize={'2xl'} color="white">{title}</Heading>
          </Flex>
        </Box>
      </Box>
      <Box p={8}>
        <Box textAlign="center" mb={6}>
          <Text fontSize={'4xl'} fontWeight="bold" color="green.400">
            {price}
          </Text>
          <Text fontSize={'sm'} color={textColor}>
            /{duration}
          </Text>
        </Box>
        <Text color={textColor} mb={6} textAlign="center">
          {description}
        </Text>
        <Box as="ul" spacing={4} mb={8}>
          {features.map((feature, idx) => (
            <Box as="li" key={idx} display="flex" alignItems="center" gap={3}>
              <Icon as={CheckCircleIcon} color="green.400" />
              <Text>{feature}</Text>
            </Box>
          ))}
        </Box>
        <Button
          as="a"
          href="/calendar/"
          variant="card"
        >
          Objednat sezení
        </Button>
      </Box>
    </Box>
  )
} 