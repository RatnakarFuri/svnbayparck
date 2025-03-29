
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'left',
  titleClassName = '',
  subtitleClassName = ''
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={`mb-12 ${alignmentClasses[align]}`}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-medium text-secondary tracking-tight ${titleClassName}`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`mt-4 text-lg md:text-xl text-gray-500 ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
