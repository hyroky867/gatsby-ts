import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CodeBlock } from './CodeBlock';
import { LinkBlock } from './LineBlock';
import { Markdown } from './Markdown';

type Props = {
  markdown: string;
};

export const Content: React.FC<Props> = ({ markdown }: Props) => {
  return (
    // <ReactMarkdown
    //   plugins={[remarkGfm]}
    //   source={markdown}
    //   escapeHtml={false}
    //   renderers={{
    //     code: CodeBlock,
    //     link: LinkBlock,
    //   }}
    // />
    <Markdown markdown={markdown} />
  );
};
