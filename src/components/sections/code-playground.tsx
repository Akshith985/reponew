'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function CodePlayground() {
  return (
    <section id="code-playground" className="bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Code Playground</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            A little peek into how this site adapts. Feel free to interact with the code.
          </p>
        </div>
        <Card className="max-w-4xl mx-auto overflow-hidden">
          <CardHeader>
             <CardTitle className="font-headline text-lg">Live Code Editor</CardTitle>
             <CardDescription className="font-sans">An interactive greeting tool for fellow adventurers.</CardDescription>
          </CardHeader>
          <CardContent>
            <iframe
              height="400"
              style={{ width: '100%' }}
              scrolling="no"
              title="Hello Adventurer"
              src="https://codepen.io/studio-ai/embed/zYKqJgY?default-tab=js%2Cresult&theme-id=dark"
              frameBorder="no"
              loading="lazy"
              allowFullScreen={true}
            >
              See the Pen <a href="https://codepen.io/studio-ai/pen/zYKqJgY">Hello Adventurer</a> by
              Studio AI (<a href="https://codepen.io/studio-ai">@studio-ai</a>) on{' '}
              <a href="https://codepen.io">CodePen</a>.
            </iframe>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
