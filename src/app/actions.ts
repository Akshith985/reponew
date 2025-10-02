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

    const userBehaviorData =
      'User spent 2 minutes on the homepage, clicked on "Project Alpha" and "Project Gamma", and spent 30 seconds reading the "About Me" section.';

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
