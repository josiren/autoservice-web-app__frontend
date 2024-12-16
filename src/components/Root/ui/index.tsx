'use client';

import React, { useEffect } from 'react';


import '@/shared/ui/styles/globals.css';

export const Root = ({ children }: { children: React.ReactNode }) => {
  return (

      <html lang="en">
        <body>{children}</body>
      </html>

  );
};
