'use client';
import { cn } from '@/components/lib/utils';
import React, { MouseEventHandler } from 'react';

interface Props {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
}

function IconButton({ icon, className, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition',
        className
      )}
    >
      {icon}
    </button>
  );
}

export default IconButton;
