import { HeroSection } from '@/components/landing/herosection'
import { FeaturesSection } from '@/components/landing/features-section'
import { ToolkitSection } from '@/components/landing/toolkit-section'
import { ComparisonSection } from '@/components/landing/comparison-section'
import { PricingSection } from '@/components/landing/pricing-section'
import AIAgentsSection from '@/components/landing/agent-can-do'


export default function DoneForYouPage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <AIAgentsSection />
      <ToolkitSection />
      <ComparisonSection />
      <PricingSection />
    </main>
  )
}