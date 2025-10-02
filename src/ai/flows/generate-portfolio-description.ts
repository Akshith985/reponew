'use server';

/**
 * @fileOverview Generates compelling project descriptions using AI based on keywords or a summary.
 *
 * - generateProjectDescription -  A function that generates project descriptions.
 * - GenerateProjectDescriptionInput - The input type for the generateProjectDescription function.
 * - GenerateProjectDescriptionOutput - The return type for the generateProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  keywordsOrSummary: z
    .string()
    .describe('Keywords or a brief summary of the project.'),
});

export type GenerateProjectDescriptionInput = z.infer<
  typeof GenerateProjectDescriptionInputSchema
>;

const GenerateProjectDescriptionOutputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A compelling description of the project.'),
});

export type GenerateProjectDescriptionOutput = z.infer<
  typeof GenerateProjectDescriptionOutputSchema
>;

export async function generateProjectDescription(
  input: GenerateProjectDescriptionInput
): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: {schema: GenerateProjectDescriptionInputSchema},
  output: {schema: GenerateProjectDescriptionOutputSchema},
  prompt: `You are a marketing expert specializing in creating compelling project descriptions for portfolios.

  Based on the following keywords or summary, generate a captivating and concise project description.

  Keywords/Summary: {{{keywordsOrSummary}}}
  `,
});

const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
