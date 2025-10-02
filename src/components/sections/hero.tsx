'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { useViewer } from '@/context/viewer-context';

export default function Hero() {
  const { viewerType } = useViewer();

  return (
    <section id="about" className="bg-card">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col items-center gap-6">
          <div className="w-[200px] h-[200px] rounded-lg overflow-hidden aspect-square bg-muted border-4 border-background shadow-lg">
            {viewerType === 'recruiter' ? (
               <Image
                  src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDdkYmxkcHd6ZTkxeTJkZGJiemtwb3dwcTJ3MHBpeHE3bHpodXY2MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XQX4Sci7PdBEripno6/giphy.gif"
                  alt="Recruiter GIF"
                  width={200}
                  height={200}
                  className="object-cover"
                  unoptimized
              />
            ) : (
              <Image
                  src="https://picsum.photos/seed/pixel-char/200/200"
                  data-ai-hint="pixelated character"
                  alt="Pixelated Character"
                  width={200}
                  height={200}
                  className="object-cover"
              />
            )}
          </div>
          <div className='w-full max-w-sm space-y-4'>
              <div className='space-y-2'>
                <div className='flex justify-between text-sm font-semibold text-muted-foreground'>
                    <span>Level 1</span>
                    <span>Explorer</span>
                    <span>XP: 50/100</span>
                </div>
                <Progress value={50} className='h-3' />
                <p className="text-xs text-center text-muted-foreground italic">"Always Exploring!"</p>
              </div>
          </div>
        </div>
        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-primary font-semibold">Akshith</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline">
              Software Engineer & Content Creator
            </h1>
          </div>
          {viewerType === 'recruiter' ? (
            <>
              <h2 className="text-xl md:text-2xl font-bold font-headline text-primary">
                Who am I? Why would I make a difference?
              </h2>
              <p className="text-muted-foreground md:text-lg">
                I'm a full-stack translator, fluent in the languages of both beautiful pixels (front-end) and powerful databases (back-end). I bridge the gap between user-facing interfaces and server-side logic, ensuring the entire application communicates flawlessly. My passion is building cohesive, high-performance web solutions from start to finish.
              </p>
            </>
          ) : (
            <p className="text-muted-foreground md:text-lg">
              I'm a Software Engineer from Toronto, Canada. I have a passion for building software that is user-friendly and has a positive impact on the world. I also create content on YouTube and TikTok about software engineering, productivity, and lifestyle.
            </p>
          )}
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
