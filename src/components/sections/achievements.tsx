'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Trophy, Zap, Users } from 'lucide-react';

const achievements = [
    {
        icon: <Trophy className="h-8 w-8 text-primary" />,
        title: 'Top Performer Award',
        description: 'Recognized as a top performer for consistently exceeding project goals and delivering high-quality work.',
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: 'Innovation Challenge Winner',
        description: 'Led a team to victory in the company-wide innovation challenge with a groundbreaking new feature concept.',
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: 'Community Contributor',
        description: 'Actively contributed to open-source projects and mentored junior developers, fostering a culture of growth.',
    },
];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Key Achievements</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            A few highlights from my professional journey.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
                <Card key={index} className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardHeader>
                        <div className="flex justify-center mb-4">{achievement.icon}</div>
                        <CardTitle className="font-headline">{achievement.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>{achievement.description}</CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
