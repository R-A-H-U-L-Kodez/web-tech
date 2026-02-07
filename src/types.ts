import React from 'react';

// This file is imported in index.tsx to make the declarations global.

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': {
        icon: string;
        className?: string;
        style?: React.CSSProperties;
        [key: string]: any;
      };
    }
  }

  interface Window {
    UnicornStudio?: {
        isInitialized: boolean;
        init: () => void;
    };
  }
}

export {};
