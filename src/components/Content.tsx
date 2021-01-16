import React from 'react';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from './CodeBlock';
import { LinkBlock } from './LineBlock';

type Props = {
  markdown: string;
};

export const Content: React.FC<Props> = ({ markdown }: Props) => {
  return (
    <ReactMarkdown
      source={markdown}
      escapeHtml={false}
      renderers={{
        code: CodeBlock,
        link: LinkBlock,
      }}
    />
  );
};
