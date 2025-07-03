/*
--------------------------------------------------------------
Storyblok schema component types
*/

type StoryblokBaseComponent = {
  _uid: string;
  _editable: string;
};

type StoryblokCheckboxField = StoryblokBaseComponent & {
  component: 'checkbox';
  name: string;
  label: string;
  required?: boolean;
  defaultValue?: boolean;
};

type StoryblokFormKeyValueOption = StoryblokBaseComponent & {
  label: string;
  value: string;
};

type StoryblokSelectField = StoryblokBaseComponent & {
  component: 'select';
  name: string;
  label: string;
  required?: boolean;
  defaultValue?: string;
  placeholder?: string;
  options: StoryblokFormKeyValueOption[];
};

type StoryblokInputEmailField = StoryblokBaseComponent & {
  component: 'inputEmail';
  name: string;
  label: string;
  required?: boolean;
  defaultValue?: string;
  placeholder?: string;
};

type StoryblokInputTextField = StoryblokBaseComponent & {
  component: 'inputText';
  name: string;
  label: string;
  required?: boolean;
  defaultValue?: string;
  placeholder?: string;
};

export type SotryblokRadioGroupField = StoryblokBaseComponent & {
  component: 'radioGroup';
  name: string;
  label: string;
  required?: boolean;
  defaultValue?: string;
  options: StoryblokFormKeyValueOption[];
};

// All storyblok form fields
type StoryblokFormFields =
  | StoryblokInputEmailField
  | StoryblokInputTextField
  | StoryblokSelectField
  | StoryblokCheckboxField
  | SotryblokRadioGroupField;

type StoryblokFormComponent = StoryblokBaseComponent & {
  fields?: StoryblokFormFields[];
  formUrl?: string;
  buttonText?: string;
};

export type StoryblokFormContentType = {
  slug: string;
  id: number;
  full_slug: string;
  content: StoryblokFormComponent;
};

/*
--------------------------------------------------------------
Form builder component types
*/

export interface InputTextField {
  uid: string;
  component: 'inputText';
  defaultValue?: string;
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}

export interface InputEmailField {
  uid: string;
  component: 'inputEmail';
  defaultValue?: string;
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}

export type SelectField = {
  uid: string;
  component: 'select';
  defaultValue?: string;
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  options: {
    uid: string;
    label: string;
    value: string;
  }[];
};

export type CheckboxField = {
  uid: string;
  component: 'checkbox';
  label: string;
  name: string;
  defaultValue?: boolean;
  required?: boolean;
};

export type RadioGroupField = {
  uid: string;
  component: 'radioGroup';
  name: string;
  label: string;
  defaultValue?: string;
  required?: boolean;
  options: {
    uid: string;
    label: string;
    value: string;
  }[];
};

export type FormFieldBlock =
  | InputEmailField
  | InputTextField
  | SelectField
  | CheckboxField
  | RadioGroupField;

export type FormProps = {
  fields: FormFieldBlock[];
  submitButtonLabel?: string;
};
