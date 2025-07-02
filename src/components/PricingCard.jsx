import React from 'react'
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Icon,
  Flex,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import OptimizedImage from './OptimizedImage'

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
        <OptimizedImage
          src={image}
          alt={title}
          objectFit="cover"
          width="100%"
          height="100%"
          style={{
            filter: 'brightness(1.1)',
          }}
        />
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
        <List spacing={4} mb={8}>
          {features.map((feature, idx) => (
            <ListItem key={idx} display="flex" alignItems="center" gap={3}>
              <Icon as={CheckCircleIcon} color="green.400" boxSize={5} />
              <Text color={textColor}>{feature}</Text>
            </ListItem>
          ))}
        </List>
        <Button
          as="a"
          href="/calendar"
          variant="card"
        >
          Objednat sezení
        </Button>
      </Box>
    </Box>
  )
} 