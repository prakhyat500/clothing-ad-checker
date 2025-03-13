
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, AlertTriangle, CheckCircle, XCircle, Info } from 'lucide-react';
import type { AnalysisResult } from '../utils/imageAnalysis';

interface StoredResult extends AnalysisResult {
  imageUrl: string;
  metadata: {
    filename: string;
    filesize: number;
    filetype: string;
    source: string;
    description?: string;
  };
}

const ResultsPage = () => {
  const [result, setResult] = useState<StoredResult | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Get analysis result from session storage
    const storedResult = sessionStorage.getItem('analysisResult');
    
    if (storedResult) {
      try {
        setResult(JSON.parse(storedResult));
      } catch (e) {
        console.error("Failed to parse stored result:", e);
      }
    }
    
    setLoading(false);
  }, []);
  
  // Format size in KB or MB
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };
  
  // If no result is available, show a message
  if (!loading && !result) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="border-b bg-white py-4">
          <div className="container mx-auto container-padding">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  <ShieldCheck size={20} />
                </div>
                <h1 className="text-xl font-bold">TrustTrend</h1>
              </Link>
              <nav className="hidden md:flex space-x-4">
                <Link to="/" className="font-medium text-muted-foreground hover:text-primary">Home</Link>
                <Link to="/upload" className="font-medium text-muted-foreground hover:text-primary">Upload</Link>
                <Link to="/results" className="font-medium text-primary">Results</Link>
              </nav>
              <Link to="/login" className="btn btn-outline">
                Login
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1 py-12 container mx-auto container-padding text-center">
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <AlertTriangle size={48} className="mx-auto text-amber-500" />
            </div>
            <h1 className="text-2xl font-bold mb-4">No Analysis Results</h1>
            <p className="text-muted-foreground mb-8">
              You haven't analyzed any advertisements yet. Upload an image to get started.
            </p>
            <Link to="/upload" className="btn btn-primary">
              Upload an Advertisement
            </Link>
          </div>
        </main>

        <footer className="bg-white border-t py-6">
          <div className="container mx-auto container-padding text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} TrustTrend. All rights reserved.
          </div>
        </footer>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white py-4">
        <div className="container mx-auto container-padding">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                <ShieldCheck size={20} />
              </div>
              <h1 className="text-xl font-bold">TrustTrend</h1>
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link to="/" className="font-medium text-muted-foreground hover:text-primary">Home</Link>
              <Link to="/upload" className="font-medium text-muted-foreground hover:text-primary">Upload</Link>
              <Link to="/results" className="font-medium text-primary">Results</Link>
            </nav>
            <Link to="/login" className="btn btn-outline">
              Login
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 container mx-auto container-padding">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : result && (
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link to="/upload" className="inline-flex items-center text-primary hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Upload
              </Link>
            </div>

            <div className="card mb-8">
              <div className="card-header">
                <h1 className="text-3xl font-bold mb-2">Analysis Results</h1>
                <p className="text-muted-foreground">
                  Here's what we found about the advertisement you submitted
                </p>
              </div>
              <div className="card-content">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <div className="rounded-lg overflow-hidden border">
                      <img 
                        src={result.imageUrl} 
                        alt="Uploaded advertisement" 
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="mt-4 text-sm text-muted-foreground space-y-1">
                      <p><strong>Filename:</strong> {result.metadata.filename}</p>
                      <p><strong>Size:</strong> {formatFileSize(result.metadata.filesize)}</p>
                      <p><strong>Source:</strong> {result.metadata.source.charAt(0).toUpperCase() + result.metadata.source.slice(1)}</p>
                      {result.metadata.description && (
                        <p><strong>Description:</strong> {result.metadata.description}</p>
                      )}
                    </div>
                  </div>
                  <div className="md:w-1/2 space-y-6">
                    <div className={`rounded-lg p-4 flex items-center space-x-3 ${result.isAuthentic ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${result.isAuthentic ? 'bg-green-100' : 'bg-red-100'}`}>
                        {result.isAuthentic ? (
                          <CheckCircle className="h-6 w-6" />
                        ) : (
                          <XCircle className="h-6 w-6" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">{result.isAuthentic ? 'Authentic Advertisement' : 'Fake Advertisement Detected'}</h3>
                        <p className="text-sm">
                          {result.isAuthentic 
                            ? 'This advertisement appears to be legitimate.' 
                            : 'Our analysis suggests this advertisement may be fraudulent.'}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold">Analysis Details</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Brand Consistency</span>
                          <span className="text-sm font-medium">
                            {result.brandConsistency < 0.3 ? 'Very Low' : 
                             result.brandConsistency < 0.5 ? 'Low' :
                             result.brandConsistency < 0.7 ? 'Medium' :
                             result.brandConsistency < 0.9 ? 'High' : 'Very High'}
                          </span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              result.brandConsistency < 0.3 ? 'bg-red-500' :
                              result.brandConsistency < 0.5 ? 'bg-orange-500' :
                              result.brandConsistency < 0.7 ? 'bg-yellow-500' :
                              'bg-green-500'
                            }`} 
                            style={{ width: `${result.brandConsistency * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Image Quality</span>
                          <span className="text-sm font-medium">
                            {result.imageQuality < 0.3 ? 'Very Low' : 
                             result.imageQuality < 0.5 ? 'Low' :
                             result.imageQuality < 0.7 ? 'Medium' :
                             result.imageQuality < 0.9 ? 'High' : 'Very High'}
                          </span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              result.imageQuality < 0.3 ? 'bg-red-500' :
                              result.imageQuality < 0.5 ? 'bg-orange-500' :
                              result.imageQuality < 0.7 ? 'bg-yellow-500' :
                              'bg-green-500'
                            }`} 
                            style={{ width: `${result.imageQuality * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Price Analysis</span>
                          <span className="text-sm font-medium">
                            {result.priceAnalysis < 0.3 ? 'Very Low' : 
                             result.priceAnalysis < 0.5 ? 'Low' :
                             result.priceAnalysis < 0.7 ? 'Medium' :
                             result.priceAnalysis < 0.9 ? 'High' : 'Very High'}
                          </span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              result.priceAnalysis < 0.3 ? 'bg-red-500' :
                              result.priceAnalysis < 0.5 ? 'bg-orange-500' :
                              result.priceAnalysis < 0.7 ? 'bg-yellow-500' :
                              'bg-green-500'
                            }`} 
                            style={{ width: `${result.priceAnalysis * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="font-semibold">Red Flags Identified</h3>
                </div>
                <div className="card-content">
                  <ul className="space-y-2">
                    {result.redFlags.map((flag, index) => (
                      <li key={index} className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{flag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h3 className="font-semibold">Recommendations</h3>
                </div>
                <div className="card-content">
                  <ul className="space-y-2">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <Info className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {result.predictions.length > 0 && (
              <div className="card mt-6">
                <div className="card-header">
                  <h3 className="font-semibold">AI Detection Details</h3>
                  <p className="text-sm text-muted-foreground">
                    TensorFlow.js MobileNet model classification results
                  </p>
                </div>
                <div className="card-content">
                  <div className="space-y-4">
                    <p className="text-sm">
                      Our AI model analyzed your image and detected the following items:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {result.predictions.map((pred, index) => (
                        <div key={index} className="flex items-center space-x-3 border p-3 rounded-lg">
                          <div className="w-2 h-10 bg-primary rounded-full"></div>
                          <div>
                            <p className="font-medium">{pred.className}</p>
                            <p className="text-sm text-muted-foreground">
                              Confidence: {(pred.probability * 100).toFixed(1)}%
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 text-center">
              <Link to="/upload" className="btn btn-primary">
                Analyze Another Advertisement
              </Link>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white border-t py-6 mt-12">
        <div className="container mx-auto container-padding text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TrustTrend. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ResultsPage;
