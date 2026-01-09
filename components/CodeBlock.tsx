import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, filename }) => {
  return (
    <div className="my-10 rounded-sm overflow-hidden border border-sumiInk/10">
      {filename && (
        <div className="bg-sumiInk/5 px-4 py-2 border-b border-sumiInk/10">
          <span className="text-xs font-mono text-sumiInk/70">{filename}</span>
        </div>
      )}
      <SyntaxHighlighter
        language={language || 'javascript'}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          fontSize: '0.875rem',
          lineHeight: '1.5',
        }}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
