'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Feather } from 'lucide-react';
import { useViewer } from '@/context/viewer-context';

export default function Header() {
  const { viewerType } = useViewer();

  const navLinks = [
    { href: '#about', label: 'About' },
    {
      href: viewerType === 'developer' ? '#code-playground' : '#projects',
      label: viewerType === 'developer' ? 'CodePlay' : 'Projects',
    },
    { href: '#skills', label: 'Skills' },
    ...(viewerType === 'developer'
      ? [{ href: '#favorite-bug', label: 'Favorite Bug' }]
      : []),
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Feather className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              Akshith
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link href="/" className="mr-6 flex items-center space-x-2">
                <Feather className="h-6 w-6 text-primary" />
                <span className="font-bold sm:inline-block font-headline">
                  Akshith
                </span>
              </Link>
              <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <div className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-foreground">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex-1 md:hidden">
             <Link href="/" className="flex items-center space-x-2">
                <Feather className="h-6 w-6 text-primary" />
                <span className="font-bold sm:inline-block font-headline">
                  Akshith
                </span>
              </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
