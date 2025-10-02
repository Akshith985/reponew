import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import Achievements from '@/components/sections/achievements';
import AiRecommender from '@/components/sections/ai-recommender';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';

export default function Home() {
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
