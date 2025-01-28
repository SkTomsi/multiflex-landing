'use client';

import classnames from 'classnames';
import { useInView } from 'framer-motion';
import { type ReactNode, useEffect, useRef } from 'react';
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
    <div
      ref={ref}
      className={classnames(
        'w-fit pb-20 text-6xl font-bold tracking-tighter transition-colors',
        isInView ? 'text-white' : 'text-white/10',
      )}
    >
      <p className="py-20">{children}</p>
    </div>
  );
};
