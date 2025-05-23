import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  highlight = false
}) => {
  return (
    <div className={`
      rounded-lg bg-white p-6 shadow-md transition-all duration-300 border border-gray-200
      ${highlight ? 'ring-2 ring-purple-500 shadow-lg scale-105' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;