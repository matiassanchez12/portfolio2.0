import React from 'react';
import { TooltipProvider } from '../ui/tooltip';

export default function Container({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl pt-4 px-4 sm:px-6 md:px-8 lg:px-10 ${className}`}
      {...props}>
      <TooltipProvider>{children}</TooltipProvider>
    </div>
  );
}
