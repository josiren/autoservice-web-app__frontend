'use client';

import { useEffect, useState } from 'react';

export const useScale = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const viewportHeight = window.innerHeight;
      const baseHeight = 800;
      const updatedScale = Math.min(viewportHeight / baseHeight, 1);

      console.log(`updated scale: ${updatedScale}`);
      setScale(updatedScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);

    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return scale;
};
