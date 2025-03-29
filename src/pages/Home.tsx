
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CircleCheck, Building, Users, Award, DollarSign, Percent, Heart, Waves, UtensilsCrossed, Dumbbell, Gamepad, Umbrella, ShieldCheck, Phone, Mail } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import FeatureCard from '@/components/FeatureCard';
import ContactForm from '@/components/ContactForm';
import AmenityIcon from '@/components/AmenityIcon';
import Section from '@/components/Section';
import InfoCard from '@/components/InfoCard';
import { Card } from '@/components/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url("/public/lovable-uploads/6e3e46c5-ac95-4a9b-ae3f-d2a2b36e7f90.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-custom text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-6 leading-tight animate-fade-in max-w-5xl mx-auto">
            Beachfront Plots & Villas | Luxury Resort
          </h1>
          <p className="text-xl md:text-3xl lg:text-4xl font-calligraphy mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
            Your life by the sea.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Link to="/plots" className="btn-primary flex items-center justify-center gap-2 text-lg">
              Explore Beachfront Plots <ArrowRight size={18} />
            </Link>
            <Link to="/cottages" className="btn-secondary flex items-center justify-center gap-2 text-lg">
              Discover Luxury Cottages <ArrowRight size={18} />
            </Link>
            <Link to="/resort" className="btn-outline flex items-center justify-center gap-2 text-lg">
              Explore the Resort <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Key Highlights Section */}
      <Section background="light">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 text-center">
            <MapPin size={48} className="text-primary mx-auto mb-6" />
            <h3 className="text-xl font-medium mb-3">Prime Location</h3>
            <p className="text-gray-600">Beachfront Plots & Villas in Koshta Junction, Srikakulam, Andhra Pradesh</p>
          </div>
          
          <div className="glass-card p-8 text-center">
            <Building size={48} className="text-primary mx-auto mb-6" />
            <h3 className="text-xl font-medium mb-3">Expansive Development</h3>
            <p className="text-gray-600">25 Acres of Beach Front Plots & 15 Acres of Luxury Resort & Premium Cottages</p>
          </div>
          
          <div className="glass-card p-8 text-center">
            <ShieldCheck size={48} className="text-primary mx-auto mb-6" />
            <h3 className="text-xl font-medium mb-3">RERA Approved</h3>
            <p className="text-gray-600">AP RERA NO: P01070381701</p>
          </div>
        </div>
      </Section>
      
      {/* About Section */}
      <Section background="white">
        <SectionTitle 
          title="About SVN BAY PARCK" 
          subtitle="Experience luxury beachfront living in a world-class gated community"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Set on the pristine shores of the Bay of Bengal, SVN BAY PARCK is an unprecedented concept, centered on celebrating contemporary lifestyle. This 40-acre gated community development with a stunning view of the seashore comprises a world-class resort with Beachfront Serviced Villas replete with all kinds of leisure amenities and 206 premium beach plots.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              The development combines the best of luxury living with the natural beauty of coastal Andhra Pradesh, providing an unmatched investment opportunity and lifestyle choice for discerning buyers.
            </p>
            
            <div className="flex flex-wrap gap-6 mt-10">
              <InfoCard 
                icon={<Building size={22} />}
                title="Beach Plots"
                value="206"
              />
              <InfoCard 
                icon={<MapPin size={22} />}
                title="Total Area"
                value="40 Acres"
              />
            </div>
            
            <div className="mt-10">
              <Link to="/about" className="btn-primary flex items-center w-fit gap-2">
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&auto=format&fit=crop&q=80" 
                alt="SVN BAY PARCK Beachfront View" 
                className="object-cover w-full aspect-[4/3]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-4 rounded-2xl shadow-lg">
              <p className="text-lg font-medium">206</p>
              <p className="text-sm">Premium Beach Plots</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-secondary text-white p-4 rounded-2xl shadow-lg">
              <p className="text-lg font-medium">40</p>
              <p className="text-sm">Acres Gated Community</p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Beachfront Plots Section */}
      <Section background="light">
        <SectionTitle 
          title="Beach Front Plots" 
          subtitle="Premium beachfront plots with convenient sizes and luxury amenities"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="glass-card p-8">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 rounded-xl bg-primary/5">
                  <p className="text-3xl font-medium text-primary mb-1">206</p>
                  <p className="text-sm text-gray-600">Total Plots</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-primary/5">
                  <p className="text-3xl font-medium text-primary mb-1">25</p>
                  <p className="text-sm text-gray-600">Acres Extent</p>
                </div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-primary/5 mb-8">
                <p className="text-xl font-medium text-primary mb-1">200-267 Sq Yds</p>
                <p className="text-sm text-gray-600">Plot Sizes</p>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CircleCheck size={20} className="text-primary shrink-0 mt-1 mr-3" />
                  <span className="text-gray-600">Pre-demarcated plots with convenient sizes</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck size={20} className="text-primary shrink-0 mt-1 mr-3" />
                  <span className="text-gray-600">Option to purchase multiple adjoining plots</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck size={20} className="text-primary shrink-0 mt-1 mr-3" />
                  <span className="text-gray-600">Option to build villa on plot as per guidelines</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck size={20} className="text-primary shrink-0 mt-1 mr-3" />
                  <span className="text-gray-600">Outside Coastal Regulation Zone</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck size={20} className="text-primary shrink-0 mt-1 mr-3" />
                  <span className="text-gray-600">Access to resort amenities with ownership</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <blockquote className="text-3xl font-light text-gray-500 mb-8 italic leading-relaxed">
              "Pack your favorite books and coffee...weekends here seem surreal."
            </blockquote>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Exclusive beachfront plots with top-notch amenities make weekends here seem surreal. These pre-demarcated plots come in a range of convenient, practical areas, spanning from 200 to 267 sq yds. If you feel the need for more space, you can always choose more than one plot.
            </p>
            <div className="mt-10">
              <Link to="/plots" className="btn-primary flex items-center w-fit gap-2">
                View Beachfront Plots <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Luxury Cottages Section */}
      <Section background="white">
        <SectionTitle 
          title="Premium Cottages" 
          subtitle="Contemporary-styled luxury cottages with panoramic sea views"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Our luxury resort cottages are luxurious slices of paradise with contemporary-styled living spaces offering panoramic views of the sea. Each cottage is designed to provide the utmost comfort while blending seamlessly with the natural surroundings.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Cottage ownership gives full access to the hotel facilities and services of the resort, allowing you to enjoy a vacation lifestyle whenever you choose.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="glass-card p-6">
                <h4 className="text-xl font-medium mb-4 text-secondary">2 BHK Cottage</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CircleCheck size={18} className="text-primary mr-3" />
                    <span className="text-gray-600">1000 sq ft Built-up Area</span>
                  </li>
                  <li className="flex items-center">
                    <CircleCheck size={18} className="text-primary mr-3" />
                    <span className="text-gray-600">1600 sq ft Slab Area</span>
                  </li>
                  <li className="flex items-center">
                    <CircleCheck size={18} className="text-primary mr-3" />
                    <span className="text-gray-600">2 Bedrooms, 2 Bathrooms</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6">
                <h4 className="text-xl font-medium mb-4 text-secondary">4 BHK Cottage</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CircleCheck size={18} className="text-primary mr-3" />
                    <span className="text-gray-600">2000 sq ft Built-up Area</span>
                  </li>
                  <li className="flex items-center">
                    <CircleCheck size={18} className="text-primary mr-3" />
                    <span className="text-gray-600">2600 sq ft Slab Area</span>
                  </li>
                  <li className="flex items-center">
                    <CircleCheck size={18} className="text-primary mr-3" />
                    <span className="text-gray-600">4 Bedrooms, 4 Bathrooms</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-10">
              <Link to="/cottages" className="btn-primary flex items-center w-fit gap-2">
                Explore Luxury Cottages <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=500&auto=format&fit=crop&q=80" 
                alt="Luxury Cottage Exterior" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm mt-8">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&auto=format&fit=crop&q=80" 
                alt="Luxury Cottage Interior" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=80" 
                alt="Cottage View" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm mt-8">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=500&auto=format&fit=crop&q=80" 
                alt="Beach View" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </Section>
      
      {/* Resort Amenities */}
      <Section background="light">
        <SectionTitle 
          title="Luxury Resort" 
          subtitle="A 9 acre luxury resort with premium amenities for all age groups and families"
          align="center"
        />
        
        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-16 text-lg leading-relaxed">
          The resort is a key part of the Bay Parck lifestyle, offering world-class hospitality and a wide range of amenities. Owning a cottage or plot gives you access to all resort facilities, allowing you to enjoy a vacation experience whenever you visit.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="glass-card p-6 text-center">
            <Waves size={36} className="mx-auto text-primary mb-4" />
            <h3 className="font-medium">Swimming Pool</h3>
          </div>
          
          <div className="glass-card p-6 text-center">
            <UtensilsCrossed size={36} className="mx-auto text-primary mb-4" />
            <h3 className="font-medium">Restaurant</h3>
          </div>
          
          <div className="glass-card p-6 text-center">
            <Dumbbell size={36} className="mx-auto text-primary mb-4" />
            <h3 className="font-medium">Open Gym</h3>
          </div>
          
          <div className="glass-card p-6 text-center">
            <Gamepad size={36} className="mx-auto text-primary mb-4" />
            <h3 className="font-medium">Games Room</h3>
          </div>
          
          <div className="glass-card p-6 text-center">
            <Building size={36} className="mx-auto text-primary mb-4" />
            <h3 className="font-medium">Banquet Hall</h3>
          </div>
          
          <div className="glass-card p-6 text-center">
            <Umbrella size={36} className="mx-auto text-primary mb-4" />
            <h3 className="font-medium">Party Lawns</h3>
          </div>
          
          <div className="glass-card p-6 text-center">
            <Users size={36} className="mx-auto text-primary mb-4" />
            <h3 className="font-medium">Meeting Hall</h3>
          </div>
          
          <div className="glass-card p-6 text-center">
            <AmenityIcon name="cricket" size={36} className="mx-auto text-primary mb-4" />
            <h3 className="font-medium">Cricket</h3>
          </div>
          
          <div className="glass-card p-6 text-center">
            <AmenityIcon name="badminton" size={36} className="mx-auto text-primary mb-4" />
            <h3 className="font-medium">Badminton</h3>
          </div>
          
          <div className="glass-card p-6 text-center">
            <AmenityIcon name="basketball" size={36} className="mx-auto text-primary mb-4" />
            <h3 className="font-medium">Half Basketball</h3>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Link to="/resort" className="btn-primary flex items-center justify-center mx-auto w-fit gap-2">
            View All Resort Amenities <ArrowRight size={18} />
          </Link>
        </div>
      </Section>
      
      {/* Location Advantages */}
      <Section background="white">
        <SectionTitle 
          title="The Designs of Effortless Access" 
          subtitle="Strategically located for convenience and future appreciation"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <ul className="space-y-8">
              <li className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-xl mr-5">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-xl mb-1">10 km</h4>
                  <p className="text-gray-600">to Chennai-Kolkata Highway</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-xl mr-5">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-xl mb-1">30 km</h4>
                  <p className="text-gray-600">to Srikakulam City</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-xl mr-5">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-xl mb-1">35 km</h4>
                  <p className="text-gray-600">to Bhogapuram Airport</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-xl mr-5">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-xl mb-1">80 km</h4>
                  <p className="text-gray-600">to Visakhapatnam City</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-xl mr-5">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-xl mb-1">15 km</h4>
                  <p className="text-gray-600">to Pydibhimavaram Pharma SEZ</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-10 p-6 glass-card border-l-4 border-primary">
              <p className="text-gray-600">
                <strong>Outstanding location</strong> – With Visakhapatnam proposed as the capital of Andhra Pradesh and proximity to the new Bhogapuram airport, this area will witness rapid development and appreciation.
              </p>
            </div>
          </div>
          
          <div className="h-[600px] rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241412.29508914096!2d83.9412698!3d18.2957761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c522aaf9d6fbd%3A0xc6203e31e0be1c!2sSrikakulam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1701347218970!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Map showing location of SVN Bay Parck"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </Section>
      
      {/* Free Membership Benefits */}
      <Section background="primary">
        <SectionTitle 
          title="FREE RESORT MEMBERSHIP" 
          subtitle="Exclusive benefits for plot and cottage owners"
          align="center"
          titleClassName="text-white"
          subtitleClassName="text-white/80"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-xl font-medium mb-6 text-white">Stay Benefits</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CircleCheck size={20} className="text-primary-light shrink-0 mt-1 mr-3" />
                <span className="text-white/90">2 Nights Stay per annum in Bay Parck</span>
              </li>
              <li className="flex items-start">
                <CircleCheck size={20} className="text-primary-light shrink-0 mt-1 mr-3" />
                <span className="text-white/90">2 Nights Stay in SVN Lake Palace Vizianagaram OR SVN Grand Kakinada</span>
              </li>
              <li className="flex items-start">
                <CircleCheck size={20} className="text-primary-light shrink-0 mt-1 mr-3" />
                <span className="text-white/90">Complimentary breakfast for room guests</span>
              </li>
              <li className="flex items-start">
                <CircleCheck size={20} className="text-primary-light shrink-0 mt-1 mr-3" />
                <span className="text-white/90">25% discount on extra room nights</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-xl font-medium mb-6 text-white">Dining & Services</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CircleCheck size={20} className="text-primary-light shrink-0 mt-1 mr-3" />
                <span className="text-white/90">10% discount on room service</span>
              </li>
              <li className="flex items-start">
                <CircleCheck size={20} className="text-primary-light shrink-0 mt-1 mr-3" />
                <span className="text-white/90">20% discount on food</span>
              </li>
              <li className="flex items-start">
                <CircleCheck size={20} className="text-primary-light shrink-0 mt-1 mr-3" />
                <span className="text-white/90">25% discount on spa, massage, and salon services</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-xl font-medium mb-6 text-white">Facility Access</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CircleCheck size={20} className="text-primary-light shrink-0 mt-1 mr-3" />
                <span className="text-white/90">Free swimming pool access</span>
              </li>
              <li className="flex items-start">
                <CircleCheck size={20} className="text-primary-light shrink-0 mt-1 mr-3" />
                <span className="text-white/90">Snooker, Cycling, Indoor games free</span>
              </li>
              <li className="flex items-start">
                <CircleCheck size={20} className="text-primary-light shrink-0 mt-1 mr-3" />
                <span className="text-white/90">Complimentary mini gymnasium</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-14 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl inline-block border border-white/20">
            <h3 className="text-2xl font-medium mb-3 text-white">Membership Valid Until</h3>
            <p className="text-3xl text-white">December 31, 2028</p>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-white/80 text-center max-w-2xl mx-auto">
          <p>Note: If the plot is being resold, new plot owner must contact the management to get a fresh membership card issued in their name to avail of these benefits again.</p>
        </div>
      </Section>
      
      {/* Why Bay Parck */}
      <Section background="white">
        <SectionTitle 
          title="TICK ALL THE BOXES FOR PERFECT INVESTMENT" 
          subtitle="Why SVN BAY PARCK is your ideal investment choice"
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<DollarSign size={36} />}
            title="High Returns / ROI"
            description="Coastal properties historically provide excellent return on investment with appreciating values over time."
          />
          
          <FeatureCard
            icon={<Percent size={36} />}
            title="Resale Value"
            description="Prime beachfront location ensures strong resale value and future appreciation potential."
          />
          
          <FeatureCard
            icon={<MapPin size={36} />}
            title="Beachfront Property"
            description="Rare opportunity to own property directly on the beach with unobstructed sea views."
          />
          
          <FeatureCard
            icon={<Building size={36} />}
            title="Flexible Plot Sizes"
            description="Wallet-friendly plot sizes with different property options offering a wealth of choices."
          />
          
          <FeatureCard
            icon={<Award size={36} />}
            title="Superb Facilities"
            description="A 9-acre luxury resort with premium cottages offers amenities for all age groups."
          />
          
          <FeatureCard
            icon={<Heart size={36} />}
            title="Unique Landscape"
            description="Designed with location in mind, Bay Parck benefits from a wonderful shoreline and natural beauty."
          />
        </div>
        
        <div className="mt-16 glass-card p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-medium mb-4 text-secondary">Outstanding Location Advantage</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            With Visakhapatnam proposed as the capital of Andhra Pradesh and proximity to the new Bhogapuram airport, this area will witness rapid development. Forecasts show property prices are set to rise, increasing capital investment value significantly in the coming years.
          </p>
        </div>
      </Section>
      
      {/* Contact Section */}
      <Section background="light">
        <SectionTitle 
          title="Contact Us" 
          subtitle="Reach out to learn more about SVN BAY PARCK"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="glass-card p-8 mb-10">
              <h3 className="text-2xl font-medium mb-8 text-secondary">Get In Touch</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="text-primary mt-1 mr-4" size={22} />
                  <div>
                    <h4 className="font-medium text-lg mb-1">Address</h4>
                    <p className="text-gray-600">Koshta Junction, Srikakulam, Andhra Pradesh</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-primary mt-1 mr-4" size={22} />
                  <div>
                    <h4 className="font-medium text-lg mb-1">Phone/WhatsApp</h4>
                    <p className="text-gray-600">+91 85999 24242 / 85999 36363</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-primary mt-1 mr-4" size={22} />
                  <div>
                    <h4 className="font-medium text-lg mb-1">Email</h4>
                    <p className="text-gray-600">info@svnsjd.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary rounded-2xl text-white p-8 shadow-lg">
              <h3 className="text-xl font-medium mb-4">SPECIAL OFFER</h3>
              <p className="text-2xl font-medium mb-4">BOOK YOUR PLOT TODAY!</p>
              <p className="mb-6 text-white/90">
                Act now to secure your beachfront paradise at SVN BAY PARCK. Early investors receive exclusive benefits and priority plot selection.
              </p>
              <Link to="/contact" className="bg-white text-primary font-medium px-6 py-3 rounded-xl hover:bg-gray-100 transition-all inline-block">
                Enquire Now
              </Link>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </Section>
    </div>
  );
};

export default Home;
