import React from 'react';
import { Info, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface CalloutProps {
  type: 'info' | 'warning' | 'success' | 'error' | 'blue' | 'amber';
  label?: string;
  children: React.ReactNode;
}

const Callout: React.FC<CalloutProps> = ({ type, label, children }) => {
  const styles = {
    info: {
      bg: 'bg-diagnosticBlue/7',
      border: 'border-l-2.5 border-diagnosticBlue border-r border-t border-b border-diagnosticBlue/15',
      label: 'text-diagnosticBlue',
      icon: Info,
      iconColor: 'text-diagnosticBlue',
    },
    warning: {
      bg: 'bg-warmAmber/8',
      border: 'border-l-2.5 border-warmAmber border-r border-t border-b border-warmAmber/15',
      label: 'text-warmAmber',
      icon: AlertTriangle,
      iconColor: 'text-warmAmber',
    },
    success: {
      bg: 'bg-softTeal/8',
      border: 'border-l-2.5 border-softTeal border-r border-t border-b border-softTeal/15',
      label: 'text-softTeal',
      icon: CheckCircle,
      iconColor: 'text-softTeal',
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-l-2.5 border-red-500 border-r border-t border-b border-red-200',
      label: 'text-red-600',
      icon: XCircle,
      iconColor: 'text-red-500',
    },
    blue: {
      bg: 'bg-diagnosticBlue/7',
      border: 'border-l-2.5 border-diagnosticBlue border-r border-t border-b border-diagnosticBlue/15',
      label: 'text-diagnosticBlue',
      icon: Info,
      iconColor: 'text-diagnosticBlue',
    },
    amber: {
      bg: 'bg-warmAmber/8',
      border: 'border-l-2.5 border-warmAmber border-r border-t border-b border-warmAmber/15',
      label: 'text-warmAmber',
      icon: AlertTriangle,
      iconColor: 'text-warmAmber',
    },
  };

  const style = styles[type];
  const Icon = style.icon;

  return (
    <div className={`my-8 p-5 rounded-r-sm border-0.5 ${style.border} ${style.bg} bg-cardBg`}>
      {label && (
        <div className={`font-mono text-xs tracking-widest text-uppercase mb-3 ${style.label}`}>
          {label}
        </div>
      )}
      <div className="flex gap-4">
        {(type === 'info' || type === 'warning' || type === 'success' || type === 'error' || type === 'blue' || type === 'amber') && (
          <Icon className={`flex-shrink-0 w-5 h-5 ${style.iconColor} mt-0.5`} />
        )}
        <div className="text-sm leading-relaxed text-bodyText">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Callout;
