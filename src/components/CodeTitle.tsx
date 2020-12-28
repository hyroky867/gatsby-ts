import * as React from 'react';
import styled from 'styled-components';

type Props = {
  title?: string;
};

export const CodeTitle: React.FC<Props> = ({ title }: Props) => {
  return <Span>{title}</Span>;
};

const Span = styled.span`
  display: inline;
  position: relative;
  font-family: var(--font-family);
  color: var(--title-color);
  background-color: var(--bg-color);
  border-top-left-radius: 0.3em;
  border-top-right-radius: 0.3em;
  padding: 4px;
  top: 9px;
`;
