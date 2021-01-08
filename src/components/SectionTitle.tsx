import React from 'react';
import styled from 'styled-components';

type Props = {
  content: string;
  alignCenter: boolean;
};

export const SectionTitle: React.FC<Props> = ({ content, alignCenter }: Props) => (
  <H1 alignCenter={alignCenter}>{content}</H1>
);

type H2Props = { alignCenter: boolean };

const H1 = styled.h1`
  margin: 0;
  padding: 0 0 8px 0;
  text-align: ${({ alignCenter }: H2Props): string => (alignCenter ? 'center' : 'left')};
  font-size: 24px;
  color: var(--title-color);
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: gray;
  }
`;
