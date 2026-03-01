import '@testing-library/jest-dom';

jest.mock('framer-motion', () => {
  const React = require('react');

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
        const {
          layoutId,
          initial,
          animate,
          exit,
          transition,
          layout,
          ...domProps
        } = props;

        return React.createElement('div', { ...domProps, ref }, props.children);
      }),
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  };
});
