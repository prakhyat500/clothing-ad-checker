
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Check, CheckCircle2, BadgeCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const SignupPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'premium'>('free');

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white py-4">
        <div className="container mx-auto container-padding">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
              <ShieldCheck size={20} />
            </div>
            <h1 className="text-xl font-bold">TrustTrend</h1>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="font-bold text-3xl">Join TrustTrend Today</h2>
            <p className="text-muted-foreground mt-2">Choose the plan that works best for you</p>
          </div>
          
          {/* Plan Selection */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Free Plan */}
            <div 
              className={`border rounded-lg p-6 cursor-pointer transition-all ${
                selectedPlan === 'free' 
                  ? 'border-primary ring-2 ring-primary ring-opacity-50' 
                  : 'hover:border-primary/50'
              }`}
              onClick={() => setSelectedPlan('free')}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl">Free Plan</h3>
                  <p className="text-muted-foreground">Basic protection</p>
                </div>
                <Badge variant="default">Free</Badge>
              </div>
              
              <div className="mb-6">
                <p className="text-3xl font-bold">$0<span className="text-base font-normal text-muted-foreground">/month</span></p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ad Detection (5 scans/month)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Basic Analysis Results</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Brand Verification Access</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <span className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0">✕</span>
                  <span>AI Dress Styling</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <span className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0">✕</span>
                  <span>Virtual Try-On</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <span className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0">✕</span>
                  <span>Priority Support</span>
                </li>
              </ul>
              
              <div className="mt-auto">
                <button 
                  className={`w-full py-2 rounded-md font-medium ${
                    selectedPlan === 'free' 
                      ? 'bg-primary text-white' 
                      : 'bg-secondary text-foreground'
                  }`}
                >
                  {selectedPlan === 'free' ? 'Selected' : 'Select Plan'}
                </button>
              </div>
            </div>
            
            {/* Premium Plan */}
            <div 
              className={`border rounded-lg p-6 cursor-pointer transition-all ${
                selectedPlan === 'premium' 
                  ? 'border-primary ring-2 ring-primary ring-opacity-50' 
                  : 'hover:border-primary/50'
              }`}
              onClick={() => setSelectedPlan('premium')}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl">Premium Plan</h3>
                  <p className="text-muted-foreground">Full protection & features</p>
                </div>
                <Badge variant="premium">Premium</Badge>
              </div>
              
              <div className="mb-6">
                <p className="text-3xl font-bold">$9.99<span className="text-base font-normal text-muted-foreground">/month</span></p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Unlimited</strong> Ad Detection scans</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Advanced Analysis with detailed reports</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Brand Verification Access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>AI Dress Styling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Virtual Try-On</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Priority Support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Reporter Badge & Rewards</span>
                </li>
              </ul>
              
              <div className="mt-auto">
                <button 
                  className={`w-full py-2 rounded-md font-medium ${
                    selectedPlan === 'premium' 
                      ? 'bg-primary text-white' 
                      : 'bg-amber-500 text-white'
                  }`}
                >
                  {selectedPlan === 'premium' ? 'Selected' : 'Select Plan'}
                </button>
              </div>
            </div>
          </div>
          
          {/* Sign Up Form */}
          <div className="card">
            <div className="card-header">
              <h2 className="font-bold text-2xl">Create your account</h2>
              <p className="text-muted-foreground">Selected plan: {selectedPlan === 'premium' ? 'Premium' : 'Free'}</p>
            </div>
            <div className="card-content">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="username" className="block text-sm font-medium">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Choose a username"
                    required
                    className="input w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="input w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    required
                    minLength={8}
                    className="input w-full"
                  />
                  <p className="text-xs text-muted-foreground">
                    Password must be at least 8 characters long
                  </p>
                </div>
                <div className="space-y-2">
                  <label htmlFor="confirm-password" className="block text-sm font-medium">
                    Confirm Password
                  </label>
                  <input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm password"
                    required
                    minLength={8}
                    className="input w-full"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the{' '}
                    <a href="#" className="text-primary hover:underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                {selectedPlan === 'premium' && (
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-md">
                    <div className="flex items-center mb-2">
                      <BadgeCheck className="h-5 w-5 text-amber-500 mr-2" />
                      <h4 className="font-medium">Premium Features</h4>
                    </div>
                    <p className="text-sm text-amber-800">
                      You'll get immediate access to all premium features including reporter badges and exclusive rewards!
                    </p>
                  </div>
                )}
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Create Account
                </button>
              </form>
            </div>
            <div className="card-footer justify-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link to="/login" className="text-primary hover:underline font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t py-6">
        <div className="container mx-auto container-padding text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TrustTrend. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default SignupPage;
