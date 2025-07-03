import React from 'react';
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';

import { Input } from '@natu/ui/Input';
import { Label } from '@natu/ui/Label';

import { type InputEmailField as InputEmailFieldType } from '../types';
import { Error } from './Error';
import { RequiredBadge } from './RequiredBadge';

type InputEmailFieldProps = InputEmailFieldType & {
  errors: Partial<FieldErrorsImpl>;
  register: UseFormRegister<FieldValues>;
};

const emailSchema = z.string().email();

export const InputEmailField = ({
  name,
  defaultValue,
  errors,
  label,
  register,
  required,
  placeholder,
}: InputEmailFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>
        {label}

        {required && <RequiredBadge />}
      </Label>
      <Input
        defaultValue={defaultValue}
        placeholder={placeholder}
        id={name}
        type="text"
        {...register(name, {
          required,
          validate: {
            checkAvailability: value => {
              try {
                emailSchema.parse(value);

                return true;
              } catch {
                return 'Invalid email';
              }
            },
          },
        })}
      />

      {errors[name] && <Error name={name} />}
    </div>
  );
};
