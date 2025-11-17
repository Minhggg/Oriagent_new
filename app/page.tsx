import { MainPage } from '@/components/main/page1'
import { AnimatedCarousel } from '@/components/main/animated-carousel';

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
  ];

  const rightImages = [
    '/img8.svg',
    '/img9.svg',
    '/img10.svg',
    '/img11.svg',
    '/img12.svg',
    '/img13.svg',
    '/img14.svg',
  ];

  return (
    <main className="min-h-screen bg-background">
      <MainPage />
      <AnimatedCarousel leftImages={leftImages} rightImages={rightImages} />
    </main>
  );
}

