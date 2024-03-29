'use client';

import { useState, useCallback, useEffect } from 'react';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { coy, a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import { useTheme } from 'next-themes';

export default function ProblemSolving({ id }: { id: string }) {
  const [code, setCode] = useState(``);
  const [mounted, setMounted] = useState(false);
  // const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const onChangeTextarea = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCode(e.target.value);
    },
    []
  );

  const textareaTabHandler = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        setCode(`${code} \t`);
      }
    },
    [code]
  );

  if (!mounted) return null;

  return (
    <div className="relative h-full">
      <div>
        <textarea
          onChange={onChangeTextarea}
          onKeyDown={textareaTabHandler}
          className="absolute z-10 w-full h-full bg-transparent border-none resize-none focus:ring-0"
          value={code}
        />
      </div>
      {/* <div>
        <SyntaxHighlighter
          style={theme === 'light' || theme === undefined ? coy : a11yDark}
          language="java"
          className="w-full h-[250px] overflow-auto absolute z-0"
          showLineNumbers
          useInlineStyles
        >
        <p className="absolute z-0 w-full h-full px-[13px] py-[9px]  scrollbar-thin scrollbar-track-base-content/5 scrollbar-thumb-base-content/40 scrollbar-track-rounded-md scrollbar-thumb-rounded whitespace-pre-wrap overflow-hidden">
          {code}
        </p>
        </SyntaxHighlighter>
      </div> */}
    </div>
  );
}
