'use client';
import Button from '@/components/ui/Button';
import { ShoppingBagIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';

function NavbarActions() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="bg-black flex items-center w-16 px-4 py-2 rounded-full">
        <ShoppingBagIcon size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
}

export default NavbarActions;
