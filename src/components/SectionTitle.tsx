import React from 'react';
import styled from 'styled-components';

type Props = {
  content: string;
  alignCenter: boolean;
};

export const SectionTitle: React.FC<Props> = ({ content, alignCenter }: Props) => (
  <H2 alignCenter={alignCenter}>{content}</H2>
);

type H2Props = { alignCenter: boolean };

const H2 = styled.h2`
  margin: 0;
  padding: 0 0 8px 0;
  font-size: var(--section-title-size);
  color: var(--title-color);
  text-align: ${({ alignCenter }: H2Props): string => (alignCenter ? 'center' : 'left')};
`;
