import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-portrait');

  return (
    <section id="about" className="bg-card">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <div className="w-[300px] h-[300px] rounded-full overflow-hidden aspect-square bg-muted border-8 border-background shadow-lg">
            <Image
                src="https://akshith.space/_next/image?url=%2Fmemoji.png&w=256&q=75"
                alt="Akshith"
                width={300}
                height={300}
                className="object-cover"
            />
          </div>
        </div>
        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-primary font-semibold">Akshith</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline">
              Software Engineer & Content Creator
            </h1>
          </div>
          <p className="text-muted-foreground md:text-lg">
            I'm a Software Engineer from Toronto, Canada. I have a passion for building software that is user-friendly and has a positive impact on the world. I also create content on YouTube and TikTok about software engineering, productivity, and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
              <Link href="#contact">
                Get In Touch
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="transition-transform duration-300 hover:scale-105">
              <Link href="#projects">
                View My Work <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
