'use server';

import { recommendContent } from '@/ai/flows/ai-powered-content-recommendation';
import { projects } from '@/lib/data';

export async function getAiRecommendation() {
  try {
    const availableProjects = projects
      .map(
        (p) =>
          `Title: ${p.title}\nDescription: ${p.description}\nTags: ${p.tags.join(', ')}`
      )
      .join('\n\n');

    const userJourneys = [
      'User spent 2 minutes on the homepage, clicked on "Project Alpha" and "Project Gamma", and spent 30 seconds reading the "About Me" section.',
      'User landed directly on the "Hyperlocal Marketplace Aggregator" project page from a search engine, spent 3 minutes reading, then navigated to the "Contact" page.',
      'User browsed all available projects, spending roughly a minute on each, then revisited the "Mental Health Wellness App" for another 2 minutes.',
      'User read the "Deep Dive into React Hooks" blog post, then navigated to the projects section to look for React-based projects.',
      'User spent 5 minutes on the Code Playground section before exploring any other part of the site.'
    ];

    const userBehaviorData = userJourneys[Math.floor(Math.random() * userJourneys.length)];


    const result = await recommendContent({
      availableProjects,
      userBehaviorData,
    });
    return { success: true, recommendation: result.recommendedContent };
  } catch (error) {
    console.error('AI recommendation failed:', error);
    return { success: false, error: 'Failed to generate recommendation.' };
  }
}
