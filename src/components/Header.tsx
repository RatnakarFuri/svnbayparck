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
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img alt="SVN BAY PARCK Logo" src="/lovable-uploads/4ef0b4a4-efaf-44f0-b39c-cb57a9f92c3c.png" className="h-10 md:h-10 object-fill" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/plots" className="nav-link">Plots</Link>
          <Link to="/cottages" className="nav-link">Cottages</Link>
          <Link to="/resort" className="nav-link">Resort</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/contact" className="nav-link btn-primary">Contact</Link>
        </nav>
        
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden bg-white/80 backdrop-blur-md p-2 rounded-lg text-secondary shadow-sm">
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {isMobileMenuOpen && <div className="md:hidden bg-white/95 backdrop-blur-lg absolute top-full left-0 right-0 shadow-sm">
          <div className="flex flex-col p-5 space-y-4">
            <Link to="/" className="nav-link text-lg">Home</Link>
            <Link to="/about" className="nav-link text-lg">About</Link>
            <Link to="/plots" className="nav-link text-lg">Plots</Link>
            <Link to="/cottages" className="nav-link text-lg">Cottages</Link>
            <Link to="/resort" className="nav-link text-lg">Resort</Link>
            <Link to="/gallery" className="nav-link text-lg">Gallery</Link>
            <Link to="/contact" className="btn-primary text-center text-lg">Contact</Link>
          </div>
        </div>}
    </header>;
};
export default Header;