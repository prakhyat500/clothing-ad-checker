
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { ShieldCheck } from 'lucide-react';

const HomePage = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 container mx-auto container-padding">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="font-bold">Spot Fake Clothing Ads with TrustTrend</h1>
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
            <h2 className="font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our tools designed to make your online clothing shopping safer and more reliable.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="card-header">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold">Authentic Shopping</h3>
              </div>
              <div className="card-content">
                <p className="text-muted-foreground">
                  Shop with confidence knowing you can verify clothing ads before purchase.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="font-semibold">Community Feedback</h3>
              </div>
              <div className="card-content">
                <p className="text-muted-foreground">
                  Read and share experiences with different clothing brands and products.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold">Brand Verification</h3>
              </div>
              <div className="card-content">
                <p className="text-muted-foreground">
                  Check if brands are legitimate and trustworthy before making purchases.
                </p>
                <div className="mt-4">
                  <Link to="/brands" className="text-primary hover:underline font-medium text-sm">
                    View brand database →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
