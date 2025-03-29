
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/public/lovable-uploads/6ba2c667-afb3-4a33-831f-3ff7d9f8b7ef.png" 
            alt="SVN BAY PARCK Logo" 
            className="h-12 md:h-16"
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/plots" className="nav-link">Beachfront Plots</Link>
          <Link to="/cottages" className="nav-link">Luxury Cottages</Link>
          <Link to="/resort" className="nav-link">Resort</Link>
          <Link to="/amenities" className="nav-link">Amenities</Link>
          <Link to="/location" className="nav-link">Location</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
        
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
          <div className="flex flex-col p-4 space-y-4">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/plots" className="nav-link">Beachfront Plots</Link>
            <Link to="/cottages" className="nav-link">Luxury Cottages</Link>
            <Link to="/resort" className="nav-link">Resort</Link>
            <Link to="/amenities" className="nav-link">Amenities</Link>
            <Link to="/location" className="nav-link">Location</Link>
            <Link to="/gallery" className="nav-link">Gallery</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
