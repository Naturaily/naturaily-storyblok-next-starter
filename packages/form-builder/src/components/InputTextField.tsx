import React from 'react';
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';

import { Input } from '@natu/ui/Input';
import { Label } from '@natu/ui/Label';

import { type InputTextField as InputTextFieldType } from '../types';
import { Error } from './Error';
import { RequiredBadge } from './RequiredBadge';

type InputTextFieldProps = InputTextFieldType & {
  errors: Partial<FieldErrorsImpl>;
  register: UseFormRegister<FieldValues>;
};

export const InputTextField = ({
  name,
  defaultValue,
  errors,
  label,
  register,
  required,
  placeholder,
}: InputTextFieldProps) => {
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
        {...register(name, { required })}
      />
      {errors[name] && <Error name={name} />}
    </div>
  );
};
