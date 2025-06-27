import React from 'react';
import { Controller, type Control, type FieldErrorsImpl } from 'react-hook-form';

import { Label } from '@natu/ui/Label';
import { RadioGroup, RadioGroupItem } from '@natu/ui/RadioGroup';

import { type RadioGroupField as RadioGroupFieldType } from '../types';
import { Error } from './Error';
import { RequiredBadge } from './RequiredBadge';

type RadioGroupFieldProps = RadioGroupFieldType & {
  errors: Partial<FieldErrorsImpl>;
  control: Control;
};

export const RadioGroupField = ({
  name,
  defaultValue,
  errors,
  label,
  control,
  required,
  options,
}: RadioGroupFieldProps) => {
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
            <RadioGroup onValueChange={val => onChange(val)} value={controlledValue?.value}>
              {options.map(option => (
                <div key={option.uid} className="flex items-center gap-2">
                  <RadioGroupItem value={option.value} id={option.uid} />
                  <Label htmlFor={option.uid}>{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          );
        }}
        rules={{ required }}
      />
      {errors[name] && <Error name={name} />}
    </div>
  );
};
