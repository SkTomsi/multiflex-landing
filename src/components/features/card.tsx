'use client';

import OImage from '@/assets/IDFCCONF.webp';
import RImage from '@/assets/gallery/residences/residence.jpg';
import HImage from '@/assets/hosp-main.jpg';
import classNames from 'classnames';
import Image from 'next/image';
import { type ReactNode } from 'react';
import { useFeatureStore } from './store';

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
        'absolute inset-0 h-full w-full  overflow-hidden  transition-opacity duration-500',
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
      <Image src={RImage} alt="Residencies" className="w-full object-cover" />
    </FeatureCard>
  );
};
export const Offices = ({ title }: CardProps) => {
  return (
    <FeatureCard title={title}>
      <Image src={OImage} alt="Residencies" className="h-full object-cover" />
    </FeatureCard>
  );
};
export const Hospitability = ({ title }: CardProps) => {
  return (
    <FeatureCard title={title}>
      <Image src={HImage} alt="Residencies" className="h-full object-cover" />
    </FeatureCard>
  );
};
