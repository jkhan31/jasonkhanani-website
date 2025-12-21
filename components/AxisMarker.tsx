
import React from 'react';

export const AxisMarker: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`w-[0.5px] bg-hankoRust h-full opacity-60 ${className}`} />
);
