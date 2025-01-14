'use client'

import { VStack, Box } from '@chakra-ui/react'
import HeroSection from '@/components/HeroSection'
import AboutMePreview from '@/components/AboutMePreview'
import SkillsGlobe from '@/components/SkillsGlobe'
import HighlightsSection from '@/components/HighlightsSection'
import Footer from '@/components/Footer'
import ExperienceSection from '@/components/ExperienceSection'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <Box>
      <Navbar />
      <VStack
        minH="100vh"
        w="100%"
        spacing={0}
        position="relative"
        zIndex={1}
      >
        <Box id="home" w="100%">
          <HeroSection />
        </Box>
        <Box id="about" w="100%">
          <AboutMePreview />
        </Box>
        <Box id="skills" w="100%">
          <SkillsGlobe />
        </Box>
        <Box id="experience" w="100%">
          <ExperienceSection />
        </Box>
        <Box id="highlights" w="100%">
          <HighlightsSection />
        </Box>
        <Box id="footer" w="100%">
          <Footer />
        </Box>
      </VStack>
    </Box>
  )
}

