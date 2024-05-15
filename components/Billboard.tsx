import React from 'react';
import { Billboard as BillBoardType } from '@/types/types';

interface Props {
  data: BillBoardType;
}
function Billboard({ data }: Props) {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white">{data.label}</div>
        </div>
      </div>
    </div>
  );
}

export default Billboard;
