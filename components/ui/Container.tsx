import React from 'react';

interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props) {
  return <div className="mx-auto container max-w-7xl">{children}</div>;
}

export default Container;
