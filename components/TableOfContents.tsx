import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: any[];
  placement?: 'sidebar' | 'inline';
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content, placement = 'sidebar' }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Extract headings from the portable text content
    const extractedHeadings: Heading[] = [];
    
    content?.forEach((block) => {
      if (block._type === 'block' && (block.style === 'h2' || block.style === 'h3')) {
        const text = block.children?.map((child: any) => child.text).join('') || '';
        // Generate ID to match the one created in Article.tsx
        const id = `heading-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
        const level = block.style === 'h2' ? 2 : 3;
        
        extractedHeadings.push({ id, text, level });
      }
    });
    
    setHeadings(extractedHeadings);
  }, [content]);

  useEffect(() => {
    // Track scroll position to highlight active heading
    const handleScroll = () => {
      // Get all heading elements that exist in the DOM
      const headingElementsMap = headings.map(h => ({
        heading: h,
        element: document.getElementById(h.id)
      })).filter(item => item.element !== null);
      
      if (headingElementsMap.length === 0) return;
      
      // Find the heading that's currently in view
      for (let i = headingElementsMap.length - 1; i >= 0; i--) {
        const { heading, element } = headingElementsMap[i];
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveId(heading.id);
          return;
        }
      }
      
      // If no heading is in view, set first heading as active
      setActiveId(headingElementsMap[0].heading.id);
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
      
      // On mobile, collapse after clicking
      if (placement === 'inline') {
        setIsExpanded(false);
      }
    }
  };

  if (headings.length === 0) return null;

  // Inline placement (beginning of article) - collapsible on mobile, always visible on desktop
  if (placement === 'inline') {
    return (
      <nav className="mb-12 border border-hankoRust/10 rounded-sm bg-ricePaper/50">
        {/* Mobile: Collapsible header */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="lg:hidden w-full flex items-center justify-between px-6 py-4 text-left"
        >
          <h4 className="text-xs uppercase tracking-widest font-bold text-sumiInk/70">
            Table of Contents
          </h4>
          {isExpanded ? (
            <ChevronUp size={16} className="text-sumiInk/50" />
          ) : (
            <ChevronDown size={16} className="text-sumiInk/50" />
          )}
        </button>

        {/* Desktop: Always visible header */}
        <div className="hidden lg:block px-6 py-4 border-b border-hankoRust/10">
          <h4 className="text-xs uppercase tracking-widest font-bold text-sumiInk/70">
            Table of Contents
          </h4>
        </div>

        {/* Content: Collapsible on mobile, always visible on desktop */}
        <ul
          className={`
            px-6 py-4 space-y-3
            lg:block
            ${isExpanded ? 'block' : 'hidden'}
          `}
        >
          {headings.map((heading) => (
            <li key={heading.id}>
              <button
                onClick={() => handleClick(heading.id)}
                className={`
                  text-left text-sm transition-colors hover:text-foxOrange
                  ${heading.level === 3 ? 'pl-4' : ''}
                  ${activeId === heading.id ? 'text-foxOrange font-semibold' : 'text-sumiInk/60'}
                `}
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  // Sidebar placement (sticky on desktop, hidden on mobile/tablet)
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
