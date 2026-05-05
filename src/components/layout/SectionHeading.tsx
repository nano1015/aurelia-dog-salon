import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`mx-auto flex max-w-[720px] flex-col items-center ${className}`}>
      <div className="mb-2 flex w-full items-center justify-center gap-5 text-gold">
        <span className="h-px w-24 bg-gold/70" />
        <span className="font-serif text-2xl leading-none text-gold">⌘</span>
        <span className="h-px w-24 bg-gold/70" />
      </div>
      <h2
        className="text-center font-serif text-3xl font-normal leading-none tracking-[0.22em] text-body-text sm:text-4xl md:text-[48px]"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-center text-sm tracking-[0.18em] text-body-text md:text-base">
          {subtitle}
        </p>
      )}
      <div className="mt-3 flex w-full items-center justify-center gap-5 text-gold">
        <span className="h-px w-20 bg-gold/70" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
        <span className="h-px w-20 bg-gold/70" />
      </div>
    </div>
  );
};
