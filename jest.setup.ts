import '@testing-library/jest-dom';
import React, { JSX } from 'react';

jest.mock('framer-motion', () => {
  const createMotionComponent = (tag: keyof JSX.IntrinsicElements) =>
    React.forwardRef(function MockMotionComponent(
      props: React.HTMLAttributes<HTMLElement> & {
        layoutId?: string;
        initial?: unknown;
        animate?: unknown;
        exit?: unknown;
        transition?: unknown;
        layout?: unknown;
        whileHover?: unknown;
        whileTap?: unknown;
        whileInView?: unknown;
      },
      ref: React.Ref<HTMLElement>
    ) {
      const domProps = {
        ...props,
      } as React.HTMLAttributes<HTMLElement> & Record<string, unknown>;

      delete domProps.layoutId;
      delete domProps.initial;
      delete domProps.animate;
      delete domProps.exit;
      delete domProps.transition;
      delete domProps.layout;
      delete domProps.whileHover;
      delete domProps.whileTap;
      delete domProps.whileInView;

      return React.createElement(tag, { ...domProps, ref }, props.children);
    });

  const motion = new Proxy(
    {},
    {
      get: (_, tag) => createMotionComponent(tag as keyof JSX.IntrinsicElements),
    }
  );

  return {
    motion,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
    useInView: () => true,
  };
});
