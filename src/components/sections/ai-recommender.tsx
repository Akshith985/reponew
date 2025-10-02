'use client';

import { useState } from 'react';
import { Wand2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getAiRecommendation } from '@/app/actions';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AiRecommender() {
  const [recommendation, setRecommendation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRecommendation = async () => {
    setIsLoading(true);
    setError('');
    setRecommendation('');
    const result = await getAiRecommendation();
    setIsLoading(false);
    if (result.success) {
      setRecommendation(result.recommendation);
    } else {
      setError(result.error || 'An unexpected error occurred.');
    }
  };

  return (
    <section id="ai-recommender" className="bg-background">
      <div className="container text-center">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline flex items-center justify-center gap-3">
            <Wand2 className="h-8 w-8 text-primary" /> For You: AI Recommendations
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Click the button to get personalized project recommendations based on a simulated user journey.
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <Button size="lg" onClick={handleRecommendation} disabled={isLoading} className="transition-transform duration-300 hover:scale-105">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Analyzing...
              </>
            ) : (
              'Generate My Recommendation'
            )}
          </Button>
        </div>

        {error && (
            <Alert variant="destructive" className="max-w-2xl mx-auto text-left">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}

        {recommendation && (
          <div className="mt-8 flex justify-center">
            <Card className="max-w-2xl w-full text-left animate-in fade-in-50 duration-500">
              <CardHeader>
                <CardTitle className="font-headline">Personalized Suggestion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{recommendation}</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
