import { HeroSection } from '@/components/landing/herosection'
import { FeaturesSection } from '@/components/landing/features-section'
import { ToolkitSection } from '@/components/landing/toolkit-section'
import { ComparisonSection } from '@/components/landing/comparison-section'
import { PricingSection } from '@/components/landing/pricing-section'
import { Testimonials } from "@/components/pricing/testimonials"
// import AIAgentsSection from '@/components/landing/agent-can-do'
import { AIAgentsSection } from '@/components/main/agent-use-case';

export default function DoneForYouPage() {
  return (
    <main >
      <HeroSection />
      <FeaturesSection />
      <AIAgentsSection />
      <ToolkitSection />
      <Testimonials />
      <ComparisonSection />
      <PricingSection />
    </main>
  )
}