
'use client';

import React from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const { toast } = useToast();
  const [result, setResult] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult('Sending....');
    const formData = new FormData(event.target as HTMLFormElement);

    // Directly using the access key here
    const accessKey = "1f153213-9425-4ba4-bc00-95a81500f0b1";
    
    if (!accessKey) {
      setResult("Configuration error: Access key is missing.");
      toast({
        variant: 'destructive',
        title: 'Configuration Error',
        description: 'The form is not configured correctly. Please contact the site administrator.',
      });
      setIsSubmitting(false);
      return;
    }
    formData.append("access_key", accessKey);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        toast({
          title: 'Message Sent!',
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        (event.target as HTMLFormElement).reset();
      } else {
        console.log('Error', data);
        setResult(data.message);
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description:
            data.message ||
            'There was a problem sending your message. Please try again later.',
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setResult('An error occurred.');
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem sending your message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-card">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Get In Touch</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Drop me a line.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" placeholder="your@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Your message..." rows={5} required />
            </div>
            <div className="text-center">
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
