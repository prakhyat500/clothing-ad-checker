
import React from 'react';
import { Link } from 'react-router-dom';

const UploadPage = () => {
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
              <Link to="/upload" className="font-medium text-primary">Upload</Link>
              <Link to="/results" className="font-medium text-muted-foreground hover:text-primary">Results</Link>
            </nav>
            <Link to="/login" className="btn btn-outline">
              Login
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 container mx-auto container-padding">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Upload Advertisement</h1>
            <p className="text-muted-foreground">
              Upload a clothing advertisement image to check its authenticity
            </p>
          </div>

          <div className="card">
            <div className="card-content">
              <form className="space-y-8">
                <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/60 transition-colors">
                  <input 
                    type="file" 
                    id="file-upload" 
                    className="hidden" 
                    accept="image/*" 
                    required
                  />
                  <label 
                    htmlFor="file-upload" 
                    className="cursor-pointer flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-medium">Drop your image here, or browse</p>
                      <p className="text-sm text-muted-foreground">Supports JPG, PNG and GIF up to 10MB</p>
                    </div>
                  </label>
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="block text-sm font-medium">
                    Description (optional)
                  </label>
                  <textarea
                    id="description"
                    placeholder="Enter additional details about the advertisement"
                    className="input min-h-[100px]"
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Source of the advertisement
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="source-social"
                        name="source"
                        className="text-primary focus:ring-primary"
                      />
                      <label htmlFor="source-social" className="text-sm">
                        Social Media
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="source-website"
                        name="source"
                        className="text-primary focus:ring-primary"
                      />
                      <label htmlFor="source-website" className="text-sm">
                        Website
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="source-email"
                        name="source"
                        className="text-primary focus:ring-primary"
                      />
                      <label htmlFor="source-email" className="text-sm">
                        Email
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="source-other"
                        name="source"
                        className="text-primary focus:ring-primary"
                      />
                      <label htmlFor="source-other" className="text-sm">
                        Other
                      </label>
                    </div>
                  </div>
                </div>

                <Link to="/results" className="btn btn-primary w-full">
                  Analyze Advertisement
                </Link>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t py-6">
        <div className="container mx-auto container-padding text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Fake Clothing Ad Detector. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default UploadPage;
