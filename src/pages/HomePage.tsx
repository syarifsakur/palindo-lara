import CollectionsSection from '../components/home/CollectionsSection'
import FeatureSection from '../components/home/FeatureSection'
import HeroSection from '../components/home/HeroSection'
import IntroSection from '../components/home/IntroSection'
import MarqueeSection from '../components/home/MarqueeSection'
import NewsSection from '../components/home/NewsSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <CollectionsSection />
      <FeatureSection />
      <MarqueeSection />
      <NewsSection />
    </>
  )
}
