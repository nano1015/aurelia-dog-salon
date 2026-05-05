import React from 'react';

interface DecorativeDividerProps {
  className?: string;
}

export const DecorativeDivider: React.FC<DecorativeDividerProps> = ({
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-center w-full py-4 ${className}`}>
      <div className="flex items-center justify-center w-full gap-4">
        <div className="flex-grow h-px bg-gold"></div>
        {/* Floral/scroll ornament SVG */}
        <svg
          className="w-6 h-6 text-gold flex-shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          {/* Stylized floral flourish */}
          <path d="M12 2 C12 2, 14 6, 12 10 C10 6, 12 2, 12 2" />
          <path d="M22 12 C22 12, 18 14, 14 12 C18 10, 22 12, 22 12" />
          <path d="M12 22 C12 22, 10 18, 12 14 C14 18, 12 22, 12 22" />
          <path d="M2 12 C2 12, 6 10, 10 12 C6 14, 2 12, 2 12" />
          <circle cx="12" cy="12" r="2" />
        </svg>
        <div className="flex-grow h-px bg-gold"></div>
      </div>
    </div>
  );
};
