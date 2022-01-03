import React, { FC, ReactNode } from 'react';

const AvailableColumnLayouts = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-2 xl:grid-cols-4',
} as const;

export type GridProps = {
  cols: keyof typeof AvailableColumnLayouts;
  className?: string;
  children?: ReactNode;
};

export const Grid: FC<GridProps> = ({ cols, children, className = '' }) => (
  <div
    className={`grid ${AvailableColumnLayouts[cols]} grid-flow-row md:auto-rows-fr my-8 xl:my-16 gap-8 xl:gap-16 ${className}`}
  >
    {children}
  </div>
);