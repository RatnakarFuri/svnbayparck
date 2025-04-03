import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CircleCheck, Building, Users, Award, DollarSign, Percent, Heart, Waves, UtensilsCrossed, Dumbbell, Gamepad, Umbrella, ShieldCheck, Phone, Mail, MessageCircle } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import FeatureCard from '@/components/FeatureCard';
import ContactForm from '@/components/ContactForm';
import AmenityIcon from '@/components/AmenityIcon';
import Section from '@/components/Section';
import InfoCard from '@/components/InfoCard';
import { Card } from '@/components/ui/card';
const Home = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918599936363', '_blank');
  };
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url("/public/lovable-uploads/6e3e46c5-ac95-4a9b-ae3f-d2a2b36e7f90.png")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="container-custom text-center text-white z-10">
          <h1 className="text-3xl md:text-5xl font-medium mb-4 leading-tight animate-fade-in max-w-4xl mx-auto lg:text-5xl">
            Beachfront Plots & Villas | Luxury Resort
          </h1>
          <p style={{
          animationDelay: '0.3s'
        }} className="text-lg md:text-2xl font-calligraphy mb-6 animate-fade-in font-medium lg:text-5xl">
            Your life by the sea.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-3 animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            <Link to="/plots" className="btn-primary flex items-center justify-center gap-2">
              Explore Beachfront Plots <ArrowRight size={16} />
            </Link>
            <Link to="/cottages" className="btn-secondary flex items-center justify-center gap-2">
              Discover Luxury Cottages <ArrowRight size={16} />
            </Link>
            <button onClick={handleWhatsAppClick} className="btn-outline flex items-center justify-center gap-2">
              Chat on WhatsApp <MessageCircle size={16} />
            </button>
          </div>
        </div>
      </section>
      
      {/* Key Highlights Section */}
      <Section background="light">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 text-center">
            <MapPin size={36} className="text-primary mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Prime Location</h3>
            <p className="text-gray-600 text-sm">Beachfront Plots & Villas in Koshta Junction, Srikakulam, Andhra Pradesh</p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <Building size={36} className="text-primary mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Expansive Development</h3>
            <p className="text-gray-600 text-sm">25 Acres of Beach Front Plots & 15 Acres of Luxury Resort & Premium Cottages</p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <ShieldCheck size={36} className="text-primary mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">RERA Approved</h3>
            <p className="text-gray-600 text-sm">AP RERA NO: P01070381701</p>
          </div>
        </div>
      </Section>
      
      {/* About Section */}
      <Section background="white">
        <SectionTitle title="About SVN BAY PARCK" subtitle="Experience luxury beachfront living in a world-class gated community" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-4 text-base leading-relaxed">
              Set on the pristine shores of the Bay of Bengal, SVN BAY PARCK is an unprecedented concept, centered on celebrating contemporary lifestyle. This 40-acre gated community development with a stunning view of the seashore comprises a world-class resort with Beachfront Serviced Villas replete with all kinds of leisure amenities and 206 premium beach plots.
            </p>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              The development combines the best of luxury living with the natural beauty of coastal Andhra Pradesh, providing an unmatched investment opportunity and lifestyle choice for discerning buyers.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <InfoCard icon={<Building size={18} />} title="Beach Plots" value="206" />
              <InfoCard icon={<MapPin size={18} />} title="Total Area" value="40 Acres" />
            </div>
            
            <div className="mt-8">
              <Link to="/about" className="btn-primary flex items-center w-fit gap-2">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img alt="SVN BAY PARCK Beachfront View" className="object-cover w-full aspect-[4/3]" src="/lovable-uploads/01cbab13-33c9-47f4-aca9-03c2edde5628.jpg" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-white p-3 rounded-lg shadow-md">
              <p className="text-base font-medium">206</p>
              <p className="text-xs">Premium Beach Plots</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-secondary text-white p-3 rounded-lg shadow-md">
              <p className="text-base font-medium">40</p>
              <p className="text-xs">Acres Gated Community</p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Beachfront Plots Section */}
      <Section background="light">
        <SectionTitle title="Beach Front Plots" subtitle="Premium beachfront plots with convenient sizes and luxury amenities" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="glass-card p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 rounded-lg bg-primary/5">
                  <p className="text-2xl font-medium text-primary mb-1">206</p>
                  <p className="text-xs text-gray-600">Total Plots</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/5">
                  <p className="text-2xl font-medium text-primary mb-1">25</p>
                  <p className="text-xs text-gray-600">Acres Extent</p>
                </div>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-primary/5 mb-6">
                <p className="text-lg font-medium text-primary mb-1">200-267 Sq Yds</p>
                <p className="text-xs text-gray-600">Plot Sizes</p>
              </div>
              
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <CircleCheck size={16} className="text-primary shrink-0 mt-1 mr-2" />
                  <span className="text-gray-600">Pre-demarcated plots with convenient sizes</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck size={16} className="text-primary shrink-0 mt-1 mr-2" />
                  <span className="text-gray-600">Option to purchase multiple adjoining plots</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck size={16} className="text-primary shrink-0 mt-1 mr-2" />
                  <span className="text-gray-600">Option to build villa on plot as per guidelines</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck size={16} className="text-primary shrink-0 mt-1 mr-2" />
                  <span className="text-gray-600">Outside Coastal Regulation Zone</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck size={16} className="text-primary shrink-0 mt-1 mr-2" />
                  <span className="text-gray-600">Access to resort amenities with ownership</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <blockquote className="text-2xl font-light text-gray-500 mb-6 italic leading-relaxed">"A Beachfront Plot, A Lifetime of Views."</blockquote>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Exclusive beachfront plots with top-notch amenities make weekends here seem surreal. These pre-demarcated plots come in a range of convenient, practical areas, spanning from 200 to 267 sq yds. If you feel the need for more space, you can always choose more than one plot.
            </p>
            <div className="mt-8">
              <Link to="/plots" className="btn-primary flex items-center w-fit gap-2">
                View Beachfront Plots <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Luxury Cottages Section */}
      <Section background="white">
        <SectionTitle title="Premium Cottages" subtitle="Contemporary-styled luxury cottages with panoramic sea views" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Our luxury resort cottages are luxurious slices of paradise with contemporary-styled living spaces offering panoramic views of the sea. Each cottage is designed to provide the utmost comfort while blending seamlessly with the natural surroundings.
            </p>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Cottage ownership gives full access to the hotel facilities and services of the resort, allowing you to enjoy a vacation lifestyle whenever you choose.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="glass-card p-4">
                <h4 className="text-lg font-medium mb-3 text-secondary">2 BHK Cottage</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CircleCheck size={16} className="text-primary mr-2" />
                    <span className="text-gray-600">1000 sq ft Built-up Area</span>
                  </li>
                  <li className="flex items-center">
                    <CircleCheck size={16} className="text-primary mr-2" />
                    <span className="text-gray-600">1600 sq ft Slab Area</span>
                  </li>
                  <li className="flex items-center">
                    <CircleCheck size={16} className="text-primary mr-2" />
                    <span className="text-gray-600">2 Bedrooms, 2 Bathrooms</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-4">
                <h4 className="text-lg font-medium mb-3 text-secondary">4 BHK Cottage</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CircleCheck size={16} className="text-primary mr-2" />
                    <span className="text-gray-600">2000 sq ft Built-up Area</span>
                  </li>
                  <li className="flex items-center">
                    <CircleCheck size={16} className="text-primary mr-2" />
                    <span className="text-gray-600">2600 sq ft Slab Area</span>
                  </li>
                  <li className="flex items-center">
                    <CircleCheck size={16} className="text-primary mr-2" />
                    <span className="text-gray-600">4 Bedrooms, 4 Bathrooms</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <Link to="/cottages" className="btn-primary flex items-center w-fit gap-2">
                Explore Luxury Cottages <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-sm">
              <img alt="Luxury Cottage Exterior" className="object-cover w-full h-full" src="/lovable-uploads/7ce3725f-2078-4769-ae6b-2432c9708d08.jpg" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-sm mt-4">
              <img alt="Luxury Cottage Interior" className="object-cover w-full h-full" src="/lovable-uploads/01567582-2cd2-4a9c-b7e3-6a8b4ff18c03.jpg" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-sm">
              <img alt="Cottage View" className="object-cover w-full h-full" src="/lovable-uploads/f5f12fa3-907e-45e3-87de-cf0c386a03a5.jpg" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-sm mt-4">
              <img alt="Beach View" className="object-cover w-full h-full" src="/lovable-uploads/bad172e0-a574-4414-b4c1-35f7af2c295d.jpg" />
            </div>
          </div>
        </div>
      </Section>
      
      {/* Resort Amenities */}
      <Section background="light">
        <SectionTitle title="Luxury Resort" subtitle="A 9 acre luxury resort with premium amenities for all age groups and families" align="center" />
        
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 text-base">
          The resort is a key part of the Bay Parck lifestyle, offering world-class hospitality and a wide range of amenities. Owning a cottage or plot gives you access to all resort facilities, allowing you to enjoy a vacation experience whenever you visit.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="glass-card p-4 text-center">
            <Waves size={28} className="mx-auto text-primary mb-3" />
            <h3 className="font-medium text-sm">Swimming Pool</h3>
          </div>
          
          <div className="glass-card p-4 text-center">
            <UtensilsCrossed size={28} className="mx-auto text-primary mb-3" />
            <h3 className="font-medium text-sm">Restaurant</h3>
          </div>
          
          <div className="glass-card p-4 text-center">
            <Dumbbell size={28} className="mx-auto text-primary mb-3" />
            <h3 className="font-medium text-sm">Open Gym</h3>
          </div>
          
          <div className="glass-card p-4 text-center">
            <Gamepad size={28} className="mx-auto text-primary mb-3" />
            <h3 className="font-medium text-sm">Games Room</h3>
          </div>
          
          <div className="glass-card p-4 text-center">
            <Building size={28} className="mx-auto text-primary mb-3" />
            <h3 className="font-medium text-sm">Banquet Hall</h3>
          </div>
          
          <div className="glass-card p-4 text-center">
            <Umbrella size={28} className="mx-auto text-primary mb-3" />
            <h3 className="font-medium text-sm">Party Lawns</h3>
          </div>
          
          <div className="glass-card p-4 text-center">
            <Users size={28} className="mx-auto text-primary mb-3" />
            <h3 className="font-medium text-sm">Meeting Hall</h3>
          </div>
          
          <div className="glass-card p-4 text-center">
            <AmenityIcon name="cricket" size={28} className="mx-auto text-primary mb-3" />
            <h3 className="font-medium text-sm">Cricket</h3>
          </div>
          
          <div className="glass-card p-4 text-center">
            <AmenityIcon name="badminton" size={28} className="mx-auto text-primary mb-3" />
            <h3 className="font-medium text-sm">Badminton</h3>
          </div>
          
          <div className="glass-card p-4 text-center">
            <AmenityIcon name="basketball" size={28} className="mx-auto text-primary mb-3" />
            <h3 className="font-medium text-sm">Half Basketball</h3>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <Link to="/resort" className="btn-primary flex items-center justify-center mx-auto w-fit gap-2">
            View All Resort Amenities <ArrowRight size={16} />
          </Link>
        </div>
      </Section>
      
      {/* Location Advantages */}
      <Section background="white">
        <SectionTitle title="The Designs of Effortless Access" subtitle="Strategically located for convenience and future appreciation" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-lg mr-4">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">10 km</h4>
                  <p className="text-gray-600 text-sm">to Chennai-Kolkata Highway</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-lg mr-4">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">30 km</h4>
                  <p className="text-gray-600 text-sm">to Srikakulam City</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-lg mr-4">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">35 km</h4>
                  <p className="text-gray-600 text-sm">to Bhogapuram Airport</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-lg mr-4">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">80 km</h4>
                  <p className="text-gray-600 text-sm">to Visakhapatnam City</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-lg mr-4">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">15 km</h4>
                  <p className="text-gray-600 text-sm">to Pydibhimavaram Pharma SEZ</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 p-4 glass-card border-l-4 border-primary">
              <p className="text-gray-600 text-sm">
                <strong>Outstanding location</strong> – With Visakhapatnam proposed as the capital of Andhra Pradesh and proximity to the new Bhogapuram airport, this area will witness rapid development and appreciation.
              </p>
            </div>
          </div>
          
          <div className="h-[500px] rounded-lg overflow-hidden shadow-md">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241412.29508914096!2d83.9412698!3d18.2957761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c522aaf9d6fbd%3A0xc6203e31e0be1c!2sSrikakulam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1701347218970!5m2!1sen!2sin" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map showing location of SVN Bay Parck" className="rounded-lg"></iframe>
          </div>
        </div>
      </Section>
      
      {/* Free Membership Benefits */}
      <Section background="primary">
        <SectionTitle title="FREE RESORT MEMBERSHIP" subtitle="Exclusive benefits for plot and cottage owners" align="center" titleClassName="text-white" subtitleClassName="text-white/80" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <h3 className="text-lg font-medium mb-4 text-white">Stay Benefits</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <CircleCheck size={16} className="text-primary-light shrink-0 mt-1 mr-2" />
                <span className="text-white/90">2 Nights Stay per annum in Bay Parck</span>
              </li>
              <li className="flex items-start">
                <CircleCheck size={16} className="text-primary-light shrink-0 mt-1 mr-2" />
                <span className="text-white/90">2 Nights Stay in SVN Lake Palace Vizianagaram OR SVN Grand Kakinada</span>
              </li>
              <li className="flex items-start">
                <CircleCheck size={16} className="text-primary-light shrink-0 mt-1 mr-2" />
                <span className="text-white/90">Complimentary breakfast for room guests</span>
              </li>
              <li className="flex items-start">
                <CircleCheck size={16} className="text-primary-light shrink-0 mt-1 mr-2" />
                <span className="text-white/90">25% discount on extra room nights</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <h3 className="text-lg font-medium mb-4 text-white">Dining & Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <CircleCheck size={16} className="text-primary-light shrink-0 mt-1 mr-2" />
                <span className="text-white/90">10% discount on room service</span>
              </li>
              <li className="flex items-start">
                <CircleCheck size={16} className="text-primary-light shrink-0 mt-1 mr-2" />
                <span className="text-white/90">20% discount on food</span>
              </li>
              <li className="flex items-start">
                <CircleCheck size={16} className="text-primary-light shrink-0 mt-1 mr-2" />
                <span className="text-white/90">25% discount on spa, massage, and salon services</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <h3 className="text-lg font-medium mb-4 text-white">Facility Access</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <CircleCheck size={16} className="text-primary-light shrink-0 mt-1 mr-2" />
                <span className="text-white/90">Free swimming pool access</span>
              </li>
              <li className="flex items-start">
                <CircleCheck size={16} className="text-primary-light shrink-0 mt-1 mr-2" />
                <span className="text-white/90">Snooker, Cycling, Indoor games free</span>
              </li>
              <li className="flex items-start">
                <CircleCheck size={16} className="text-primary-light shrink-0 mt-1 mr-2" />
                <span className="text-white/90">Complimentary mini gymnasium</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg inline-block border border-white/20">
            <h3 className="text-xl font-medium mb-2 text-white">Membership Valid Until</h3>
            <p className="text-2xl text-white">December 31, 2028</p>
          </div>
        </div>
        
        <div className="mt-6 text-xs text-white/80 text-center max-w-2xl mx-auto">
          <p>Note: If the plot is being resold, new plot owner must contact the management to get a fresh membership card issued in their name to avail of these benefits again.</p>
        </div>
      </Section>
      
      {/* Why Bay Parck */}
      <Section background="white">
        <SectionTitle title="TICK ALL THE BOXES FOR PERFECT INVESTMENT" subtitle="Why SVN BAY PARCK is your ideal investment choice" align="center" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard icon={<DollarSign size={28} />} title="High Returns / ROI" description="Coastal properties historically provide excellent return on investment with appreciating values over time." />
          
          <FeatureCard icon={<Percent size={28} />} title="Resale Value" description="Prime beachfront location ensures strong resale value and future appreciation potential." />
          
          <FeatureCard icon={<MapPin size={28} />} title="Beachfront Property" description="Rare opportunity to own property directly on the beach with unobstructed sea views." />
          
          <FeatureCard icon={<Building size={28} />} title="Flexible Plot Sizes" description="Wallet-friendly plot sizes with different property options offering a wealth of choices." />
          
          <FeatureCard icon={<Award size={28} />} title="Superb Facilities" description="A 9-acre luxury resort with premium cottages offers amenities for all age groups." />
          
          <FeatureCard icon={<Heart size={28} />} title="Unique Landscape" description="Designed with location in mind, Bay Parck benefits from a wonderful shoreline and natural beauty." />
        </div>
        
        <div className="mt-10 glass-card p-6 max-w-3xl mx-auto">
          <h3 className="text-lg font-medium mb-3 text-secondary">Outstanding Location Advantage</h3>
          <p className="text-gray-600 text-sm">
            With Visakhapatnam proposed as the capital of Andhra Pradesh and proximity to the new Bhogapuram airport, this area will witness rapid development. Forecasts show property prices are set to rise, increasing capital investment value significantly in the coming years.
          </p>
        </div>
      </Section>
      
      {/* Contact Section */}
      <Section background="light">
        <SectionTitle title="Contact Us" subtitle="Reach out to learn more about SVN BAY PARCK" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="glass-card p-6 mb-6">
              <h3 className="text-xl font-medium mb-6 text-secondary">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-primary mt-1 mr-3" size={18} />
                  <div>
                    <h4 className="font-medium text-base mb-1">Address</h4>
                    <p className="text-gray-600 text-sm">Koshta Junction, Srikakulam, Andhra Pradesh</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-primary mt-1 mr-3" size={18} />
                  <div>
                    <h4 className="font-medium text-base mb-1">Phone/WhatsApp</h4>
                    <p className="text-gray-600 text-sm">+91 85999 24242 / 85999 36363</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-primary mt-1 mr-3" size={18} />
                  <div>
                    <h4 className="font-medium text-base mb-1">Email</h4>
                    <p className="text-gray-600 text-sm">info@svnsjd.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary rounded-lg text-white p-6 shadow-md">
              <h3 className="text-lg font-medium mb-3">SPECIAL OFFER</h3>
              <p className="text-xl font-medium mb-3">BOOK YOUR PLOT TODAY!</p>
              <p className="mb-4 text-white/90 text-sm">
                Act now to secure your beachfront paradise at SVN BAY PARCK. Early investors receive exclusive benefits and priority plot selection.
              </p>
              <Link to="/contact" className="bg-white text-primary font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-all inline-block text-sm">
                Enquire Now
              </Link>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </Section>
    </div>;
};
export default Home;