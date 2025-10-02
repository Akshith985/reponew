'use client';

import { useState } from 'react';
import Image from 'next/image';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Code, User, Feather } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useViewer } from '@/context/viewer-context';

export default function SplashScreen() {
  const [selectedRole, setSelectedRole] = useState<'developer' | 'recruiter' | null>(null);
  const { setViewerType } = useViewer();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleSelect = () => {
    if (selectedRole === 'recruiter') {
      setShowWelcome(true);
      setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          setViewerType(selectedRole);
        }, 500); // Match fade-out duration
      }, 1500); // Time for GIF to play
    } else if (selectedRole) {
      setIsFadingOut(true);
      setTimeout(() => {
        setViewerType(selectedRole);
      }, 500); // Match fade-out duration
    }
  };

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500',
        isFadingOut ? 'opacity-0' : 'opacity-100'
      )}
    >
      {showWelcome ? (
        <div className="flex items-center justify-center text-center gap-4">
            <Image 
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTVhbHk2aGo5aWdpZHM5d2s4ZXU2eGRzaWRrb3BsYWtrOWoyM2I4dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/kNOHmVZB9eDNMXcjJT/giphy.gif"
                alt="Welcome GIF"
                width={300}
                height={300}
                unoptimized
                className="rounded-lg border-4 border-primary"
            />
            <h1 className="text-4xl font-bold font-headline">Welcome!</h1>
        </div>
      ) : (
        <div className="text-center space-y-8 max-w-lg mx-auto p-4 animate-in fade-in duration-500">
          <Feather className="h-12 w-12 text-primary mx-auto" />
          <h1 className="text-3xl md:text-4xl font-bold font-headline">Welcome to Akshith's Portfolio</h1>
          <p className="text-muted-foreground md:text-lg">
            To help me tailor the experience, please select your role.
          </p>
          <div>
            <RadioGroup
              className="flex justify-center gap-4 md:gap-8"
              onValueChange={(value: 'developer' | 'recruiter') => setSelectedRole(value)}
            >
              <Label
                htmlFor="developer"
                className={cn(
                  'flex flex-col items-center justify-center gap-3 rounded-lg border-2 p-6 md:p-8 cursor-pointer transition-all w-40 h-40',
                  selectedRole === 'developer' ? 'bg-primary/20 border-primary shadow-lg' : 'border-border hover:border-primary/50'
                )}
              >
                <RadioGroupItem value="developer" id="developer" className="sr-only" />
                <Code className="h-10 w-10" />
                <span className="font-semibold text-lg">Developer</span>
              </Label>
              <Label
                htmlFor="recruiter"
                className={cn(
                  'flex flex-col items-center justify-center gap-3 rounded-lg border-2 p-6 md:p-8 cursor-pointer transition-all w-40 h-40',
                  selectedRole === 'recruiter' ? 'bg-primary/20 border-primary shadow-lg' : 'border-border hover:border-primary/50'
                )}
              >
                <RadioGroupItem value="recruiter" id="recruiter" className="sr-only" />
                <User className="h-10 w-10" />
                <span className="font-semibold text-lg">Recruiter</span>
              </Label>
            </RadioGroup>
          </div>
          <Button size="lg" onClick={handleSelect} disabled={!selectedRole} className="transition-transform duration-300 hover:scale-105">
            Continue
          </Button>
        </div>
      )}
    </div>
  );
}
