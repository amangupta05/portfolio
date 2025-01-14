import { Box, Container, Flex, Link, Text } from '@chakra-ui/react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box as="footer" bg="black" color="white" py={8}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          gap={4}
        >
          <Flex direction="column" align={{ base: 'center', md: 'start' }}>
            <Text fontSize="lg" fontWeight="bold">Aman Gupta</Text>
            <Text fontSize="sm" color="brand.neonGreen">
              Innovating with Data, Shaping the Future with Intelligence
            </Text>
          </Flex>
          <Flex gap={4}>
            <Link href="mailto:agupta47@stevens.edu" color="white" _hover={{ color: 'brand.neonGreen' }}>
              <FaEnvelope size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/aman-gupta5/" target="_blank" rel="noopener noreferrer" color="white" _hover={{ color: 'brand.neonGreen' }}>
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://github.com/amangupta05" target="_blank" rel="noopener noreferrer" color="white" _hover={{ color: 'brand.neonGreen' }}>
              <FaGithub size={24} />
            </Link>
          </Flex>
        </Flex>
        <Text mt={4} textAlign="center" fontSize="sm" color="gray.400">
          &copy; {new Date().getFullYear()} Aman Gupta. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}