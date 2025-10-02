'use client';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodePlayground() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const codeString = `
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Image from 'next/image';

export function AdventurerDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Run</Button>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center font-headline text-2xl">
              Hello Adventurer!
            </AlertDialogTitle>
            <AlertDialogDescription className="flex justify-center">
              <Image
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNm9ydDUzaTdndnNlYWNueWZ1c2ltNXJvbnJqcGtsdWJoYXBjdzJ0MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/TlvFvPxp1pfckzFcVy/giphy.gif"
                alt="Adventurer GIF"
                width={250}
                height={250}
                unoptimized
                className="rounded-lg"
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Continue Quest</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
  `;

  return (
    <>
      <section id="code-playground" className="bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Code Playground</h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              A snippet of how I make things interactive
            </p>
          </div>
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <CardHeader className="flex-row items-center justify-between">
              <div>
                <CardTitle className="font-headline text-lg">Interactive Dialog</CardTitle>
                <CardDescription className="font-sans">The code for the "Run" button and dialog below.</CardDescription>
              </div>
               <Button onClick={() => setIsDialogOpen(true)}>Run</Button>
            </CardHeader>
            <CardContent className="p-0">
               <SyntaxHighlighter language="tsx" style={atomDark} customStyle={{ margin: 0, borderRadius: 0, border: 'none', background: 'hsl(var(--card))' }} >
                {codeString.trim()}
              </SyntaxHighlighter>
            </CardContent>
          </Card>
        </div>
      </section>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center font-headline text-2xl">
              Hello Adventurer!
            </AlertDialogTitle>
            <AlertDialogDescription className="flex justify-center">
              <Image
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNm9ydDUzaTdndnNlYWNueWZ1c2ltNXJvbnJqcGtsdWJoYXBjdzJ0MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/TlvFvPxp1pfckzFcVy/giphy.gif"
                alt="Adventurer GIF"
                width={250}
                height={250}
                unoptimized
                className="rounded-lg"
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Continue Quest</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
