import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-background">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-headline">The Blog</h1>
              <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                Thoughts on technology, design, and everything in between.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                   <CardHeader>
                    <div className="overflow-hidden rounded-lg">
                       <Image
                        src={post.image.url}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={post.image.hint}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardTitle className="mb-2 font-headline">{post.title}</CardTitle>
                    <CardDescription>{post.summary}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        {new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <Button asChild variant="link" className="px-0">
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
