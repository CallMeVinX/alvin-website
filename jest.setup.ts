import '@testing-library/jest-dom';
import React from 'react';

jest.mock('framer-motion', () => {
  return {
    motion: {
      div: React.forwardRef(function MockMotionDiv(
        props: React.HTMLAttributes<HTMLDivElement> & {
          layoutId?: string;
          initial?: unknown;
          animate?: unknown;
          exit?: unknown;
          transition?: unknown;
          layout?: unknown;
        },
        ref: React.Ref<HTMLDivElement>
      ) {
        const domProps = {
          ...props,
        } as React.HTMLAttributes<HTMLDivElement> & Record<string, unknown>;

        delete domProps.layoutId;
        delete domProps.initial;
        delete domProps.animate;
        delete domProps.exit;
        delete domProps.transition;
        delete domProps.layout;

        return React.createElement('div', { ...domProps, ref }, props.children);
      }),
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  };
});
