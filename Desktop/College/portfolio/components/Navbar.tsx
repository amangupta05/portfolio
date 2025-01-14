'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Flex,
  Button,
  HStack,
  IconButton,
  VStack,
  Collapse,
  useDisclosure,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const NavItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'highlights' },
]

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    if (isOpen) onToggle()
  }

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      transition="all 0.3s ease"
      bg={scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent'}
      backdropFilter={scrolled ? 'blur(10px)' : 'none'}
      boxShadow={scrolled ? '0 2px 10px rgba(0, 0, 0, 0.3)' : 'none'}
    >
      <Flex
        minH="60px"
        py={2}
        px={4}
        align="center"
        maxW="container.xl"
        mx="auto"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant="ghost"
            color="white"
            aria-label="Toggle Navigation"
            _hover={{ bg: 'whiteAlpha.200' }}
          />
        </Flex>

        <Text
          textAlign={{ base: 'center', md: 'left' }}
          fontWeight="bold"
          fontSize="xl"
          flex={{ base: 1, md: 'none' }}
          color="brand.electricBlue"
        >
          AG
        </Text>

        <HStack
          flex={{ base: 'none', md: 1 }}
          justify="center"
          spacing={8}
          display={{ base: 'none', md: 'flex' }}
        >
          {NavItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              color="white"
              onClick={() => scrollToSection(item.id)}
              _hover={{
                bg: 'whiteAlpha.200',
                color: 'brand.electricBlue',
                transform: 'translateY(-2px)',
              }}
              transition="all 0.3s ease"
            >
              {item.name}
            </Button>
          ))}
        </HStack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box bg="blackAlpha.900" p={4} display={{ md: 'none' }}>
          <VStack spacing={4}>
            {NavItems.map((item) => (
              <Button
                key={item.id}
                w="full"
                variant="ghost"
                color="white"
                onClick={() => scrollToSection(item.id)}
                _hover={{
                  bg: 'whiteAlpha.200',
                  color: 'brand.electricBlue',
                }}
              >
                {item.name}
              </Button>
            ))}
          </VStack>
        </Box>
      </Collapse>
    </Box>
  )
} 