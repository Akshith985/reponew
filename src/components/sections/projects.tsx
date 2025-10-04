import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Featured Projects</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            A selection of my work, showcasing my skills in design and development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="overflow-hidden rounded-lg">
                   <Image
                    src={project.image.url}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.image.hint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <CardTitle className="mb-2 font-headline">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                 <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <Button asChild variant="link" className="px-0">
                    <Link href={project.link} target="_blank">
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  {project.githubLink && (
                     <Button asChild variant="outline" size="sm">
                        <Link href={project.githubLink} target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                        </Link>
                     </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-12">
          To view my other projects, feel free to reach out!
        </p>
      </div>
    </section>
  );
}
