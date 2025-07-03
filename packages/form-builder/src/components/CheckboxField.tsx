import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';

import { Checkbox } from '@natu/ui/Checkbox';
import { Label } from '@natu/ui/Label';

import { type CheckboxField as CheckboxFieldType } from '../types';
import { Error } from './Error';
import { RequiredBadge } from './RequiredBadge';

type CheckboxFieldProps = CheckboxFieldType & {
  errors: Partial<FieldErrorsImpl>;
  register: UseFormRegister<FieldValues>;
};

export const CheckboxField = ({
  name,
  defaultValue,
  errors,
  label,
  register,
  required,
}: CheckboxFieldProps) => {
  const { setValue } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Checkbox
          defaultChecked={defaultValue}
          id={name}
          {...register(name, { required: required })}
          onCheckedChange={checked => {
            setValue(name, checked);
          }}
        />
        <Label htmlFor={name}>
          {label}
          {required && <RequiredBadge />}
        </Label>
      </div>
      {errors[name] && <Error name={name} />}
    </div>
  );
};
