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
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={450}
              height={450}
              className="rounded-full aspect-square object-cover border-8 border-background shadow-lg"
              data-ai-hint={heroImage.imageHint}
            />
          )}
        </div>
        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-primary font-semibold">Jane Doe</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline">
              Creative Developer & UI/UX Designer
            </h1>
          </div>
          <p className="text-muted-foreground md:text-lg">
            I build beautiful, functional, and user-centric digital experiences. 
            With a passion for both design and code, I bridge the gap between aesthetics and performance 
            to deliver outstanding products.
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
