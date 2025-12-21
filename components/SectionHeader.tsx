
import React from 'react';

interface Props {
  eyebrow?: string;
  title: string;
  className?: string;
}

export const SectionHeader: React.FC<Props> = ({ eyebrow, title, className = "" }) => (
  <div className={`mb-12 ${className}`}>
    {eyebrow && (
      <p className="text-hankoRust font-medium tracking-widest text-xs uppercase mb-2">
        {eyebrow}
      </p>
    )}
    <h2 className="text-4xl md:text-5xl font-serif text-sumiInk">
      {title}
    </h2>
  </div>
);
