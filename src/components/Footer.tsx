
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="/public/lovable-uploads/6ba2c667-afb3-4a33-831f-3ff7d9f8b7ef.png" 
              alt="SVN BAY PARCK Logo" 
              className="h-16 mb-4"
            />
            <p className="mb-4">Your dream beachfront property awaits at SVN BAY PARCK, where luxury meets the pristine shores of the Bay of Bengal.</p>
            <p className="text-secondary font-bold">AP RERA NO: P01070381701</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/plots" className="hover:text-secondary transition-colors">Beachfront Plots</Link></li>
              <li><Link to="/cottages" className="hover:text-secondary transition-colors">Luxury Cottages</Link></li>
              <li><Link to="/resort" className="hover:text-secondary transition-colors">Resort</Link></li>
              <li><Link to="/amenities" className="hover:text-secondary transition-colors">Amenities</Link></li>
              <li><Link to="/gallery" className="hover:text-secondary transition-colors">Gallery</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 shrink-0 mt-1" size={18} />
                <span>Koshta Junction, Srikakulam, Andhra Pradesh</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 shrink-0" size={18} />
                <span>+91 85999 24242 / 85999 36363</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 shrink-0" size={18} />
                <span>info@svnsjd.com</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white text-gray-900 p-2 rounded-full hover:bg-secondary transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="bg-white text-gray-900 p-2 rounded-full hover:bg-secondary transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="bg-white text-gray-900 p-2 rounded-full hover:bg-secondary transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Maps</h3>
            <a 
              href="https://g.co/kgs/SvyjZS4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="border-2 border-secondary p-4 rounded-lg mb-3 text-center">
                <MapPin size={32} className="mx-auto mb-2 text-secondary" />
                <span className="text-lg">View Location Map</span>
              </div>
              <span className="text-sm text-gray-400">Click to open Google Maps</span>
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400">Images in this presentation are for illustrative purposes only. Layout, specifications and facilities are subject to change.</p>
          <p className="text-sm text-gray-400 mt-2">© {new Date().getFullYear()} SVN BAY PARCK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
