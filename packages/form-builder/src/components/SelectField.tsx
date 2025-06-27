import React from 'react';
import type { Control, FieldErrorsImpl } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { Label } from '@natu/ui/Label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@natu/ui/Select';

import { type SelectField as SelectFieldType } from '../types';
import { Error } from './Error';
import { RequiredBadge } from './RequiredBadge';

type SelectFieldProps = SelectFieldType & {
  control: Control;
  errors: Partial<FieldErrorsImpl>;
};

export const SelectField = ({
  name,
  control,
  errors,
  label,
  options,
  required,
  placeholder,
  defaultValue,
}: SelectFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>
        {label}
        {required && <RequiredBadge />}
      </Label>
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={({ field: { onChange, value } }) => {
          const controlledValue = options.find(t => t.value === value);

          return (
            <Select onValueChange={val => onChange(val)} value={controlledValue?.value}>
              <SelectTrigger className="w-full" id={name}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map(({ label, value }) => {
                  return (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          );
        }}
        rules={{ required }}
      />
      {errors[name] && <Error name={name} />}
    </div>
  );
};
