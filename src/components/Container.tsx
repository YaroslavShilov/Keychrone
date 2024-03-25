import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="relative mx-auto max-w-7xl px-8">{children}</div>;
};
