
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white py-4">
        <div className="container mx-auto container-padding flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">AD</div>
            <h1 className="text-xl font-bold">AdDetector</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="font-medium text-foreground hover:text-primary">Home</Link>
            <Link to="/about" className="font-medium text-muted-foreground hover:text-primary">About</Link>
            <Link to="/contact" className="font-medium text-muted-foreground hover:text-primary">Contact</Link>
          </nav>
          <div className="flex space-x-2">
            <Link to="/login" className="btn btn-outline">Login</Link>
            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-16 md:py-24 container mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="font-bold">Spot Fake Clothing Ads with Confidence</h1>
              <p className="text-lg text-muted-foreground">
                Our cutting-edge tool helps you identify deceptive clothing advertisements before you make a purchase.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/upload" className="btn btn-primary">Try It Now</Link>
                <Link to="/signup" className="btn btn-outline">Create Account</Link>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-accent/5 p-8 flex items-center justify-center">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border">
                <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                  <div className="text-5xl text-muted-foreground/30">Ad Image</div>
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-medium text-green-600 border border-green-200 shadow-sm">
                  Authentic ✓
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our advanced system analyzes clothing advertisements to detect signs of fraudulent marketing.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card">
                <div className="card-header">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">1</div>
                  <h3 className="font-semibold">Upload Ad Image</h3>
                </div>
                <div className="card-content">
                  <p className="text-muted-foreground">
                    Simply upload the advertisement image you want to analyze.
                  </p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-header">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">2</div>
                  <h3 className="font-semibold">Analysis Process</h3>
                </div>
                <div className="card-content">
                  <p className="text-muted-foreground">
                    Our system examines various aspects of the advertisement.
                  </p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-header">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">3</div>
                  <h3 className="font-semibold">Get Results</h3>
                </div>
                <div className="card-content">
                  <p className="text-muted-foreground">
                    Receive a detailed report about the authenticity of the advertisement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t py-8">
        <div className="container mx-auto container-padding">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">AD</div>
              <span className="font-medium">AdDetector</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Fake Clothing Ad Detector. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
