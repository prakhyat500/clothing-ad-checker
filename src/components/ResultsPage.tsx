
import React from 'react';
import { Link } from 'react-router-dom';

const ResultsPage = () => {
  // For demo purposes we'll show a fake result
  const isAuthentic = false;
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white py-4">
        <div className="container mx-auto container-padding">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">AD</div>
              <h1 className="text-xl font-bold">AdDetector</h1>
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
                    {/* Placeholder for the uploaded image */}
                    <div className="aspect-video bg-secondary flex items-center justify-center">
                      <span className="text-muted-foreground">Uploaded Image</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 space-y-6">
                  <div className={`rounded-lg p-4 flex items-center space-x-3 ${isAuthentic ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isAuthentic ? 'bg-green-100' : 'bg-red-100'}`}>
                      {isAuthentic ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold">{isAuthentic ? 'Authentic Advertisement' : 'Fake Advertisement Detected'}</h3>
                      <p className="text-sm">
                        {isAuthentic 
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
                        <span className="text-sm font-medium">Low</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Image Quality</span>
                        <span className="text-sm font-medium">Medium</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Price Analysis</span>
                        <span className="text-sm font-medium">Very Low</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '10%' }}></div>
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
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Unusually low price for this type of product</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Inconsistent logo placement compared to authentic brand materials</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Image shows signs of digital manipulation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="font-semibold">Recommendations</h3>
              </div>
              <div className="card-content">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Avoid purchasing from this source</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Report this advertisement to the platform where you found it</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Check the official brand website or authorized retailers for authentic products</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/upload" className="btn btn-primary">
              Analyze Another Advertisement
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t py-6 mt-12">
        <div className="container mx-auto container-padding text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Fake Clothing Ad Detector. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ResultsPage;
