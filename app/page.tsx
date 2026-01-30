import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import IgnitionEngine from '@/components/IgnitionEngine'
import HustleTracks from '@/components/HustleTracks'
import SocialProof from '@/components/SocialProof'
import ParentalIntel from '@/components/ParentalIntel'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import BackgroundEffects from '@/components/BackgroundEffects'

export default function Home() {
  return (
    <main className="relative">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <IgnitionEngine />
      <HustleTracks />
      <SocialProof />
      <ParentalIntel />
      <CTASection />
      <Footer />
    </main>
  )
}
