import React from 'react';
import { cn } from '@/lib/utils';

interface WelcomeProps {
  containerClassName?: string; // Optional string prop
  welcomeClassName?: string;
  cuClassName?: string;
}

export default function Welcome({
  containerClassName,
  welcomeClassName,
  cuClassName,
}: WelcomeProps) {
  return (
    <div
      className={cn(
        'text-center font-season italic mt-8 mb-28',
        containerClassName
      )}
    >
      <h1 className={cn('text-4xl mb-1', welcomeClassName)}>Welcome,</h1>
      <h1
        className={cn(
          'text-3xl bg-gradient-to-t bg-clip-text text-transparent from-project-fuchsia from-30% via-80% to-95% to-project-cream',
          cuClassName
        )}
      >
        CU108
      </h1>
    </div>
  );
}
