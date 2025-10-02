import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';

const TikTokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music"><path d="M15.5 2.5a2.5 2.5 0 0 1 2.5 2.5V11a2.5 2.5 0 0 1-2.5 2.5h-5a2.5 2.5 0 0 1-2.5-2.5V5a2.5 2.5 0 0 1 2.5-2.5h5zM12 11v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-6"/></svg>
)

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Akshith. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4 md:ml-auto">
          <Link href="https://github.com/akshith-s" target="_blank" className="text-muted-foreground hover:text-foreground">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://twitter.com/akshithdotspace" target="_blank" className="text-muted-foreground hover:text-foreground">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="https://www.linkedin.com/in/akshith-s/" target="_blank" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://www.youtube.com/@akshithdotspace" target="_blank" className="text-muted-foreground hover:text-foreground">
            <Youtube className="h-5 w-5" />
            <span className="sr-only">YouTube</span>
          </Link>
          <Link href="https://www.tiktok.com/@akshith.space" target="_blank" className="text-muted-foreground hover:text-foreground">
            <TikTokIcon />
            <span className="sr-only">TikTok</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
