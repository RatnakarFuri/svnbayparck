
import React from 'react';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, value, className = '' }) => {
  return (
    <div className={`bg-white p-5 rounded-lg shadow-sm border border-gray-100 ${className}`}>
      <div className="flex items-center mb-2">
        <div className="bg-primary/10 p-1.5 rounded-md mr-2 text-primary">
          {icon}
        </div>
        <h3 className="text-base font-medium text-gray-900">{title}</h3>
      </div>
      <p className="text-2xl font-medium text-primary">{value}</p>
    </div>
  );
};

export default InfoCard;
