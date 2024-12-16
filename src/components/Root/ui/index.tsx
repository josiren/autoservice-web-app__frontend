'use client';

import React, { useEffect } from 'react';

import { postEvent } from '@telegram-apps/sdk';
import { SDKProvider } from '@telegram-apps/sdk-react';

import '@/shared/ui/styles/globals.css';

export const Root = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const setupSDK = async () => {
      try {
        postEvent('web_app_expand');
        postEvent('web_app_setup_swipe_behavior', { allow_vertical_swipe: false });
        postEvent('web_app_set_header_color', { color: '#000000' });
        postEvent('web_app_set_background_color', { color: '#000000' });
      } catch (error) {
        console.error('Wrong development place: go to your tg bot:', error);
      }
    };
    setupSDK();
  }, []);
  return (
    <SDKProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </SDKProvider>
  );
};
