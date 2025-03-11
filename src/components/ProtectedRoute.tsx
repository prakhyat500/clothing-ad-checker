
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from "@/components/ui/toast";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

// This is a simplified implementation since we don't have a real auth system yet
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();
  
  // Check if the user is logged in (this is just a mock implementation)
  // In a real app, you would check if the user is authenticated using your auth system
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  if (!isLoggedIn) {
    // Show a toast notification
    toast({
      title: "Authentication Required",
      description: "You need to sign in to access this page.",
      variant: "destructive",
    });
    
    // Redirect to login page while preserving the intended destination
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;
