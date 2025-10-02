import { Code, Server, Database, Box, PenTool, Layers, type LucideIcon } from 'lucide-react';
import type { StaticImageData } from 'next/image';

export type Project = {
  id: number;
  title: string;
  description: string;
  image: {
    id: string;
    url: string;
    hint: string;
  };
  link: string;
  tags: string[];
};

export type Skill = {
  name: string;
  icon: LucideIcon;
};

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  content: string;
  image: {
    id: string;
    url: string;
    hint: string;
  };
  publishedDate: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'An advanced data visualization platform that translates complex datasets into intuitive and interactive graphics.',
    image: {
      id: 'project-1',
      url: 'https://picsum.photos/seed/proj1/600/400',
      hint: 'data network'
    },
    link: '#',
    tags: ['React', 'D3.js', 'Node.js'],
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'A cross-platform mobile application designed to streamline team collaboration and project management on the go.',
    image: {
      id: 'project-2',
      url: 'https://picsum.photos/seed/proj2/600/400',
      hint: 'mobile app'
    },
    link: '#',
    tags: ['React Native', 'Firebase', 'TypeScript'],
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'A stunning architectural portfolio website featuring modern, sustainable designs and immersive 3D walkthroughs.',
    image: {
      id: 'project-3',
      url: 'https://picsum.photos/seed/proj3/600/400',
      hint: 'modern architecture'
    },
    link: '#',
    tags: ['Next.js', 'Three.js', 'Framer Motion'],
  },
  {
    id: 4,
    title: 'Project Delta',
    description: 'A full-featured e-commerce solution with a custom CMS, payment gateway integration, and personalized user experiences.',
    image: {
      id: 'project-4',
      url: 'https://picsum.photos/seed/proj4/600/400',
      hint: 'ecommerce website'
    },
    link: '#',
    tags: ['Vue.js', 'Stripe', 'PostgreSQL'],
  },
];

export const skills: Skill[] = [
  { name: 'React', icon: Layers },
  { name: 'Node.js', icon: Server },
  { name: 'TypeScript', icon: Code },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Docker', icon: Box },
  { name: 'Figma', icon: PenTool },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'deep-dive-into-react-hooks',
    title: 'A Deep Dive into React Hooks',
    summary: 'Explore the power and flexibility of React Hooks and how they can simplify your component logic and state management.',
    content: '<p>React Hooks, introduced in React 16.8, revolutionized how we write components. They allow you to use state and other React features without writing a class. In this post, we\'ll explore the most commonly used hooks like `useState`, `useEffect`, and `useContext`, and uncover some advanced patterns for building robust and maintainable applications.</p><p>We will cover custom hooks, performance optimizations with `useCallback` and `useMemo`, and state management strategies that can serve as alternatives to more complex libraries like Redux. By the end, you\'ll have a solid understanding of how to leverage hooks to write cleaner, more efficient React code.</p>',
    image: {
      id: 'blog-1',
      url: 'https://picsum.photos/seed/blog1/600/400',
      hint: 'coding screen'
    },
    publishedDate: '2024-05-15',
  },
  {
    slug: 'the-art-of-ui-ux-design',
    title: 'The Art of UI/UX Design',
    summary: 'Discover the fundamental principles of user interface and user experience design that lead to intuitive and engaging products.',
    content: '<p>Good design is not just about aesthetics; it\'s about creating a seamless and intuitive experience for the user. This article delves into the core principles of UI/UX design, from user research and wireframing to prototyping and usability testing.</p><p>We will discuss the importance of empathy in understanding user needs, the role of visual hierarchy and information architecture in guiding users, and how to use feedback to iterate and improve your designs. Whether you are a designer, developer, or product manager, these principles will help you create products that users love.</p>',
    image: {
      id: 'blog-2',
      url: 'https://picsum.photos/seed/blog2/600/400',
      hint: 'design desk'
    },
    publishedDate: '2024-04-22',
  },
  {
    slug: 'agile-methodologies-for-modern-teams',
    title: 'Agile Methodologies for Modern Teams',
    summary: 'Learn how agile frameworks like Scrum and Kanban can improve your team\'s productivity, collaboration, and adaptability.',
    content: '<p>In today\'s fast-paced world, agile methodologies have become essential for software development teams to deliver value quickly and efficiently. This post provides an overview of agile principles and explores popular frameworks like Scrum and Kanban.</p><p>We will compare their strengths and weaknesses, discuss key roles and ceremonies, and provide practical tips for implementing agile practices in your team. Learn how to foster a culture of continuous improvement, adapt to changing requirements, and deliver high-quality products that meet customer expectations.</p>',
    image: {
      id: 'blog-3',
      url: 'https://picsum.photos/seed/blog3/600/400',
      hint: 'team collaboration'
    },
    publishedDate: '2024-03-10',
  },
];
