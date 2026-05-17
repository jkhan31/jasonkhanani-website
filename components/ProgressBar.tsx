import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
  color?: 'blue' | 'amber' | 'green';
  showLabel?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  label,
  color = 'blue',
  showLabel = true,
}) => {
  const percentage = (current / total) * 100;

  const colorStyles = {
    blue: 'bg-diagnosticBlue',
    amber: 'bg-warmAmber',
    green: 'bg-softTeal',
  };

  return (
    <div className="mb-4">
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="font-mono text-xs tracking-wider uppercase text-bodyText/60">
            {label}
          </span>
          <span className="font-mono text-xs text-bodyText/60">
            {current} / {total} complete
          </span>
        </div>
      )}
      <div className="h-1 bg-darkText/10 rounded-sm overflow-hidden">
        <div
          className={`h-full ${colorStyles[color]} rounded-sm transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
