'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  Button,
  Icon,
  LinkBox,
  Link,
  HStack,
  Divider,
} from '@chakra-ui/react'

import { FaGithub, FaMedal, FaLinkedin, FaEnvelope } from 'react-icons/fa'
gsap.registerPlugin(ScrollTrigger)

const certifications = [
  {
    title: 'Azure Certified AI Engineer Associate',
    icon: FaMedal,
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/AmanGupta-1809/EC7A8D8617C3390E?sharingId=B45F1081579E58F4'
  },
  {
    title: 'AWS Certified Data Engineer Associate',
    icon: FaMedal,
    link: 'https://www.credly.com/badges/b42069ef-1db5-42d2-9fd9-a77bad015bda/linked_in?t=spdkvc'
  },
  {
    title: 'Google Data Analytics',
    icon: FaMedal,
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/ATNH9828XDJJ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof'
  },
]

const projects = [
  {
    title: 'AI Interactive Learning Framework',
    description: 'This project implements an interactive AI-driven framework designed to assess and guide users in learning Artificial Intelligence (AI). It leverages multiple agents for specialized tasks, including evaluating responses, generating questions, adjusting tones based on emotional states, and orchestrating the overall process. The system architecture uses Fetch.AI\'s uAgents framework to manage agent communication and integrates APIs such as Claude, Gemini, and OpenAI to deliver advanced AI functionalities. The agents collaborate to deliver a personalized and engaging learning experience.',
    tech: ['Fetch.ai', 'Claude', 'Gemini', 'OpenAI'],
    github: 'https://github.com/amangupta05/AI-Summit-New-York'
  },
  {
    title: 'IntelliRescue AI Framework',
    description: 'The IntelliRescue AI Framework is an AI-driven emergency response system designed for vehicle crash scenarios. It leverages Fetch.ai agents for decentralized task handling, LangChain for orchestration and NLP capabilities, and a React-based dashboard for real-time visualization. This project was built as part of the Fetch.ai Hackathon to demonstrate how intelligent agents can improve emergency response times while preserving privacy.',
    tech: ['Fetch.ai', 'LangChain', 'React'],
    github: 'https://github.com/amangupta05/IntelliRescue-AI-Framework'
  },
  {
    title: 'Text Summarizer',
    description: 'Fine-tunes the Pegasus Seq2Seq model for text summarization using the Samsum dataset. Implements efficient training with Hugging Face Transformers and PyTorch.',
    tech: ['PyTorch', 'Transformers', 'Pegasus', 'Python'],
    github: 'https://github.com/amangupta05/Text-Summarizer',
  },
  {
    title: 'Data Engineering YouTube Analysis',
    description: 'This project focuses on the secure management, organization, and analysis of structured and semi-structured data from YouTube videos, based on video categories and trending metrics.',
    tech: ['AWS', 'Python', 'Data Engineering'],
    github: 'https://github.com/amangupta05/Youtube_analysis_aws',
  },
  {
    title: 'RAG-Powered Web Scraper',
    description: 'A web scraper with Langchain QA interface for intelligent data extraction and analysis.',
    tech: ['LangChain', 'OpenAI', 'Python'],
    github: 'https://github.com/amangupta05/LangChainDriven-Web-Scraping-with-OpenAI',
  }
]

export default function HighlightsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.highlight-card', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
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

  return (
    <Box
      ref={sectionRef}
      id="highlights"
      minH="100vh"
      py={20}
      bgGradient="linear(to-b, black, purple.900)"
    >
      <Container maxW="container.xl" px={4}>
        <VStack spacing={20} align="stretch">
          {/* Certifications Section */}
          <VStack spacing={10} align="stretch">
            <Heading
              as="h2"
              size="2xl"
              color="brand.neonGreen"
              textAlign="center"
              mb={4}
            >
              Certifications
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {certifications.map((cert, index) => (
                <LinkBox
                  key={index}
                  className="highlight-card"
                  p={6}
                  borderWidth={1}
                  borderColor="brand.electricBlue"
                  borderRadius="lg"
                  bg="blackAlpha.800"
                  transition="all 0.3s"
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: '0 4px 20px var(--chakra-colors-brand-electricBlue)',
                  }}
                >
                  <Link href={cert.link} isExternal>
                    <HStack spacing={3}>
                      <Icon as={cert.icon} color="brand.electricBlue" boxSize={6} />
                      <Text color="white" fontSize="lg" fontWeight="bold">
                        {cert.title}
                      </Text>
                    </HStack>
                  </Link>
                </LinkBox>
              ))}
            </SimpleGrid>
          </VStack>

          <Divider borderColor="brand.electricBlue" opacity={0.3} />

          {/* Projects Section */}
          <VStack spacing={10} align="stretch">
            <Heading
              as="h2"
              size="2xl"
              color="brand.neonGreen"
              textAlign="center"
              mb={4}
            >
              Projects
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {projects.map((project, index) => (
                <Box
                  key={index}
                  className="highlight-card"
                  p={8}
                  borderWidth={1}
                  borderColor="brand.electricBlue"
                  borderRadius="lg"
                  bg="blackAlpha.800"
                  transition="all 0.3s"
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: '0 4px 20px var(--chakra-colors-brand-electricBlue)',
                  }}
                >
                  <VStack align="stretch" spacing={6}>
                    <Heading as="h3" size="lg" color="white">
                      {project.title}
                    </Heading>
                    <Text color="gray.300" fontSize="md" lineHeight="tall">
                      {project.description}
                    </Text>
                    <Box>
                      <Text color="brand.neonGreen" fontWeight="bold" mb={3}>
                        Technologies:
                      </Text>
                      <SimpleGrid columns={3} spacing={3}>
                        {project.tech.map((tech, i) => (
                          <Text key={i} color="brand.electricBlue" fontSize="sm">
                            {tech}
                          </Text>
                        ))}
                      </SimpleGrid>
                    </Box>
                    <Box>
                      <Button
                        as="a"
                        href={project.github}
                        target="_blank"
                        leftIcon={<Icon as={FaGithub} />}
                        colorScheme="cyan"
                        size="md"
                        _hover={{
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px var(--chakra-colors-brand-electricBlue)',
                        }}
                      >
                        View Code
                      </Button>
                    </Box>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>

          <HStack spacing={4} justify="center">
            <Button
              as="a"
              href="mailto:amangupta52001@gmail.com"
              colorScheme="cyan"
              size="lg"
              leftIcon={<Icon as={FaEnvelope} />}
              _hover={{
                bg: 'brand.neonGreen',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px var(--chakra-colors-brand-neonGreen)',
              }}
            >
              Email Me
            </Button>
            <Button
              as="a"
              href="https://www.linkedin.com/in/aman-gupta5/"
              target="_blank"
              colorScheme="cyan"
              size="lg"
              leftIcon={<Icon as={FaLinkedin} />}
              _hover={{
                bg: 'brand.electricBlue',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px var(--chakra-colors-brand-electricBlue)',
              }}
            >
              LinkedIn
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}