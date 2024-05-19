'use client';

import PreviewModal from '@/components/PreviewModal';
import { useEffect, useState } from 'react';

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);
  if (!isMounted) return null;
  return <PreviewModal />;
}

export default ModalProvider;
