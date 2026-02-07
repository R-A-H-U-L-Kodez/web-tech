import React from 'react';

interface IconProps {
  icon: string;
  className?: string;
  [key: string]: any;
}

const Icon: React.FC<IconProps> = ({ icon, className, ...props }) => {
  return React.createElement('iconify-icon' as any, {
    icon,
    className,
    ...props,
  });
};

export default Icon;
