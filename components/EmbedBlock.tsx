import React, { useRef } from 'react';

interface EmbedBlockProps {
  value: {
    url: string;
    caption?: string;
    height?: number;
  };
}

const EmbedBlock: React.FC<EmbedBlockProps> = ({ value }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const height = value.height || 600;

  const handleFullscreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      } else if ((iframeRef.current as any).webkitRequestFullscreen) {
        (iframeRef.current as any).webkitRequestFullscreen();
      }
    }
  };

  return (
    <div className="my-12">
      <div className="relative w-full rounded-sm border-0.5 border-sumiInk/10 overflow-hidden bg-black">
        <iframe
          ref={iframeRef}
          src={value.url}
          className="w-full block"
          style={{ height: `${height}px` }}
          title={value.caption || 'Embedded content'}
          frameBorder="0"
          allowFullScreen
        />
        <button
          onClick={handleFullscreen}
          className="absolute top-4 right-4 px-3 py-1.5 text-xs uppercase tracking-widest font-semibold bg-hankoRust text-ricePaper rounded-sm hover:bg-hankoRust/80 transition-colors z-10"
          aria-label="View fullscreen"
        >
          Fullscreen
        </button>
      </div>
      {value.caption && (
        <p className="text-center text-xs uppercase tracking-widest text-sumiInk/60 mt-3">
          {value.caption}
        </p>
      )}
    </div>
  );
};

export default EmbedBlock;
