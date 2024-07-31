'use client';

import { type ReactNode, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import classnames from 'classnames';
import { useFeatureStore } from './store';

type FeatureTitleProps = {
  children: ReactNode;
  title: string;
};

export const FeatureTitle = ({ children, title }: FeatureTitleProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' });
  const { setInViewFeature } = useFeatureStore((state) => ({
    setInViewFeature: state.setInViewFeature,
  }));
  const { inViewFeature } = useFeatureStore((state) => ({
    inViewFeature: state.inViewFeature,
  }));
  useEffect(() => {
    if (isInView) {
      setInViewFeature(title);
    }
    if (!isInView && inViewFeature === title) {
      setInViewFeature(null);
    }
  }, [isInView, title, setInViewFeature, inViewFeature]);
  return (
    <p
      ref={ref}
      className={classnames(
        'py-12 text-6xl font-bold transition-colors',
        isInView ? 'text-black' : 'text-gray-300',
      )}
    >
      {children}
    </p>
  );
};
