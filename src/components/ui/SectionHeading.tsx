import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
}

export function SectionHeading({ children, level = 2 }: SectionHeadingProps) {
  const styles = {
    1: 'text-3xl md:text-4xl font-semibold',
    2: 'text-2xl md:text-3xl font-semibold text-center',
    3: 'text-xl md:text-2xl font-semibold text-center',
  };

  const Tag = `h${level}` as 'h1' | 'h2' | 'h3';

  return <Tag className={styles[level]}>{children}</Tag>;
}
