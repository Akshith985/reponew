'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { useState } from 'react';

const codeSnippet = `// A simple script to greet fellow adventurers!
function greet() {
    return "Hello Fellow Adventurer!";
}`;

const outputResult = `> Hello Fellow Adventurer!`;

export default function CodePlayground() {
  const [showOutput, setShowOutput] = useState(false);

  const handleRun = () => {
    setShowOutput(true);
    setTimeout(() => setShowOutput(false), 5000); // Hide after 5 seconds
  };

  return (
    <section id="code-playground" className="bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Code Playground</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            A little peek into how this site adapts. Press run to see the logic for your profile.
          </p>
        </div>
        <Card className="max-w-3xl mx-auto font-code">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
                <CardTitle className="font-headline text-lg">greeting.js</CardTitle>
                <CardDescription className="font-sans">A tool for fellow adventurers</CardDescription>
            </div>
            <Button onClick={handleRun} size="sm">
              <Play className="mr-2 h-4 w-4" />
              Run
            </Button>
          </CardHeader>
          <CardContent>
            <pre className="bg-card p-4 rounded-md overflow-x-auto text-sm">
                <code className="text-foreground/80">{codeSnippet}</code>
            </pre>
            {showOutput && (
                <div className="mt-4 animate-in fade-in duration-500">
                    <h3 className="font-semibold mb-2 font-sans">Output</h3>
                    <pre className="bg-black text-yellow-300 border-2 border-green-500 p-4 rounded-md text-sm">
                        {outputResult}
                    </pre>
                </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
