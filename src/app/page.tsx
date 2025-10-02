'use client';

import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import Achievements from '@/components/sections/achievements';
import AiRecommender from '@/components/sections/ai-recommender';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';
import SplashScreen from '@/components/splash-screen';
import { useViewer } from '@/context/viewer-context';

export default function Home() {
  const { viewerType } = useViewer();

  if (!viewerType) {
    return <SplashScreen />;
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Skills />
        <Achievements />
        <AiRecommender />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
