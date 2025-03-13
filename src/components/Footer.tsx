
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t py-8">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                <ShieldCheck size={16} />
              </div>
              <span className="font-medium">TrustTrend</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Our cutting-edge technology helps you identify deceptive clothing advertisements before you make a purchase.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-base">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link to="/dashboard" className="text-sm text-muted-foreground hover:text-primary">Dashboard</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link to="/features" className="text-sm text-muted-foreground hover:text-primary">Features</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-base">Features</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-sm text-muted-foreground hover:text-primary">Ad Detection</Link></li>
              <li><Link to="/features" className="text-sm text-muted-foreground hover:text-primary">AI Dress Styling</Link></li>
              <li><Link to="/features" className="text-sm text-muted-foreground hover:text-primary">Virtual Try-On</Link></li>
              <li><Link to="/brands" className="text-sm text-muted-foreground hover:text-primary">Shop Brands</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-base">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">support@addetector.com</li>
              <li className="text-sm text-muted-foreground">+1 (555) 123-4567</li>
              <li className="text-sm text-muted-foreground">123 Tech Street, San Francisco, CA 94107</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TrustTrend. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
