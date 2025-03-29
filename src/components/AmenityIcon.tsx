
import React from 'react';
import { 
  Waves, 
  UtensilsCrossed, 
  CircleCheck, 
  Users,
  Gamepad,
  Dumbbell,
  MapPin,
  ShieldCheck,
  Umbrella,
  Building
} from 'lucide-react';

interface AmenityIconProps {
  name: string;
  size?: number;
  className?: string;
}

const AmenityIcon: React.FC<AmenityIconProps> = ({ name, size = 24, className = "" }) => {
  const iconMap: Record<string, React.ReactNode> = {
    'swimming-pool': <Waves size={size} className={className} />,
    'restaurant': <UtensilsCrossed size={size} className={className} />,
    'gym': <Dumbbell size={size} className={className} />,
    'game-room': <Gamepad size={size} className={className} />,
    'security': <ShieldCheck size={size} className={className} />,
    'banquet-hall': <Building size={size} className={className} />,
    'party-lawn': <Umbrella size={size} className={className} />,
    'meeting-hall': <Users size={size} className={className} />,
    'infrastructure': <CircleCheck size={size} className={className} />,
    'location': <MapPin size={size} className={className} />,
    'cricket': <CircleCheck size={size} className={className} />,
    'badminton': <CircleCheck size={size} className={className} />,
    'basketball': <CircleCheck size={size} className={className} />,
    
    // Default case
    'default': <CircleCheck size={size} className={className} />
  };

  return (
    <div className="inline-block">
      {iconMap[name] || iconMap['default']}
    </div>
  );
};

export default AmenityIcon;
