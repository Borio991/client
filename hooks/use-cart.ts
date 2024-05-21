import { Product } from '@/types/types';
import toast from 'react-hot-toast';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface CartStore {
  items: Product[];
  addItem: (item: Product) => void;
  remove: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const item = currentItems.find((item) => item.id === data.id);
        if (item) {
          return toast.error('Item already in cart.');
        }
        set({ items: [...currentItems, data] });
        toast.success('Item added to cart.');
      },
      remove(id) {
        const currentItems = get().items;
        const item = currentItems.find((item) => item.id === id);
        if (!item) {
          return toast.error('Item not found in cart.');
        }
        set({ items: currentItems.filter((item) => item.id !== id) });
        toast.success('Item removed from cart.');
      },
      removeAll() {
        set({ items: [] });
        toast.success('All items removed from cart.');
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
