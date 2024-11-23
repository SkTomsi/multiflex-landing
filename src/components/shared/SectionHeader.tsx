import { motion } from 'framer-motion';

interface ISectionHeaderProps {
  title: string;
}

export default function SectionHeaderText({ title }: ISectionHeaderProps) {
  return (
    <motion.h3
      initial={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
      viewport={{ once: true }}
      className="text-balance"
    >
      {title}
    </motion.h3>
  );
}

export const SectionHeader = ({
  title,
  description,
  subDesc,
}: {
  title: string;
  description?: string;
  subDesc?: string;
}) => {
  return (
    <div className="mx-auto flex w-full flex-col md:max-w-[1200px] md:flex-row md:items-start md:justify-between">
      <div className="md:[w-30%] text-base font-bold uppercase text-brand-primary md:text-xl">
        {title}
      </div>
      <div className="sub-header-text mt-4 flex flex-col gap-4 md:mt-0 md:w-[70%] md:text-base">
        <p>{description}</p>
        <p>{subDesc}</p>
      </div>
    </div>
  );
};
