import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-4xl">
          <article className="space-y-8">
            <div className="space-y-4 text-center">
              <Button asChild variant="ghost" className="mb-4">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              <h1 className="text-4xl md:text-5xl font-bold font-headline">{post.title}</h1>
              <div className="flex items-center justify-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                <span>Published on {new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
            
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                <Image
                    src={post.image.url}
                    alt={post.title}
                    fill
                    className="object-cover"
                    data-ai-hint={post.image.hint}
                />
            </div>
            
            <Separator />

            <div
              className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground/90 prose-p:leading-relaxed prose-headings:font-headline prose-headings:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
