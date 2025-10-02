'use server';

/**
 * @fileOverview AI-powered content recommendation flow.
 *
 * - recommendContent - A function that recommends content based on user behavior.
 * - ContentRecommendationInput - The input type for the recommendContent function.
 * - ContentRecommendationOutput - The return type for the recommendContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentRecommendationInputSchema = z.object({
  userBehaviorData: z
    .string()
    .describe(
      'A string containing data about the user behavior on the portfolio website, including pages visited, time spent on each project, and other relevant actions.'
    ),
  availableProjects: z
    .string()
    .describe(
      'A string containing available projects, including their descriptions, images, and links.'
    ),
});

export type ContentRecommendationInput = z.infer<
  typeof ContentRecommendationInputSchema
>;

const ContentRecommendationOutputSchema = z.object({
  recommendedContent: z
    .string()
    .describe('A string containing the recommended content and projects.'),
});

export type ContentRecommendationOutput = z.infer<
  typeof ContentRecommendationOutputSchema
>;

export async function recommendContent(
  input: ContentRecommendationInput
): Promise<ContentRecommendationOutput> {
  return recommendContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contentRecommendationPrompt',
  input: {schema: ContentRecommendationInputSchema},
  output: {schema: ContentRecommendationOutputSchema},
  prompt: `You are an AI assistant designed to analyze user behavior data on a portfolio website and recommend relevant content and projects to improve user engagement.

  Analyze the following user behavior data:
  {{userBehaviorData}}

  Given the following available projects:
  {{availableProjects}}

  Recommend content and projects that would be most relevant to the user based on their behavior. Explain why you are recommending this content and how it aligns with their interests.
  Be brief. Return only the content recommendation.
  `,
});

const recommendContentFlow = ai.defineFlow(
  {
    name: 'recommendContentFlow',
    inputSchema: ContentRecommendationInputSchema,
    outputSchema: ContentRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
