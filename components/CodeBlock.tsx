import React from 'react';
import { codeToHtml } from 'shiki';

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
}

const languageMap: Record<string, string> = {
  javascript: 'javascript',
  typescript: 'typescript',
  python: 'python',
  java: 'java',
  cpp: 'cpp',
  csharp: 'csharp',
  go: 'go',
  rust: 'rust',
  html: 'html',
  css: 'css',
  sql: 'sql',
  bash: 'bash',
  json: 'json',
  yaml: 'yaml',
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, filename }) => {
  const [html, setHtml] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const highlightCode = async () => {
      try {
        const mappedLanguage = languageMap[language] || 'javascript';
        const highlighted = await codeToHtml(code, {
          lang: mappedLanguage,
          theme: 'dark-plus',
        });
        setHtml(highlighted);
      } catch (error) {
        console.error('Shiki highlighting error:', error);
        setHtml(`<pre><code>${code}</code></pre>`);
      } finally {
        setIsLoading(false);
      }
    };

    highlightCode();
  }, [code, language]);

  return (
    <div className="my-10 rounded-sm overflow-hidden border border-sumiInk/10">
      {filename && (
        <div className="bg-sumiInk/5 px-4 py-2 border-b border-sumiInk/10">
          <span className="text-xs font-mono text-sumiInk/70">{filename}</span>
        </div>
      )}
      {isLoading ? (
        <div className="p-6 bg-[#1E1E1E] text-white/50 font-mono text-sm">
          Loading...
        </div>
      ) : (
        <div 
          className="shiki-code-block"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
    </div>
  );
};

export default CodeBlock;
