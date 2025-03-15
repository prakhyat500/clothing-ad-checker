
import React, { useState } from 'react';
import { toast } from "@/hooks/use-toast";
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const WebsiteAnalyzer = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{
    isTrustworthy: boolean;
    score: number;
    issues: string[];
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a website URL",
        variant: "destructive",
      });
      return;
    }
    
    // Validate URL format
    try {
      new URL(url);
    } catch (e) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid website URL",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate analysis result - in a real app, this would come from an API
      const mockResult = {
        isTrustworthy: Math.random() > 0.5,
        score: Math.floor(Math.random() * 100),
        issues: Math.random() > 0.5 ? 
          ["Suspicious product claims", "Unrealistic discounts", "Missing contact information"] : 
          [],
      };
      
      setAnalysisResult(mockResult);
      
      toast({
        title: "Analysis Complete",
        description: "Website analysis has been completed successfully",
      });
    } catch (error) {
      console.error('Error analyzing website:', error);
      toast({
        title: "Analysis Failed",
        description: "Failed to analyze the website. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Website Trustworthiness Analyzer</CardTitle>
          <CardDescription>
            Enter a clothing store URL to analyze its trustworthiness
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-2">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="input flex-1"
                disabled={isLoading}
              />
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isLoading}
              >
                {isLoading ? "Analyzing..." : "Analyze"}
              </button>
            </div>
          </form>
          
          {analysisResult && (
            <div className="mt-6 space-y-4">
              <div className={`flex items-center gap-2 p-3 rounded-md ${
                analysisResult.isTrustworthy ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              }`}>
                {analysisResult.isTrustworthy ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <AlertTriangle className="h-5 w-5" />
                )}
                <span className="font-medium">
                  {analysisResult.isTrustworthy 
                    ? 'This website appears to be trustworthy' 
                    : 'This website may have trust issues'}
                </span>
              </div>
              
              <div>
                <p className="mb-2">Trust Score: <span className="font-bold">{analysisResult.score}/100</span></p>
                
                {analysisResult.issues.length > 0 && (
                  <div className="mt-4">
                    <p className="font-medium mb-2">Potential Issues:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      {analysisResult.issues.map((issue, index) => (
                        <li key={index}>{issue}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default WebsiteAnalyzer;
