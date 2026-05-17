import React from 'react';

interface NoteCardProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

const NoteCard: React.FC<NoteCardProps> = ({ label, children, className = '' }) => {
  return (
    <div
      className={`
        bg-cardBg
        border border-0.5 border-darkText/10
        rounded-sm
        p-5
        ${className}
      `}
    >
      <div className="font-mono text-xs tracking-widest uppercase text-bodyText/60 mb-3">
        {label}
      </div>
      <div className="text-sm text-bodyText leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default NoteCard;
