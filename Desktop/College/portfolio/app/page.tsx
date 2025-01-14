import HeroSection from '@/components/HeroSection'
import AboutMePreview from '@/components/AboutMePreview'
// import SkillsGlobe from '@/components/SkillsGlobe'
import HighlightsSection from '@/components/HighlightsSection'
import Footer from '@/components/Footer'
import ExperienceSection from '@/components/ExperienceSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-100">
      <HeroSection />
      <AboutMePreview />
      {/* <SkillsGlobe /> */}
      <ExperienceSection />
      <HighlightsSection />
      <Footer />
    </main>
  )
}

