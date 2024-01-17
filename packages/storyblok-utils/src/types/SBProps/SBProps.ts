/* The `SbComponentType` interface is defining a generic type that takes one type parameter
`TComponent` which defaults to `string`. It defines an object with three properties: `_uid` of type
`string`, `component` of type `TComponent`, and an optional `_editable` property of type `string`.
This interface is used as a base for other interfaces that define specific components in a page
builder or content management system. */
export interface SbComponentType<TComponent extends string = string> {
  _uid: string;
  component: TComponent;
  _editable?: string;
}

type SbBlokKeyDataTypes = string | number | object | boolean | undefined;

export interface BlokItem<TComponent extends string = string> extends SbComponentType<TComponent> {
  [index: string]: SbBlokKeyDataTypes;
}

/* The `SBProps` interface is defining a generic type that takes two type parameters: `TBlokProps` and
`UComponentName`. `TBlokProps` is set to default to `SbComponentType<string>`, which means it is an
object with `_uid` and `component` properties of type `string`, and an optional `_editable` property
of type `string`. `UComponentName` is set to default to `any`, which means it can be any string. */
export interface SBProps<
  TBlokProps = SbComponentType<string>,
  UComponentName extends string = string,
> {
  blok: TBlokProps & SbComponentType<UComponentName>;
}
