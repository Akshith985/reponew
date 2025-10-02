import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronRight } from 'lucide-react';
import { Progress } from "@/components/ui/progress"

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-portrait');

  return (
    <section id="about" className="bg-card">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col items-center gap-6">
          <div className="w-[200px] h-[200px] rounded-lg overflow-hidden aspect-square bg-muted border-4 border-background shadow-lg">
            <Image
                src="https://picsum.photos/seed/pixel-char/200/200"
                data-ai-hint="pixelated character"
                alt="Pixelated Character"
                width={200}
                height={200}
                className="object-cover"
            />
          </div>
          <div className='w-full max-w-sm space-y-2'>
              <div className='flex justify-between text-sm font-semibold text-muted-foreground'>
                  <span>Level 1</span>
                  <span>Explorer</span>
                  <span>XP: 15/100</span>
              </div>
              <Progress value={15} className='h-3' />
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
