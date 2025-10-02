import { skills } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';

export default function Achievements() {
  const unlockedSkillNames = ['HTML/CSS', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Flask', 'Figma', 'Git'];
  const unlockedSkills = skills.filter(skill => unlockedSkillNames.includes(skill.name));
  const lockedSkills = skills.filter(skill => !unlockedSkillNames.includes(skill.name));

  return (
    <section id="achievements" className="bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Achievements</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Badges unlocked by exploring my skills and projects.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {unlockedSkills.map((skill) => (
            <Card key={skill.name} className="flex flex-col items-center justify-center p-6 bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-0 flex flex-col items-center gap-4 text-center">
                <div className="p-4 bg-primary/10 rounded-full">
                    <Award className="h-10 w-10 text-primary" />
                </div>
                <span className="font-semibold">{skill.name} Mastered</span>
                <span className="text-xs text-muted-foreground">Unlocked</span>
              </CardContent>
            </Card>
          ))}
           {lockedSkills.map((skill) => (
            <Card key={skill.name} className="flex flex-col items-center justify-center p-6 bg-card/50 filter grayscale">
              <CardContent className="p-0 flex flex-col items-center gap-4 text-center">
                 <div className="p-4 bg-muted/20 rounded-full">
                    <Award className="h-10 w-10 text-muted-foreground" />
                </div>
                <span className="font-semibold text-muted-foreground">{skill.name}</span>
                 <span className="text-xs text-muted-foreground">Locked</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
