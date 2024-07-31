'use client';

import { type ReactNode } from 'react';
import { useFeatureStore } from './store';
import classNames from 'classnames';
import Image from 'next/image';

type CardProps = {
  title: string;
};
const FeatureCard = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  const { inViewFeature } = useFeatureStore((state) => ({
    inViewFeature: state.inViewFeature,
  }));
  return (
    <div
      className={classNames(
        'absolute inset-0 h-full w-full rounded-2xl bg-red-300 transition-opacity duration-500',
        inViewFeature === title ? 'opacity-100' : 'opacity-0',
      )}
    >
      {children}
    </div>
  );
};

export const Residencies = ({ title }: CardProps) => {
  return (
    <FeatureCard title={title}>
      <div className="h-full w-full">
        <Image
          src="/image.png"
          alt="Residencies"
          width={100}
          height={100}
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>
    </FeatureCard>
  );
};
export const Offices = ({ title }: CardProps) => {
  return (
    <FeatureCard title={title}>
      <span>{title}</span>
    </FeatureCard>
  );
};
export const Hospitability = ({ title }: CardProps) => {
  return (
    <FeatureCard title={title}>
      <span>{title}</span>
    </FeatureCard>
  );
};
