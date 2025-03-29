
import React from 'react';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, value, className = '' }) => {
  return (
    <div className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 ${className}`}>
      <div className="flex items-center mb-3">
        <div className="bg-primary/10 p-2 rounded-lg mr-3 text-primary">
          {icon}
        </div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
      <p className="text-3xl font-medium text-primary">{value}</p>
    </div>
  );
};

export default InfoCard;
