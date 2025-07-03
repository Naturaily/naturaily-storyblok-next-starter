/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormReturn } from 'react-hook-form';

import { FormFieldBlock } from '../types';
import { CheckboxField } from './CheckboxField';
import { InputEmailField } from './InputEmailField';
import { InputTextField } from './InputTextField';
import { RadioGroupField } from './RadioGroupField';
import { SelectField } from './SelectField';

export const fields = {
  inputText: InputTextField,
  inputEmail: InputEmailField,
  select: SelectField,
  checkbox: CheckboxField,
  radioGroup: RadioGroupField,
};

type DynamicFormRenderProps = {
  data: FormFieldBlock[];
  formMethods: UseFormReturn<FormFieldBlock[], any, FormFieldBlock[]>;
};

export const DynamicFormRender = ({ data, formMethods }: DynamicFormRenderProps) => {
  return data.map(field => {
    const Field: React.FC<any> = fields?.[field.component as keyof typeof fields];

    if (Field) {
      return (
        <Field
          key={field.uid}
          {...field}
          {...formMethods}
          control={formMethods.control}
          errors={formMethods.formState.errors}
          register={formMethods.register}
        />
      );
    }

    return null;
  });
};
