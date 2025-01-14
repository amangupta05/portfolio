'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  VStack,
  Box,
  Text,
  Button,
  Container,
  Heading,
  Flex,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    title: 'Machine Learning Engineer — LangGraph, Agents, Python',
    company: 'Cantonica',
    location: 'New York, NY',
    date: 'Sep 2024 – Present',
    description: [
      'Designed and deployed AI agents for task automation, leveraging LangChain, LangGraph, and CrewAI to generate daily summaries, automate performance reviews, and optimize workflows.',
      'Orchestrated multi-agent systems to streamline task dependencies and resource allocation, improving team productivity by 20% through intelligent use of employee skills and KPIs.',
      'Implemented GraphRAG models to enhance task planning accuracy by 40%, mapping task relationships as graphs and enabling real-time updates to managers.',
      'Integrated data pipelines across Slack, Google Docs, and GitHub Projects, centralizing documentation and reducing manual project reporting time by 35%.'
    ]
  },
  {
    title: 'Generative AI Research Assistant — MMVAE, PyTorch, GPU-Acceleration',
    company: 'Stevens Institute of Technology',
    location: 'Hoboken, NJ',
    date: 'Jun 2024 – Sep 2024',
    description: [
      'Engineered and optimized a Multi-Modal Variational Autoencoder (MMVAE) for cross-generation and joint-generation tasks, achieving 95% reconstruction accuracy on MNIST-SVHN datasets.',
      'Refined model architecture using Mixture of Experts (MoE) to fuse latent spaces across modalities, improving cross-generation consistency by 30% compared to baseline approaches.',
      'Reduced ELBO loss by 20% through fine-tuning PyTorch pipelines, leveraging GPU-enabled training and Adam optimizer, ensuring efficient convergence over 50 epochs.',
      'Validated model performance with quantitative metrics and high-quality outputs, achieving a 10% reduction in error rate for latent space reconstructions and establishing research benchmarks.'
    ]
  },
  {
    title: 'Machine Learning Engineer — AWS SageMaker, IoT Core, QuickSight',
    company: 'LRA Packaging Pvt Ltd',
    location: 'Faridabad, India',
    date: 'May 2020 - Sep 2022',
    description: [
      'Spearheaded the design of real-time data pipelines using AWS IoT Core, MQTT, and Raspberry Pi, reducing sensor data latency by 30%.',
      'Architected anomaly detection systems in AWS SageMaker leveraging the Random Cut Forest (RCF) algorithm, achieving 95% accuracy and reducing downtime by 20%.',
      'Devised automated workflows integrating AWS Lambda, CloudWatch, and Amazon SNS, improving incident response times by 50% through real-time alerting mechanisms.',
      'Crafted dynamic dashboards in Amazon QuickSight to monitor trends and metrics, boosting stakeholder decision-making efficiency by 25%.'
    ]
  }
]

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-item', {
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
      id="experience"
      py={20}
      bgGradient="linear(to-b, purple.900, black)"
    >
      <Container maxW="container.xl">
        <Heading
          as="h2"
          size="2xl"
          mb={12}
          textAlign="center"
          color="brand.neonGreen"
        >
          Professional Experience
        </Heading>
        <Box position="relative">
          <Box
            position="absolute"
            left="50%"
            transform="translateX(-50%)"
            w="2px"
            h="full"
            bg="brand.electricBlue"
          />
          
          {experiences.map((exp, index) => (
            <Flex
              key={index}
              className="timeline-item"
              mb={8}
              flexDir={index % 2 === 0 ? 'row-reverse' : 'row'}
            >
              <Box w="50%" />
              <Box
                position="absolute"
                left="50%"
                transform="translate(-50%, -50%)"
                w={4}
                h={4}
                borderRadius="full"
                bg="brand.neonGreen"
                border="4px"
                borderColor="brand.electricBlue"
                zIndex={2}
              />
              <Box
                w="50%"
                bg="blackAlpha.800"
                borderRadius="lg"
                p={6}
                ml={index % 2 === 0 ? 8 : 0}
                mr={index % 2 === 0 ? 0 : 8}
                borderColor="brand.electricBlue"
                borderWidth={1}
              >
                <Heading size="lg" color="white" mb={2}>
                  {exp.title}
                </Heading>
                <Text color="brand.neonGreen" fontWeight="bold">
                  {exp.company} | {exp.location}
                </Text>
                <Text color="white" mb={4}>
                  {exp.date}
                </Text>
                <List spacing={2}>
                  {exp.description.map((item, i) => (
                    <ListItem key={i} color="white">
                      {item}
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Flex>
          ))}
        </Box>
        <VStack mt={12}>
          <Button
            colorScheme="cyan"
            size="lg"
            onClick={() => {
              const highlightsSection = document.getElementById('highlights')
              if (highlightsSection) {
                highlightsSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            _hover={{
              bg: 'brand.neonGreen',
              transform: 'translateY(-2px)',
            }}
          >
            View Highlights
          </Button>
        </VStack>
      </Container>
    </Box>
  )
}

