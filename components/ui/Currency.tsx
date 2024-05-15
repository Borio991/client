'use client';
import { formatter } from '@/components/lib/utils';
import React from 'react';

interface Props {
  price: string | number;
}

function Currency({ price }: Props) {
  return <div className="font-semibold">{formatter.format(Number(price))}</div>;
}

export default Currency;
