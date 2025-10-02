'use client';

import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import FavoriteBug from '@/components/sections/favorite-bug';
import AiRecommender from '@/components/sections/ai-recommender';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';
import SplashScreen from '@/components/splash-screen';
import { useViewer } from '@/context/viewer-context';
import CodePlayground from '@/components/sections/code-playground';

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
        {viewerType === 'developer' ? <CodePlayground /> : <Projects />}
        <Skills />
        {viewerType === 'developer' && <FavoriteBug />}
        <AiRecommender />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
