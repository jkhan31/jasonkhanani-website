import React from 'react';

interface SectionLabelProps {
  label: string;
  className?: string;
  color?: 'default' | 'amber' | 'blue' | 'green';
}

const SectionLabel: React.FC<SectionLabelProps> = ({ label, className = '', color = 'default' }) => {
  const colorStyles = {
    default: 'text-bodyText/60',
    amber: 'text-warmAmber',
    blue: 'text-diagnosticBlue',
    green: 'text-softTeal',
  };

  return (
    <h2
      className={`
        font-mono text-xs tracking-widest uppercase
        pb-3 mb-6
        border-b border-0.5 border-darkText/10
        ${colorStyles[color]}
        ${className}
      `}
    >
      {label}
    </h2>
  );
};

export default SectionLabel;
