import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { Tomato } from './Tomato';

type Props = {
  markdown: string;
};

export const Markdown: React.FC<Props> = ({ markdown }: Props) => (
  <>
    {/* MDXProviderで独自に作成したコンポーネントをマークダウンに追加 */}
    <MDXProvider
      components={{
        Tomato,
      }}
    >
      {/* MDXRendererでコンテンツを表示 */}
      <MDXRenderer>{markdown}</MDXRenderer>
    </MDXProvider>
  </>
);
