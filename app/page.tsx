import { MainPage } from '@/components/main/page1'

import { AnimatedCarousel } from '@/components/main/animated-carousel';
import { DefinitionSection } from '@/components/main/definition';
import { AIAgentsSection } from '@/components/main/agent-use-case';
import { Testimonials } from "@/components/pricing/testimonials"
import { FAQSection } from '@/components/main/faq';
import { Main } from 'next/document';
import { AiAgentsSection } from '@/components/main/ai-agents-section';
import { FeaturesSection } from '@/components/main/features-section';
import { SolutionsSection } from '@/components/main/solutions-section';
export default function Home() {
  // Sample image URLs - replace with your actual images
  const leftImages = [
    '/img1.svg',
    '/img2.svg',
    '/img3.svg',
    '/img4.svg',
    '/img5.svg',
    '/img6.svg',
    '/img7.svg',
    '/img8.svg',
    '/img9.svg',
    '/img10.svg',
    '/img11.svg',
    '/img12.svg',
    '/img13.svg',
  ];

  const rightImages = [
    '/img14.svg',
    '/img15.svg',
    '/img16.svg',
    '/img17.svg',
    '/img18.svg',
    '/img19.svg',
    '/img20.svg',
    '/img21.svg',
    '/img22.svg',
    '/img23.svg',
    '/img24.svg',
    '/img25.svg',
    '/img26.svg',
  ];

  return (
    <main className="min-h-screen bg-background pt-0 mt-0">
      <MainPage />
      <AnimatedCarousel leftImages={leftImages} rightImages={rightImages} />
      <DefinitionSection />
      <AIAgentsSection />
      <AiAgentsSection />
      <FeaturesSection />
      <SolutionsSection />
      
      <FAQSection />
      <MainPage />
    </main>
  );
}

