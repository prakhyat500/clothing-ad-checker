
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Eye, 
  LayoutDashboard, 
  Info, 
  Sparkles, 
  ShoppingBag,
  Menu,
  X,
  MessageSquare,
  LogOut,
  User
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    // Check login status whenever location changes
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    // If you want to redirect after logout, you can add that logic here
  };

  return (
    <header className="border-b bg-white py-4 sticky top-0 z-50">
      <div className="container mx-auto container-padding flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">AD</div>
            <h1 className="text-xl font-bold">AdDetector</h1>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link 
            to="/" 
            className={`font-medium hover:text-primary flex items-center gap-1 ${isActive('/') ? 'text-primary' : 'text-foreground'}`}
          >
            <Eye size={18} />
            <span>Home</span>
          </Link>
          <Link 
            to="/dashboard" 
            className={`font-medium hover:text-primary flex items-center gap-1 ${isActive('/dashboard') ? 'text-primary' : 'text-foreground'}`}
          >
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </Link>
          <Link 
            to="/about" 
            className={`font-medium hover:text-primary flex items-center gap-1 ${isActive('/about') ? 'text-primary' : 'text-foreground'}`}
          >
            <Info size={18} />
            <span>About</span>
          </Link>
          <Link 
            to="/features" 
            className={`font-medium hover:text-primary flex items-center gap-1 ${isActive('/features') ? 'text-primary' : 'text-foreground'}`}
          >
            <Sparkles size={18} />
            <span>Features</span>
          </Link>
          <Link 
            to="/brands" 
            className={`font-medium hover:text-primary flex items-center gap-1 ${isActive('/brands') ? 'text-primary' : 'text-foreground'}`}
          >
            <ShoppingBag size={18} />
            <span>Shop</span>
          </Link>
          <Link 
            to="/brand-reviews" 
            className={`font-medium hover:text-primary flex items-center gap-1 ${isActive('/brand-reviews') ? 'text-primary' : 'text-foreground'}`}
          >
            <MessageSquare size={18} />
            <span>Reviews</span>
          </Link>
        </nav>
        
        <div className="hidden md:flex space-x-2">
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="font-medium">User</span>
              </div>
              <button 
                onClick={handleLogout} 
                className="btn btn-outline flex items-center gap-1"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline">Login</Link>
              <Link to="/signup" className="btn btn-primary">Sign Up</Link>
            </>
          )}
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t absolute left-0 right-0 shadow-lg animate-fade-in">
          <div className="container mx-auto container-padding py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`font-medium py-2 hover:text-primary flex items-center gap-2 ${isActive('/') ? 'text-primary' : 'text-foreground'}`}
              onClick={toggleMenu}
            >
              <Eye size={18} />
              <span>Home</span>
            </Link>
            <Link 
              to="/dashboard" 
              className={`font-medium py-2 hover:text-primary flex items-center gap-2 ${isActive('/dashboard') ? 'text-primary' : 'text-foreground'}`}
              onClick={toggleMenu}
            >
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </Link>
            <Link 
              to="/about" 
              className={`font-medium py-2 hover:text-primary flex items-center gap-2 ${isActive('/about') ? 'text-primary' : 'text-foreground'}`}
              onClick={toggleMenu}
            >
              <Info size={18} />
              <span>About</span>
            </Link>
            <Link 
              to="/features" 
              className={`font-medium py-2 hover:text-primary flex items-center gap-2 ${isActive('/features') ? 'text-primary' : 'text-foreground'}`}
              onClick={toggleMenu}
            >
              <Sparkles size={18} />
              <span>Features</span>
            </Link>
            <Link 
              to="/brands" 
              className={`font-medium py-2 hover:text-primary flex items-center gap-2 ${isActive('/brands') ? 'text-primary' : 'text-foreground'}`}
              onClick={toggleMenu}
            >
              <ShoppingBag size={18} />
              <span>Shop</span>
            </Link>
            <Link 
              to="/brand-reviews" 
              className={`font-medium py-2 hover:text-primary flex items-center gap-2 ${isActive('/brand-reviews') ? 'text-primary' : 'text-foreground'}`}
              onClick={toggleMenu}
            >
              <MessageSquare size={18} />
              <span>Reviews</span>
            </Link>
            <div className="pt-2">
              {isLoggedIn ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 py-2">
                    <User size={18} />
                    <span className="font-medium">User</span>
                  </div>
                  <button 
                    onClick={() => {
                      handleLogout();
                      toggleMenu();
                    }} 
                    className="btn btn-outline w-full flex items-center justify-center gap-1"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/login" className="btn btn-outline w-full" onClick={toggleMenu}>Login</Link>
                  <div className="h-2"></div>
                  <Link to="/signup" className="btn btn-primary w-full" onClick={toggleMenu}>Sign Up</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
