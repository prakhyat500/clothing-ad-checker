
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const SignupPage = () => {
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
        <div className="w-full max-w-md">
          <div className="card">
            <div className="card-header">
              <h2 className="font-bold text-2xl">Create an account</h2>
              <p className="text-muted-foreground">Sign up to get started with AdDetector</p>
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
