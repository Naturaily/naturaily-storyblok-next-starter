import { ComponentGroupName } from '../componentGroup/componentsGroup.ts';

interface DefaultSchemaOptions {
  pos?: number;
  required?: boolean;
  default_value?: string | boolean | number;
  description?: string;
  display_name?: string;
}

interface SelectOption {
  name: string;
  value: string;
}
interface OptionFieldSchema extends DefaultSchemaOptions {
  type: 'option';
  use_uuid?: boolean;
  source?: 'internal' | 'internal_stories';
  options?: SelectOption[];
  datasource_slug?: string;
  restrict_content_types?: boolean;
  folder_slug?: '{0}/';
  key?: string;
  filter_content_type?: string[];
  exclude_empty_option?: boolean;
}

interface SectionFieldSchema extends DefaultSchemaOptions {
  type: 'section';
  keys?: string[];
  key?: string;
}

interface TabFieldSchema extends DefaultSchemaOptions {
  type: 'tab';
  keys?: string[];
  key?: string;
}

interface BlocksFieldSchema extends DefaultSchemaOptions {
  type: 'bloks';
  use_uuid?: boolean;
  maximum?: number;
  restrict_components?: boolean;
  component_whitelist?: string[];
  key?: string;
}

interface BooleanFieldSchema extends DefaultSchemaOptions {
  type: 'boolean';
  key?: string;
}

interface TextareaFieldSchema extends DefaultSchemaOptions {
  type: 'textarea';
}

interface TableFieldSchema extends DefaultSchemaOptions {
  type: 'table';
}

interface RichtextFieldSchema extends DefaultSchemaOptions {
  type: 'richtext';
  allow_target_blank?: boolean;
  allow_custom_attributes?: boolean;
}

type FieldTypes = 'images' | 'videos' | 'audios' | 'texts';
interface AssetFieldSchema extends DefaultSchemaOptions {
  type: 'asset';
  filetypes?: FieldTypes[];
}

interface NumberFieldSchema extends DefaultSchemaOptions {
  type: 'number';
}

interface MultilinkFieldSchema extends DefaultSchemaOptions {
  type: 'multilink';
  email_link_type?: boolean;
  show_anchor?: boolean;
  allow_target_blank?: boolean;
  allow_custom_attributes?: boolean;
  force_link_scope?: boolean;
  link_scope?: '{0}/';
}

interface TextFieldSchema extends DefaultSchemaOptions {
  type: 'text';
}

export type FieldSchema =
  | TextFieldSchema
  | MultilinkFieldSchema
  | NumberFieldSchema
  | AssetFieldSchema
  | RichtextFieldSchema
  | TableFieldSchema
  | TextareaFieldSchema
  | BooleanFieldSchema
  | BlocksFieldSchema
  | TabFieldSchema
  | SectionFieldSchema
  | OptionFieldSchema;

type Icon =
  | 'block-resize-fc'
  | 'block-center-m'
  | 'block-text-img-c'
  | 'block-table-2'
  | 'block-text-l'
  | 'block-sticker'
  | 'block-text-c'
  | 'block-image'
  | 'block-arrow-pointer'
  | 'block-monitor'
  | 'block-buildin'
  | 'block-wallet';

export interface ComponentSchema {
  componentGroup: ComponentGroupName;
  data: {
    name: string;
    display_name: string;
    schema: Record<string, FieldSchema>;
    is_root: boolean;
    is_nestable: boolean;
    color?: string;
    icon?: Icon;
  };
}
