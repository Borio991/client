import { cn } from '@/components/lib/utils';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: Props) {
  return <div className={cn('mx-auto container max-w-7xl', className)}>{children}</div>;
}

export default Container;
