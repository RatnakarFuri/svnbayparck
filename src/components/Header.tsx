
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/public/lovable-uploads/6ba2c667-afb3-4a33-831f-3ff7d9f8b7ef.png" 
            alt="SVN BAY PARCK Logo" 
            className="h-10 md:h-12"
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-10">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/plots" className="nav-link">Plots</Link>
          <Link to="/cottages" className="nav-link">Cottages</Link>
          <Link to="/resort" className="nav-link">Resort</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/contact" className="nav-link btn-primary">Contact</Link>
        </nav>
        
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="md:hidden bg-white/80 backdrop-blur-md p-2 rounded-xl text-secondary shadow-sm"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg absolute top-full left-0 right-0 shadow-sm">
          <div className="flex flex-col p-6 space-y-6">
            <Link to="/" className="nav-link text-lg">Home</Link>
            <Link to="/about" className="nav-link text-lg">About</Link>
            <Link to="/plots" className="nav-link text-lg">Plots</Link>
            <Link to="/cottages" className="nav-link text-lg">Cottages</Link>
            <Link to="/resort" className="nav-link text-lg">Resort</Link>
            <Link to="/gallery" className="nav-link text-lg">Gallery</Link>
            <Link to="/contact" className="btn-primary text-center text-lg">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
