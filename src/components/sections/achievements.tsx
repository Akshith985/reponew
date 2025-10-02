'use client';

import { skills } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

export default function Achievements() {
  return (
    <section id="achievements" className="bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Unlocked Abilities</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            A showcase of the technologies I've mastered.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="flex flex-col items-center justify-center p-6 transition-all duration-300 hover:shadow-lg hover:bg-accent hover:text-accent-foreground group">
              <CardContent className="p-0 flex flex-col items-center gap-4">
                <skill.icon className="h-12 w-12 text-primary transition-colors group-hover:text-accent-foreground" />
                <span className="font-semibold text-center">{skill.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}