'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function FavoriteBug() {
  const codeString = `
import { useState, useEffect } from 'react';

function BuggyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This looks innocent, but it has a secret...
    const interval = setInterval(() => {
      console.log('Interval running...');
      setCount(count + 1); // <-- The culprit!
    }, 1000);

    // The cleanup function is here, but will it be enough?
    return () => clearInterval(interval);
  }); // <-- The empty dependency array is missing!

  return <div>Count: {count}</div>;
}
  `;

  return (
    <>
      <section id="favorite-bug" className="bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">My Favorite Bug</h2>
            <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
              This little guy taught me a huge lesson about React's lifecycle and the importance of dependency arrays in <code>useEffect</code>.
            </p>
          </div>
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <CardHeader className="flex-row items-start justify-between">
              <div>
                <CardTitle className="font-headline text-lg">The Infinite Re-render</CardTitle>
                <CardDescription className="font-sans pt-2">
                  At first glance, this component seems simple. But without a dependency array, the <code>useEffect</code> hook runs after every single render. Since it also updates the state, it triggers another render, which triggers the effect again, creating a vicious and infinite loop that can quickly crash your app. A classic mistake, but a powerful teacher!
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
               <SyntaxHighlighter language="tsx" style={atomDark} customStyle={{ margin: 0, borderRadius: 0, border: 'none', background: 'hsl(var(--card))' }} >
                {codeString.trim()}
              </SyntaxHighlighter>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
