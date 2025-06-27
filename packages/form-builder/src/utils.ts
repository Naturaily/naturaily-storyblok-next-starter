import { isArrayWithLength } from '@natu/utils/isArrayWithLength';

import { FormFieldBlock, StoryblokFormContentType } from './types';

const getFormFields = (form: StoryblokFormContentType): FormFieldBlock[] | null => {
  const fields = form.content.fields;

  if (!isArrayWithLength(fields)) {
    return null;
  }

  return fields.map(field => {
    if (field.component === 'radioGroup') {
      return {
        uid: field._uid,
        component: field.component,
        defaultValue: field.defaultValue,
        label: field.label,
        name: field.name,
        required: field.required,
        options: field.options.map(option => ({
          uid: option._uid,
          label: option.label,
          value: option.value,
        })),
      };
    }

    if (field.component === 'checkbox') {
      return {
        uid: field._uid,
        component: field.component,
        defaultValue: field.defaultValue,
        label: field.label,
        name: field.name,
        required: field.required,
      };
    }

    if (field.component === 'select') {
      return {
        uid: field._uid,
        component: field.component,
        defaultValue: field.defaultValue,
        label: field.label,
        name: field.name,
        required: field.required,
        placeholder: field.placeholder,
        options: field.options.map(option => ({
          uid: option._uid,
          label: option.label,
          value: option.value,
        })),
      };
    }

    return {
      uid: field._uid,
      component: field.component,
      defaultValue: field.defaultValue,
      label: field.label,
      name: field.name,
      required: field.required,
      placeholder: field.placeholder,
    };
  });
};

const getFormId = (form: StoryblokFormContentType) => {
  return String(form.id);
};

export const getFormPropsFromStoryblok = (form: StoryblokFormContentType) => {
  return {
    fields: getFormFields(form),
    submitButtonLabel: form.content.buttonText || 'Submit',
    formId: getFormId(form),
  };
};
