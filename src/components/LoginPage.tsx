
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from "@/components/ui/toast";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the redirect path from location state, or default to '/'
  const from = location.state?.from?.pathname || '/';
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is a mock login implementation
    // In a real app, you would validate credentials against your backend
    if (email && password) {
      // Set logged in status in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      
      toast({
        title: "Login Successful",
        description: "You have been logged in.",
      });
      
      // Redirect to the page they were trying to access
      navigate(from, { replace: true });
    } else {
      toast({
        title: "Login Failed",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white py-4">
        <div className="container mx-auto container-padding">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">AD</div>
            <h1 className="text-xl font-bold">AdDetector</h1>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="card">
            <div className="card-header">
              <h2 className="font-bold text-2xl">Login</h2>
              <p className="text-muted-foreground">Welcome back! Please enter your details.</p>
            </div>
            <div className="card-content">
              <form className="space-y-4" onSubmit={handleSubmit}>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="block text-sm font-medium">
                      Password
                    </label>
                    <Link to="/reset-password" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    minLength={8}
                    className="input w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="remember" className="text-sm text-muted-foreground">
                    Remember me
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Sign in
                </button>
              </form>
            </div>
            <div className="card-footer justify-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/signup" className="text-primary hover:underline font-medium">
                  Sign up
                </Link>
              </p>
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

export default LoginPage;
