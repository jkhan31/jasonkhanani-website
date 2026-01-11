import React from 'react';
import { Info, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface CalloutProps {
  type: 'info' | 'warning' | 'success' | 'error';
  content: string;
}

const Callout: React.FC<CalloutProps> = ({ type, content }) => {
  const styles = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-900',
      icon: Info,
      iconColor: 'text-blue-500',
    },
    warning: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-900',
      icon: AlertTriangle,
      iconColor: 'text-amber-500',
    },
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-900',
      icon: CheckCircle,
      iconColor: 'text-green-500',
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-900',
      icon: XCircle,
      iconColor: 'text-red-500',
    },
  };

  const style = styles[type];
  const Icon = style.icon;

  return (
    <div className={`my-8 p-6 rounded-sm border ${style.border} ${style.bg}`}>
      <div className="flex gap-4">
        <Icon className={`flex-shrink-0 w-5 h-5 ${style.iconColor}`} />
        <p className={`text-sm leading-relaxed ${style.text}`}>{content}</p>
      </div>
    </div>
  );
};

export default Callout;
