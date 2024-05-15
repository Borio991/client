'use server';
import { Billboard } from '@/types/types';

const Url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (id: string): Promise<Billboard> => {
  const response = await fetch(`${Url}/${id}`, { cache: 'no-cache' });
  return response.json();
};
export default getBillboards;
