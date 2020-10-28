import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Component: React.FC<Props> = ({ children }: Props) => (
  <div>
    <h3>My Wonderful Website Layout</h3>
    {children}
  </div>
);

export default Component;
