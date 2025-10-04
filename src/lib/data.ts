
import { Code, Server, Database, Box, PenTool, Layers, type LucideIcon, Milestone, BookUser, Link2 } from 'lucide-react';
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
  githubLink?: string;
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
    title: 'Mental Health Wellness App',
    description: 'A comprehensive wellness application designed to support mental health through guided meditations, mood tracking, and access to professional resources.',
    image: {
      id: 'project-1',
      url: 'https://t4.ftcdn.net/jpg/04/03/08/59/360_F_403085949_SUWR380UnjUFb3xXj2d3lowOdUaGr9F9.jpg',
      hint: 'calm meditation'
    },
    link: 'https://studio-lovat-kappa-36.vercel.app/',
    githubLink: 'https://github.com/Akshith985',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
  },
  {
    id: 2,
    title: 'Stock Market App',
    description: 'A real-time stock market tracking application that allows users to monitor stock prices, view historical data, and manage their portfolio.',
    image: {
      id: 'project-2',
      url: 'https://media.istockphoto.com/id/1487894858/photo/candlestick-chart-and-data-of-financial-market.jpg?s=612x612&w=0&k=20&c=wZ6vVmbm4BV2JOePSnNNz-0aFVOJZ0P9nhdeOMGUg5I=',
      hint: 'stock chart'
    },
    link: 'https://studio1-mu.vercel.app/',
    githubLink: 'https://github.com/Akshith985',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker'],
  },
];

export const skills: Skill[] = [
  { name: 'Python', icon: Code },
  { name: 'JavaScript', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'Java', icon: Code },
  { name: 'HTML/CSS', icon: Code },
  { name: 'React', icon: Layers },
  { name: 'Next.js', icon: Layers },
  { name: 'Node.js', icon: Server },
  { name: 'Express.js', icon: Server },
  { name: 'Flask', icon: Server },
  { name: 'Tailwind CSS', icon: PenTool },
  { name: 'PostgreSQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'Firebase', icon: Database },
  { name: 'GCP', icon: Milestone },
  { name: 'Vercel', icon: Milestone },
  { name: 'Docker', icon: Box },
  { name: 'Git', icon: Link2 },
  { name: 'Figma', icon: PenTool },
  { name: 'Premiere Pro', icon: PenTool },
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
