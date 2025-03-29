
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'primary' | 'secondary';
  id?: string;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  background = 'white',
  id
}) => {
  const backgroundClasses = {
    'white': 'bg-white',
    'light': 'bg-gray-50',
    'primary': 'bg-primary text-white',
    'secondary': 'bg-secondary text-white'
  };

  return (
    <section id={id} className={`section-padding ${backgroundClasses[background]} ${className}`}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

export default Section;
