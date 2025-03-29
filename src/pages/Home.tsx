import React from 'react';
import { ArrowRight, MapPin, CircleCheck, Building, Users, Award, DollarSign, Percent, Heart, Waves, UtensilsCrossed, Dumbbell, Gamepad, Umbrella, ShieldCheck, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/SectionTitle';
import FeatureCard from '@/components/FeatureCard';
import ContactForm from '@/components/ContactForm';
import AmenityIcon from '@/components/AmenityIcon';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("/public/lovable-uploads/6e3e46c5-ac95-4a9b-ae3f-d2a2b36e7f90.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-custom text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            Beachfront Plots & Villas | Luxury Resort
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-calligraphy mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
            Your life by the sea.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Link to="/plots" className="btn-primary flex items-center justify-center">
              Explore Beachfront Plots <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link to="/cottages" className="btn-secondary flex items-center justify-center">
              Discover Luxury Cottages <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link to="/resort" className="btn-outline border-white text-white hover:bg-white hover:text-primary flex items-center justify-center">
              Explore the Resort <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Key Highlights Section */}
      <section className="py-16 bg-beach-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <MapPin size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prime Location</h3>
              <p>Beachfront Plots & Villas in Koshta Junction, Srikakulam, Andhra Pradesh</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <Building size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expansive Development</h3>
              <p>25 Acres of Beach Front Plots & 15 Acres of Luxury Resort & Premium Cottages</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <ShieldCheck size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">RERA Approved</h3>
              <p>AP RERA NO: P01070381701</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="About SVN BAY PARCK" 
            subtitle="Experience luxury beachfront living in a world-class gated community"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                Set on the pristine shores of the Bay of Bengal, SVN BAY PARCK is an unprecedented concept, centered on celebrating contemporary lifestyle. This 40-acre gated community development with a stunning view of the seashore comprises a world-class resort with Beachfront Serviced Villas replete with all kinds of leisure amenities and 206 premium beach plots.
              </p>
              <p className="text-gray-700 mb-6">
                The development combines the best of luxury living with the natural beauty of coastal Andhra Pradesh, providing an unmatched investment opportunity and lifestyle choice for discerning buyers.
              </p>
              <p className="text-gray-700 mb-6">
                With SUDA and RERA approval, SVN BAY PARCK offers peace of mind along with its exceptional amenities and prime location in Koshta Junction, Srikakulam.
              </p>
              <div className="mt-8">
                <Link to="/about" className="btn-primary flex items-center w-fit">
                  Learn More About Us <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&auto=format&fit=crop&q=80" 
                  alt="SVN BAY PARCK Beachfront View" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                <p className="text-lg font-bold">206</p>
                <p className="text-sm">Premium Beach Plots</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-secondary text-white p-4 rounded-lg shadow-lg">
                <p className="text-lg font-bold">40</p>
                <p className="text-sm">Acres Gated Community</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Beachfront Plots Section */}
      <section className="section-padding bg-beach-light">
        <div className="container-custom">
          <SectionTitle 
            title="Beach Front Plots" 
            subtitle="Premium beachfront plots with convenient sizes and luxury amenities"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-beach-sand rounded-lg">
                    <p className="text-3xl font-bold text-primary">206</p>
                    <p className="text-sm text-gray-600">Total Plots</p>
                  </div>
                  <div className="text-center p-4 bg-beach-sand rounded-lg">
                    <p className="text-3xl font-bold text-primary">25</p>
                    <p className="text-sm text-gray-600">Acres Extent</p>
                  </div>
                </div>
                
                <div className="text-center p-4 bg-beach-sand rounded-lg mb-6">
                  <p className="text-xl font-bold text-primary">200-267 Sq Yds</p>
                  <p className="text-sm text-gray-600">Plot Sizes</p>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CircleCheck size={20} className="text-primary shrink-0 mt-1 mr-2" />
                    <span>Pre-demarcated plots with convenient sizes</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck size={20} className="text-primary shrink-0 mt-1 mr-2" />
                    <span>Option to purchase multiple adjoining plots</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck size={20} className="text-primary shrink-0 mt-1 mr-2" />
                    <span>Option to build villa on plot as per guidelines</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck size={20} className="text-primary shrink-0 mt-1 mr-2" />
                    <span>Outside Coastal Regulation Zone</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck size={20} className="text-primary shrink-0 mt-1 mr-2" />
                    <span>Access to resort amenities with ownership</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <blockquote className="text-2xl italic font-light text-gray-700 mb-8">
                "Pack your favorite books and coffee...weekends here seem surreal."
              </blockquote>
              <p className="text-gray-700 mb-6">
                Exclusive beachfront plots with top-notch amenities make weekends here seem surreal. These pre-demarcated plots come in a range of convenient, practical areas, spanning from 200 to 267 sq yds. If you feel the need for more space, you can always choose more than one plot.
              </p>
              <div className="mt-8">
                <Link to="/plots" className="btn-primary flex items-center w-fit">
                  View Beachfront Plots <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Luxury Cottages Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Premium Cottages" 
            subtitle="Contemporary-styled luxury cottages with panoramic sea views"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                Our luxury resort cottages are luxurious slices of paradise with contemporary-styled living spaces offering panoramic views of the sea. Each cottage is designed to provide the utmost comfort while blending seamlessly with the natural surroundings.
              </p>
              <p className="text-gray-700 mb-6">
                Cottage ownership gives full access to the hotel facilities and services of the resort, allowing you to enjoy a vacation lifestyle whenever you choose.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-beach-light p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-2">2 BHK Cottage</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CircleCheck size={16} className="text-primary mr-2" />
                      <span>1000 sq ft Built-up Area</span>
                    </li>
                    <li className="flex items-center">
                      <CircleCheck size={16} className="text-primary mr-2" />
                      <span>1600 sq ft Slab Area</span>
                    </li>
                    <li className="flex items-center">
                      <CircleCheck size={16} className="text-primary mr-2" />
                      <span>2 Bedrooms, 2 Bathrooms</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-beach-light p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-2">4 BHK Cottage</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CircleCheck size={16} className="text-primary mr-2" />
                      <span>2000 sq ft Built-up Area</span>
                    </li>
                    <li className="flex items-center">
                      <CircleCheck size={16} className="text-primary mr-2" />
                      <span>2600 sq ft Slab Area</span>
                    </li>
                    <li className="flex items-center">
                      <CircleCheck size={16} className="text-primary mr-2" />
                      <span>4 Bedrooms, 4 Bathrooms</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/cottages" className="btn-primary flex items-center w-fit">
                  Explore Luxury Cottages <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=500&auto=format&fit=crop&q=80" 
                  alt="Luxury Cottage Exterior" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&auto=format&fit=crop&q=80" 
                  alt="Luxury Cottage Interior" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=80" 
                  alt="Cottage View" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=500&auto=format&fit=crop&q=80" 
                  alt="Beach View" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resort Amenities */}
      <section className="section-padding bg-beach-light">
        <div className="container-custom">
          <SectionTitle 
            title="Luxury Resort" 
            subtitle="A 9 acre luxury resort with premium amenities for all age groups and families"
            align="center"
          />
          
          <p className="text-gray-700 text-center max-w-4xl mx-auto mb-12">
            The resort is a key part of the Bay Parck lifestyle, offering world-class hospitality and a wide range of amenities. Owning a cottage or plot gives you access to all resort facilities, allowing you to enjoy a vacation experience whenever you visit.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <Waves size={48} className="mx-auto text-primary mb-3" />
              <h3 className="font-medium">Swimming Pool</h3>
            </div>
            
            <div className="text-center">
              <UtensilsCrossed size={48} className="mx-auto text-primary mb-3" />
              <h3 className="font-medium">Restaurant</h3>
            </div>
            
            <div className="text-center">
              <Dumbbell size={48} className="mx-auto text-primary mb-3" />
              <h3 className="font-medium">Open Gym</h3>
            </div>
            
            <div className="text-center">
              <Gamepad size={48} className="mx-auto text-primary mb-3" />
              <h3 className="font-medium">Games Room</h3>
            </div>
            
            <div className="text-center">
              <Building size={48} className="mx-auto text-primary mb-3" />
              <h3 className="font-medium">Banquet Hall</h3>
            </div>
            
            <div className="text-center">
              <Umbrella size={48} className="mx-auto text-primary mb-3" />
              <h3 className="font-medium">Party Lawns</h3>
            </div>
            
            <div className="text-center">
              <Users size={48} className="mx-auto text-primary mb-3" />
              <h3 className="font-medium">Meeting Hall</h3>
            </div>
            
            <div className="text-center">
              <AmenityIcon name="cricket" size={48} className="mx-auto text-primary mb-3" />
              <h3 className="font-medium">Cricket</h3>
            </div>
            
            <div className="text-center">
              <AmenityIcon name="badminton" size={48} className="mx-auto text-primary mb-3" />
              <h3 className="font-medium">Badminton</h3>
            </div>
            
            <div className="text-center">
              <AmenityIcon name="basketball" size={48} className="mx-auto text-primary mb-3" />
              <h3 className="font-medium">Half Basketball</h3>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/resort" className="btn-primary flex items-center justify-center mx-auto w-fit">
              View All Resort Amenities <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Location Advantages */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="The Designs of Effortless Access" 
            subtitle="Strategically located for convenience and future appreciation"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-beach-light p-3 rounded-lg mr-4">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">10 km</h4>
                    <p className="text-gray-600">to Chennai-Kolkata Highway</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-beach-light p-3 rounded-lg mr-4">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">30 km</h4>
                    <p className="text-gray-600">to Srikakulam City</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-beach-light p-3 rounded-lg mr-4">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">35 km</h4>
                    <p className="text-gray-600">to Bhogapuram Airport</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-beach-light p-3 rounded-lg mr-4">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">80 km</h4>
                    <p className="text-gray-600">to Visakhapatnam City</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-beach-light p-3 rounded-lg mr-4">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">15 km</h4>
                    <p className="text-gray-600">to Pydibhimavaram Pharma SEZ</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-beach-light rounded-lg border-l-4 border-primary">
                <p>
                  <strong>Outstanding location</strong> – With Visakhapatnam proposed as the capital of Andhra Pradesh and proximity to the new Bhogapuram airport, this area will witness rapid development and appreciation.
                </p>
              </div>
            </div>
            
            <div className="h-96 rounded-lg overflow-hidden shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241412.29508914096!2d83.9412698!3d18.2957761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c522aaf9d6fbd%3A0xc6203e31e0be1c!2sSrikakulam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1701347218970!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Map showing location of SVN Bay Parck"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* Free Membership Benefits */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <SectionTitle 
            title="FREE RESORT MEMBERSHIP" 
            subtitle="Exclusive benefits for plot and cottage owners"
            align="center"
            titleClassName="text-white"
            subtitleClassName="text-white/80"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Stay Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CircleCheck size={20} className="text-secondary shrink-0 mt-1 mr-2" />
                  <span>2 Nights Stay per annum in Bay Parck</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck size={20} className="text-secondary shrink-0 mt-1 mr-2" />
                  <span>2 Nights Stay in SVN Lake Palace Vizianagaram OR SVN Grand Kakinada</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck size={20} className="text-secondary shrink-0 mt-1 mr-2" />
                  <span>Complimentary breakfast for room guests</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck size={20} className="text-secondary shrink-0 mt-1 mr-2" />
                  <span>25% discount on extra room nights</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Dining & Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CircleCheck size={20} className="text-secondary shrink-0 mt-1 mr-2" />
                  <span>10% discount on room service</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck size={20} className="text-secondary shrink-0 mt-1 mr-2" />
                  <span>20% discount on food</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck size={20} className="text-secondary shrink-0 mt-1 mr-2" />
                  <span>25% discount on spa, massage, and salon services</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Facility Access</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CircleCheck size={20} className="text-secondary shrink-0 mt-1 mr-2" />
                  <span>Free swimming pool access</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck size={20} className="text-secondary shrink-0 mt-1 mr-2" />
                  <span>Snooker, Cycling, Indoor games free</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck size={20} className="text-secondary shrink-0 mt-1 mr-2" />
                  <span>Complimentary mini gymnasium</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg inline-block">
              <h3 className="text-2xl font-bold mb-2">Membership Valid Until</h3>
              <p className="text-3xl">December 31, 2028</p>
            </div>
          </div>
          
          <div className="mt-8 text-sm text-white/80 text-center max-w-2xl mx-auto">
            <p>Note: If the plot is being resold, new plot owner must contact the management to get a fresh membership card issued in their name to avail of these benefits again.</p>
          </div>
        </div>
      </section>
      
      {/* Why Bay Parck */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="TICK ALL THE BOXES FOR PERFECT INVESTMENT" 
            subtitle="Why SVN BAY PARCK is your ideal investment choice"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<DollarSign size={32} />}
              title="High Returns / ROI"
              description="Coastal properties historically provide excellent return on investment with appreciating values over time."
            />
            
            <FeatureCard
              icon={<Percent size={32} />}
              title="Resale Value"
              description="Prime beachfront location ensures strong resale value and future appreciation potential."
            />
            
            <FeatureCard
              icon={<MapPin size={32} />}
              title="Beachfront Property"
              description="Rare opportunity to own property directly on the beach with unobstructed sea views."
            />
            
            <FeatureCard
              icon={<Building size={32} />}
              title="Flexible Plot Sizes"
              description="Wallet-friendly plot sizes with different property options offering a wealth of choices."
            />
            
            <FeatureCard
              icon={<Award size={32} />}
              title="Superb Facilities"
              description="A 9-acre luxury resort with premium cottages offers amenities for all age groups."
            />
            
            <FeatureCard
              icon={<Heart size={32} />}
              title="Unique Landscape"
              description="Designed with location in mind, Bay Parck benefits from a wonderful shoreline and natural beauty."
            />
          </div>
          
          <div className="mt-12 bg-beach-light p-6 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-primary">Outstanding Location Advantage</h3>
            <p className="text-gray-700">
              With Visakhapatnam proposed as the capital of Andhra Pradesh and proximity to the new Bhogapuram airport, this area will witness rapid development. Forecasts show property prices are set to rise, increasing capital investment value significantly in the coming years.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="section-padding bg-beach-light">
        <div className="container-custom">
          <SectionTitle 
            title="Contact Us" 
            subtitle="Reach out to learn more about SVN BAY PARCK"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-primary mt-1 mr-3" size={20} />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-600">Koshta Junction, Srikakulam, Andhra Pradesh</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-primary mt-1 mr-3" size={20} />
                    <div>
                      <h4 className="font-medium">Phone/WhatsApp</h4>
                      <p className="text-gray-600">+91 85999 24242 / 85999 36363</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-primary mt-1 mr-3" size={20} />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">info@svnsjd.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">SPECIAL OFFER</h3>
                <p className="text-2xl font-bold mb-2">BOOK YOUR PLOT TODAY!</p>
                <p className="mb-4">
                  Act now to secure your beachfront paradise at SVN BAY PARCK. Early investors receive exclusive benefits and priority plot selection.
                </p>
                <Link to="/contact" className="bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-beach-sand transition-all inline-block">
                  Enquire Now
                </Link>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
