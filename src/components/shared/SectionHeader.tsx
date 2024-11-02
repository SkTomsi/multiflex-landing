import { motion } from 'framer-motion';

interface ISectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: ISectionHeaderProps) {
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
