import { Github, Linkedin, Instagram, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

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
          <a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span className="sr-only">Phone</span>
          </a>
          <a href="mailto:hello@akshith.space" className="text-muted-foreground hover:text-foreground flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
          <Link href="https://github.com/akshith-s" target="_blank" className="text-muted-foreground hover:text-foreground">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/akshith-s/" target="_blank" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="#" target="_blank" className="text-muted-foreground hover:text-foreground">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
