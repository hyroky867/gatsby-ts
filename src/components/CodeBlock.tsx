import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia';
import { CodeTitle } from './CodeTitle';
import React from 'react';

export const CodeBlock: React.FC<SyntaxHighlighterProps> = ({
  value,
  language,
}: SyntaxHighlighterProps) => {
  const [lang, title] = language ? language.split(':') : ['', undefined];
  return (
    <>
      <CodeTitle title={title} />
      <SyntaxHighlighter language={lang} style={style} showLineNumbers={true}>
        {value}
      </SyntaxHighlighter>
    </>
  );
};
