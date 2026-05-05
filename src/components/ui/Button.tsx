import React from 'react';

type ButtonVariant = 'gold-filled' | 'gold-outline' | 'green';

interface ButtonProps {
  variant: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  className = '',
  onClick,
  href,
}) => {
  const baseClasses = `
    rounded-lg px-8 py-3
    transition-all duration-300
    font-medium
    hover:scale-[1.02]
    transform
  `;

  const variantClasses = {
    'gold-filled': 'bg-gold text-white hover:bg-gold-dark btn-shimmer',
    'gold-outline': 'border-2 border-gold text-gold hover:bg-gold hover:text-white',
    'green': 'bg-[#06C755] text-white hover:bg-[#05B04A]',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};
