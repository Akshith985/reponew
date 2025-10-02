
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append('access_key', '1f153213-9425-4ba4-bc00-95a81500f0b1');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      (event.target as HTMLFormElement).reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
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
              <Input id="name" type="text" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required />
            </div>
            <div className="text-center">
              <Button type="submit">Submit Form</Button>
            </div>
          </form>
          <div className="text-center mt-4">
            <span>{result}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
