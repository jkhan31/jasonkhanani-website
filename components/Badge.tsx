import React from 'react';
import { Dot } from 'lucide-react';

interface BadgeProps {
  type: 'fit' | 'deadline' | 'remote' | 'tag';
  label: string;
  count?: number | string;
  animated?: boolean;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ type, label, count, animated = false, className = '' }) => {
  const styles = {
    fit: {
      bg: 'bg-softTeal/8',
      border: 'border-softTeal/20',
      text: 'text-softTeal',
      dotColor: 'bg-softTeal',
    },
    deadline: {
      bg: 'bg-warmAmber/8',
      border: 'border-warmAmber/20',
      text: 'text-warmAmber',
      dotColor: 'bg-warmAmber',
    },
    remote: {
      bg: 'bg-diagnosticBlue/7',
      border: 'border-diagnosticBlue/20',
      text: 'text-diagnosticBlue',
      dotColor: 'bg-diagnosticBlue',
    },
    tag: {
      bg: 'bg-bodyText/5',
      border: 'border-bodyText/15',
      text: 'text-bodyText',
      dotColor: 'bg-bodyText',
    },
  };

  const style = styles[type];

  return (
    <span
      className={`
        inline-flex items-center gap-2
        font-mono text-xs tracking-wider uppercase
        px-3 py-1.5 rounded-sm
        border border-0.5
        ${style.bg} ${style.border} ${style.text}
        ${className}
      `}
    >
      {type === 'fit' && animated && (
        <span className={`w-1.5 h-1.5 ${style.dotColor} rounded-full animate-pulse`} />
      )}
      <span>{label}</span>
      {count && <span className="opacity-60">({count})</span>}
    </span>
  );
};

export default Badge;
