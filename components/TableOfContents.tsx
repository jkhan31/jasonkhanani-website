import React, { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: any[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from the portable text content
    const extractedHeadings: Heading[] = [];
    
    content?.forEach((block, index) => {
      if (block._type === 'block' && (block.style === 'h2' || block.style === 'h3')) {
        const text = block.children?.map((child: any) => child.text).join('') || '';
        const id = `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
        const level = block.style === 'h2' ? 2 : 3;
        
        extractedHeadings.push({ id, text, level });
      }
    });
    
    setHeadings(extractedHeadings);
  }, [content]);

  useEffect(() => {
    // Track scroll position to highlight active heading
    const handleScroll = () => {
      const headingElements = headings.map(h => document.getElementById(h.id)).filter(Boolean);
      
      // Find the heading that's currently in view
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i];
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveId(headings[i].id);
          return;
        }
      }
      
      // If no heading is in view, clear active
      if (headingElements.length > 0) {
        setActiveId(headings[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-200px)] overflow-y-auto">
      <div className="border-l-2 border-hankoRust/10 pl-6">
        <h4 className="text-[10px] uppercase tracking-widest font-bold text-sumiInk/50 mb-6">
          On This Page
        </h4>
        <ul className="space-y-3">
          {headings.map((heading) => (
            <li key={heading.id}>
              <button
                onClick={() => handleClick(heading.id)}
                className={`text-left text-sm transition-colors hover:text-foxOrange ${
                  heading.level === 3 ? 'pl-4' : ''
                } ${
                  activeId === heading.id
                    ? 'text-foxOrange font-semibold'
                    : 'text-sumiInk/60'
                }`}
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TableOfContents;
