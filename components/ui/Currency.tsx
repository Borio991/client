'use client';
import { formatter } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

interface Props {
  price: string | number;
}

function Currency({ price }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  if (!isMounted) return null;
  return <div className="font-semibold">{formatter.format(Number(price))}</div>;
}

export default Currency;
