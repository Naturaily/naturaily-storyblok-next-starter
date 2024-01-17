/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import gql from 'graphql-tag';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BlockScalar: { input: any; output: any };
  ISO8601DateTime: { input: any; output: any };
  JsonScalar: { input: any; output: any };
};

export type Alternate = {
  __typename?: 'Alternate';
  fullSlug: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isFolder?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['Int']['output']>;
  published: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
};

export type Asset = {
  __typename?: 'Asset';
  alt?: Maybe<Scalars['String']['output']>;
  copyright?: Maybe<Scalars['String']['output']>;
  filename: Scalars['String']['output'];
  focus?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type BodycompComponent = {
  __typename?: 'BodycompComponent';
  _editable?: Maybe<Scalars['String']['output']>;
  _uid?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['BlockScalar']['output']>;
  component?: Maybe<Scalars['String']['output']>;
};

export type BodycompItem = {
  __typename?: 'BodycompItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<BodycompComponent>;
  created_at?: Maybe<Scalars['String']['output']>;
  default_full_slug?: Maybe<Scalars['String']['output']>;
  first_published_at?: Maybe<Scalars['String']['output']>;
  full_slug?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_startpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  meta_data?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['String']['output']>;
  release_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort_by_date?: Maybe<Scalars['String']['output']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type BodycompItems = {
  __typename?: 'BodycompItems';
  items?: Maybe<Array<Maybe<BodycompItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type ContentItem = {
  __typename?: 'ContentItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<Scalars['JsonScalar']['output']>;
  content_string?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  default_full_slug?: Maybe<Scalars['String']['output']>;
  first_published_at?: Maybe<Scalars['String']['output']>;
  full_slug?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_startpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  meta_data?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['String']['output']>;
  release_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort_by_date?: Maybe<Scalars['String']['output']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type ContentItems = {
  __typename?: 'ContentItems';
  items?: Maybe<Array<Maybe<ContentItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Datasource = {
  __typename?: 'Datasource';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type DatasourceEntries = {
  __typename?: 'DatasourceEntries';
  items: Array<DatasourceEntry>;
  total: Scalars['Int']['output'];
};

export type DatasourceEntry = {
  __typename?: 'DatasourceEntry';
  dimensionValue?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Datasources = {
  __typename?: 'Datasources';
  items: Array<Datasource>;
};

export type FilterQueryOperations = {
  /** Must match all values of given array */
  all_in_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Greater than date (Exmples: 2019-03-03 or 2020-03-03T03:03:03) */
  gt_date?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  /** Greater than float value */
  gt_float?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than integer value */
  gt_int?: InputMaybe<Scalars['Int']['input']>;
  /** Matches exactly one value */
  in?: InputMaybe<Scalars['String']['input']>;
  /** Matches any value of given array */
  in_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches exactly one integer value */
  in_int?: InputMaybe<Scalars['Int']['input']>;
  /** Matches exactly one value with a wildcard search using * */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Less than date (Format: 2019-03-03 or 2020-03-03T03:03:03) */
  lt_date?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  /** Less than float value */
  lt_float?: InputMaybe<Scalars['Float']['input']>;
  /** Less than integer value */
  lt_int?: InputMaybe<Scalars['Int']['input']>;
  /** Matches all without the given value */
  not_in?: InputMaybe<Scalars['String']['input']>;
  /** Matches all without the given value */
  not_like?: InputMaybe<Scalars['String']['input']>;
};

export type Link = {
  __typename?: 'Link';
  cachedUrl: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  fieldtype: Scalars['String']['output'];
  id: Scalars['String']['output'];
  linktype: Scalars['String']['output'];
  story?: Maybe<Story>;
  url: Scalars['String']['output'];
};

export type LinkEntries = {
  __typename?: 'LinkEntries';
  items: Array<LinkEntry>;
};

export type LinkEntry = {
  __typename?: 'LinkEntry';
  id?: Maybe<Scalars['Int']['output']>;
  isFolder?: Maybe<Scalars['Boolean']['output']>;
  isStartpage?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type PageComponent = {
  __typename?: 'PageComponent';
  _editable?: Maybe<Scalars['String']['output']>;
  _uid?: Maybe<Scalars['String']['output']>;
  asset?: Maybe<Asset>;
  assets?: Maybe<Array<Maybe<Asset>>>;
  body?: Maybe<Scalars['BlockScalar']['output']>;
  component?: Maybe<Scalars['String']['output']>;
  filter?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Link>;
  link1?: Maybe<Link>;
  live?: Maybe<Scalars['Boolean']['output']>;
  multioptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  newfield_hello?: Maybe<Scalars['String']['output']>;
  nr?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  plugin?: Maybe<Scalars['JsonScalar']['output']>;
  single_product?: Maybe<Story>;
  stories?: Maybe<Array<Maybe<Story>>>;
  table?: Maybe<Scalars['String']['output']>;
  table_json?: Maybe<Scalars['JsonScalar']['output']>;
  teasered_products?: Maybe<Array<Maybe<Story>>>;
  testItem?: Maybe<Scalars['String']['output']>;
};

export type PageComponentSingleProductArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};

export type PageComponentStoriesArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
};

export type PageComponentTeaseredProductsArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
};

export type PageFilterQuery = {
  filter?: InputMaybe<FilterQueryOperations>;
  live?: InputMaybe<FilterQueryOperations>;
  multioptions?: InputMaybe<FilterQueryOperations>;
  newfield_hello?: InputMaybe<FilterQueryOperations>;
  nr?: InputMaybe<FilterQueryOperations>;
  number?: InputMaybe<FilterQueryOperations>;
  single_product?: InputMaybe<FilterQueryOperations>;
  stories?: InputMaybe<FilterQueryOperations>;
  teasered_products?: InputMaybe<FilterQueryOperations>;
  testItem?: InputMaybe<FilterQueryOperations>;
};

export type PageItem = {
  __typename?: 'PageItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<PageComponent>;
  created_at?: Maybe<Scalars['String']['output']>;
  default_full_slug?: Maybe<Scalars['String']['output']>;
  first_published_at?: Maybe<Scalars['String']['output']>;
  full_slug?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_startpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  meta_data?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['String']['output']>;
  release_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort_by_date?: Maybe<Scalars['String']['output']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type PageItems = {
  __typename?: 'PageItems';
  items?: Maybe<Array<Maybe<PageItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type ProductComponent = {
  __typename?: 'ProductComponent';
  _editable?: Maybe<Scalars['String']['output']>;
  _uid?: Maybe<Scalars['String']['output']>;
  asset?: Maybe<Array<Maybe<Asset>>>;
  component?: Maybe<Scalars['String']['output']>;
  home?: Maybe<Story>;
  image?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Link>;
  name?: Maybe<Scalars['String']['output']>;
  newfield?: Maybe<Scalars['String']['output']>;
  tbl?: Maybe<Scalars['String']['output']>;
  tbl_json?: Maybe<Scalars['JsonScalar']['output']>;
};

export type ProductComponentHomeArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};

export type ProductFilterQuery = {
  home?: InputMaybe<FilterQueryOperations>;
  name?: InputMaybe<FilterQueryOperations>;
  newfield?: InputMaybe<FilterQueryOperations>;
};

export type ProductItem = {
  __typename?: 'ProductItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<ProductComponent>;
  created_at?: Maybe<Scalars['String']['output']>;
  default_full_slug?: Maybe<Scalars['String']['output']>;
  first_published_at?: Maybe<Scalars['String']['output']>;
  full_slug?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_startpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  meta_data?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['String']['output']>;
  release_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort_by_date?: Maybe<Scalars['String']['output']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type ProductItems = {
  __typename?: 'ProductItems';
  items?: Maybe<Array<Maybe<ProductItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type QueryType = {
  __typename?: 'QueryType';
  BodycompItem?: Maybe<BodycompItem>;
  BodycompItems?: Maybe<BodycompItems>;
  ContentNode?: Maybe<ContentItem>;
  ContentNodes?: Maybe<ContentItems>;
  DatasourceEntries?: Maybe<DatasourceEntries>;
  Datasources?: Maybe<Datasources>;
  Links?: Maybe<LinkEntries>;
  PageItem?: Maybe<PageItem>;
  PageItems?: Maybe<PageItems>;
  ProductItem?: Maybe<ProductItem>;
  ProductItems?: Maybe<ProductItems>;
  RateLimit?: Maybe<RateLimit>;
  Space?: Maybe<Space>;
  Tags?: Maybe<Tags>;
};

export type QueryTypeBodycompItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};

export type QueryTypeBodycompItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>;
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['String']['input']>;
  is_startpage?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  published_at_gt?: InputMaybe<Scalars['String']['input']>;
  published_at_lt?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
};

export type QueryTypeContentNodeArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};

export type QueryTypeContentNodesArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>;
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['String']['input']>;
  is_startpage?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  published_at_gt?: InputMaybe<Scalars['String']['input']>;
  published_at_lt?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
};

export type QueryTypeDatasourceEntriesArgs = {
  datasource?: InputMaybe<Scalars['String']['input']>;
  dimension?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryTypeDatasourcesArgs = {
  by_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type QueryTypeLinksArgs = {
  paginated?: InputMaybe<Scalars['Boolean']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type QueryTypePageItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};

export type QueryTypePageItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  filter_query_v2?: InputMaybe<PageFilterQuery>;
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>;
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['String']['input']>;
  is_startpage?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  published_at_gt?: InputMaybe<Scalars['String']['input']>;
  published_at_lt?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
};

export type QueryTypeProductItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};

export type QueryTypeProductItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  filter_query_v2?: InputMaybe<ProductFilterQuery>;
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>;
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['String']['input']>;
  is_startpage?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  published_at_gt?: InputMaybe<Scalars['String']['input']>;
  published_at_lt?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
};

export type QueryTypeTagsArgs = {
  starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type RateLimit = {
  __typename?: 'RateLimit';
  maxCost: Scalars['Int']['output'];
};

export type Space = {
  __typename?: 'Space';
  domain: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  languageCodes: Array<Maybe<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type Story = {
  __typename?: 'Story';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<Scalars['JsonScalar']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  firstPublishedAt?: Maybe<Scalars['String']['output']>;
  fullSlug?: Maybe<Scalars['String']['output']>;
  groupId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isStartpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  metaData?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['String']['output']>;
  releaseId?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sortByDate?: Maybe<Scalars['String']['output']>;
  tagList?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translatedSlugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String']['output'];
  taggingsCount: Scalars['Int']['output'];
};

export type Tags = {
  __typename?: 'Tags';
  items: Array<Tag>;
};

export type TranslatedSlug = {
  __typename?: 'TranslatedSlug';
  lang: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
};

export type GetContentNodeQueryVariables = Exact<{
  slug: Scalars['ID']['input'];
  relations?: InputMaybe<Scalars['String']['input']>;
  skipContent?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type GetContentNodeQuery = {
  __typename?: 'QueryType';
  ContentNode?: {
    __typename?: 'ContentItem';
    id?: number | null;
    first_published_at?: string | null;
    full_slug?: string | null;
    name?: string | null;
    published_at?: string | null;
    slug?: string | null;
    uuid?: string | null;
    content?: any | null;
  } | null;
};

export type GetContentNodesQueryVariables = Exact<{
  relations?: InputMaybe<Scalars['String']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
  excludingSlugs?: InputMaybe<Scalars['String']['input']>;
  withTag?: InputMaybe<Scalars['String']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  filterQuery?: InputMaybe<Scalars['JsonScalar']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  skipContent?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type GetContentNodesQuery = {
  __typename?: 'QueryType';
  ContentNodes?: {
    __typename?: 'ContentItems';
    total?: number | null;
    items?: Array<{
      __typename?: 'ContentItem';
      content?: any | null;
      created_at?: string | null;
      first_published_at?: string | null;
      full_slug?: string | null;
      id?: number | null;
      name?: string | null;
      path?: string | null;
      published_at?: string | null;
      slug?: string | null;
      uuid?: string | null;
    } | null> | null;
  } | null;
};

export type GetLinksQueryVariables = Exact<{
  startsWith?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetLinksQuery = {
  __typename?: 'QueryType';
  Links?: {
    __typename?: 'LinkEntries';
    items: Array<{
      __typename?: 'LinkEntry';
      isFolder?: boolean | null;
      isStartpage?: boolean | null;
      slug?: string | null;
      published?: boolean | null;
    }>;
  } | null;
};

export const GetContentNode = gql`
  query getContentNode($slug: ID!, $relations: String = "", $skipContent: Boolean = false) {
    ContentNode(id: $slug, resolve_relations: $relations) {
      id
      first_published_at
      full_slug
      name
      published_at
      slug
      uuid
      content @skip(if: $skipContent)
    }
  }
`;
export const GetContentNodes = gql`
  query getContentNodes(
    $relations: String = ""
    $perPage: Int = 12
    $page: Int = 1
    $startsWith: String = ""
    $excludingSlugs: String = ""
    $withTag: String = ""
    $searchTerm: String = ""
    $filterQuery: JsonScalar = {}
    $sortBy: String = ""
    $skipContent: Boolean = false
  ) {
    ContentNodes(
      page: $page
      resolve_relations: $relations
      per_page: $perPage
      starts_with: $startsWith
      excluding_slugs: $excludingSlugs
      search_term: $searchTerm
      with_tag: $withTag
      filter_query: $filterQuery
      sort_by: $sortBy
    ) {
      total
      items {
        content @skip(if: $skipContent)
        created_at
        first_published_at
        full_slug
        id
        name
        path
        published_at
        slug
        uuid
      }
    }
  }
`;
export const GetLinks = gql`
  query getLinks($startsWith: String = "") {
    Links(starts_with: $startsWith) {
      items {
        isFolder
        isStartpage
        slug
        published
      }
    }
  }
`;
