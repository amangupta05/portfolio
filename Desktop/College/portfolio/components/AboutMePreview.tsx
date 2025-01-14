'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import {
  Box,
  Container,
  Flex,
  VStack,
  Heading,
  Text,
  Button,
  useBreakpointValue
} from '@chakra-ui/react'

gsap.registerPlugin(ScrollTrigger)

export default function AboutMePreview() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100',
          end: 'bottom center',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <Box id="about" ref={sectionRef} py={20} bgGradient="linear(to-b, purple.900, black)" w="100%">

      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          gap={8}
        >
          <VStack
            align={{ base: 'center', md: 'flex-start' }}
            w={{ base: '100%', md: '50%' }}
            spacing={4}
          >
            <Box position="relative" w="300px" h="300px">
              <Image
                src="/portfolio/Aman_profile.jpg"
                alt="Aman Gupta"
                fill
                style={{ 
                  borderRadius: '50%',
                  border: '4px solid',
                  borderColor: 'var(--chakra-colors-brand-electricBlue)',
                  boxShadow: '0 0 20px var(--chakra-colors-brand-electricBlue)'
                }}
                objectFit="cover"
              />
            </Box>
          </VStack>
          
          <VStack
            w={{ base: '100%', md: '50%' }}
            align={{ base: 'center', md: 'flex-start' }}
            spacing={6}
          >
            <Heading
              as="h2"
              size="2xl"
              color="brand.neonGreen"
            >
              About Me
            </Heading>
            <Text
              fontSize="lg"
              color="white"
              textAlign={{ base: 'center', md: 'left' }}
            >
              Master's candidate in Machine Learning at Stevens Institute of Technology, combining strong computer science fundamentals with practical experience in AI technologies. Proficient in TensorFlow, PyTorch, and cloud platforms (AWS, Azure), with expertise in building scalable ML models and NLP systems.

              My work spans from implementing multi-modal frameworks and optimizing CNNs to developing AI-powered data pipelines. Notable projects include RAG-powered information retrieval systems and cloud-integrated manufacturing solutions, demonstrating my ability to translate technical expertise into practical business value.

              Focused on leveraging AI and data science to create innovative solutions for complex industry challenges.
            </Text>
            <Button
              colorScheme="cyan"
              size="lg"
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              _hover={{
                bg: 'brand.neonGreen',
                color: 'black',
                transform: 'translateY(-2px)'
              }}
            >
              Learn More About Me
            </Button>
          </VStack>
        </Flex>
      </Container>
    </Box>
  )
}

