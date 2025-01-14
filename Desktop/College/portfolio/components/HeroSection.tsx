'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import NeuralNetwork from './NeuralNetwork';
import AnimatedName from './AnimatedName';
import { VStack, Button, HStack, Box, Text } from '@chakra-ui/react';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); // ✅ Small delay for better accuracy
    }
  };

  return (
    <Box id="home" width="100%" height="100vh" position="relative" overflow="hidden">

      {/* Neural Network Background */}
      <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={1}>
        <NeuralNetwork />
      </Box>

      {/* Content Overlay */}
      <Box position="absolute" top={0} left={0} right={0} bottom={0} display="flex" alignItems="center" justifyContent="center" zIndex={2} bg="rgba(0, 0, 0, 0.2)">
        <VStack spacing={8} textAlign="center" maxW="container.md" px={4}>
          <AnimatedName />
          <Text fontSize="5xl" fontWeight="semibold" color="brand.neonGreen" textShadow="0 0 10px rgba(57, 255, 20, 0.3)">
            Machine Learning Engineer
          </Text>
          <HStack spacing={4}>
            <Button
              colorScheme="cyan"
              size="lg"
              onClick={() => scrollToSection('skills')} // ✅ Fixed scrolling
              _hover={{ 
                bg: 'brand.neonGreen',
                color: 'black',
                transform: 'translateY(-2px)',
                boxShadow: '0 0 20px rgba(57, 255, 20, 0.5)',
              }}
              transition="all 0.3s ease"
            >
              View Skills
            </Button>
            <Button
              colorScheme="green"
              size="lg"
              onClick={() => scrollToSection('highlights')} // ✅ Fixed scrolling
              _hover={{ 
                bg: 'brand.electricBlue',
                color: 'black',
                transform: 'translateY(-2px)',
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
              }}
              transition="all 0.3s ease"
            >
              Explore Projects
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}
