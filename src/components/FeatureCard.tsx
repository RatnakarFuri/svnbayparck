
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
      <div className="text-primary mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3 text-secondary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
