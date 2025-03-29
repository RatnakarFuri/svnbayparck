
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <img 
              src="/public/lovable-uploads/6ba2c667-afb3-4a33-831f-3ff7d9f8b7ef.png" 
              alt="SVN BAY PARCK Logo" 
              className="h-12 mb-6"
            />
            <p className="mb-6 text-gray-300 max-w-md">
              Your dream beachfront property awaits at SVN BAY PARCK, where luxury meets the pristine shores of the Bay of Bengal.
            </p>
            <div className="bg-primary/20 rounded-xl px-4 py-3 inline-block">
              <p className="text-primary-light font-medium">AP RERA NO: P01070381701</p>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-medium mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/plots" className="text-gray-300 hover:text-white transition-colors">Beachfront Plots</Link></li>
              <li><Link to="/cottages" className="text-gray-300 hover:text-white transition-colors">Luxury Cottages</Link></li>
              <li><Link to="/resort" className="text-gray-300 hover:text-white transition-colors">Resort</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-medium mb-6">Learn More</h3>
            <ul className="space-y-4">
              <li><Link to="/amenities" className="text-gray-300 hover:text-white transition-colors">Amenities</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 shrink-0 mt-1 text-primary-light" size={18} />
                <span className="text-gray-300">Koshta Junction, Srikakulam, Andhra Pradesh</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 shrink-0 text-primary-light" size={18} />
                <span className="text-gray-300">+91 85999 24242 / 85999 36363</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 shrink-0 text-primary-light" size={18} />
                <span className="text-gray-300">info@svnsjd.com</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 hover:bg-primary-light hover:text-secondary p-3 rounded-full transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="bg-white/10 hover:bg-primary-light hover:text-secondary p-3 rounded-full transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="bg-white/10 hover:bg-primary-light hover:text-secondary p-3 rounded-full transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              Images in this presentation are for illustrative purposes only. Layout, specifications and facilities are subject to change.
            </p>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SVN BAY PARCK. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
