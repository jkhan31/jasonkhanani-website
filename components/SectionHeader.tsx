import React from 'react';

interface Props {
  eyebrow?: string;
  title: string;
  className?: string;
  titleClassName?: string;
  eyebrowClassName?: string;
}

export const SectionHeader: React.FC<Props> = ({ eyebrow, title, className = "", titleClassName = "text-sumiInk", eyebrowClassName = "" }) => (
  <div className={`mb-6 ${className}`}>
    {eyebrow && (
      <p className={`text-hankoRust font-medium tracking-widest text-xs uppercase mb-2 ${eyebrowClassName}`}>
        {eyebrow}
      </p>
    )}
    <h2 className={`text-4xl md:text-5xl font-serif ${titleClassName}`}>
      {title}
    </h2>
  </div>
);
