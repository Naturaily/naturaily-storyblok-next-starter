'use client';

import React, { ReactNode, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button } from '@natu/ui/Button';
import { Spinner } from '@natu/ui/Spinner';
import { useAction } from '@natu/utils/useAction';

import { DynamicFormRender } from '../components/fields';
import { type SendDataSchema } from '../sendData.schema';
import { sendDynamicFormDataAction } from '../sendDynamicFormData.action';
import { FormFieldBlock } from '../types';

type FormProps = {
  fields: FormFieldBlock[] | null;
  submitButtonLabel: string;
  formId: string;
  headerContent?: ReactNode;
  successContent?: ReactNode;
  className?: string;
};

export const Form = ({
  fields: schemaFields,
  submitButtonLabel,
  formId,
  headerContent,
  successContent,
  className,
  ...rest
}: FormProps) => {
  const [error, setError] = useState<null | string | undefined>(null);

  const formMethods = useForm({
    defaultValues: schemaFields ?? [],
  });

  const { execute, isExecuting, result } = useAction(sendDynamicFormDataAction, {
    onSuccess: () => {},
    onError: s => {
      setError(s.error.serverError);
    },
  });

  if (!schemaFields) {
    return null;
  }

  const onSubmit = async (data: FormFieldBlock[]) => {
    setError(null);
    const dataToSend = Object.entries(data).map(([name, value]) => ({
      field: name,
      value: String(value),
    }));

    await execute({
      submissionData: dataToSend as SendDataSchema['submissionData'],
      formId,
    });
  };

  const isSubmitting = formMethods.formState.isSubmitting || isExecuting;

  if (result?.data?.status === 'success') {
    if (successContent) {
      return successContent;
    }

    return <div dangerouslySetInnerHTML={{ __html: result?.data?.html ?? '' }} {...rest} />;
  }

  return (
    <>
      {headerContent}
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)} className={className} {...rest}>
          <div className="flex flex-col gap-4">
            <DynamicFormRender data={schemaFields} formMethods={formMethods} />
          </div>
          <Button
            disabled={isSubmitting}
            variant="default"
            size="default"
            type="submit"
            className="mt-10 w-full"
          >
            {isSubmitting && <Spinner />}
            {submitButtonLabel}
          </Button>
        </form>
        {error && <div className="mt-4 text-red-500">{error}</div>}
      </FormProvider>
    </>
  );
};
