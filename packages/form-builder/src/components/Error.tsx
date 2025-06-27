'use client';

import * as React from 'react';
import { useFormContext } from 'react-hook-form';

import { cn } from '@natu/utils/cn';

type ErrorProps = {
  name: string;
  className?: string;
};

export const Error = ({ name, className }: ErrorProps) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className={cn('text-sm text-red-500', className)}>
      {(errors[name]?.message as string) || 'This field is required'}
    </div>
  );
};
