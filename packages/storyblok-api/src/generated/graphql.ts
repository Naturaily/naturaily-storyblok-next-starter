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

export type ConfigComponent = {
  __typename?: 'ConfigComponent';
  _editable?: Maybe<Scalars['String']['output']>;
  _uid?: Maybe<Scalars['String']['output']>;
  component?: Maybe<Scalars['String']['output']>;
  defaultSeo?: Maybe<Scalars['BlockScalar']['output']>;
  defaultTheme?: Maybe<Scalars['String']['output']>;
  footer?: Maybe<Story>;
  forcedTheme?: Maybe<Scalars['String']['output']>;
  googleVerificationId?: Maybe<Scalars['String']['output']>;
  header?: Maybe<Story>;
  notFoundPage?: Maybe<Story>;
  siteName?: Maybe<Scalars['String']['output']>;
  twitterCreator?: Maybe<Scalars['String']['output']>;
};

export type ConfigComponentFooterArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};

export type ConfigComponentHeaderArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};

export type ConfigComponentNotFoundPageArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};

export type ConfigFilterQuery = {
  defaultTheme?: InputMaybe<FilterQueryOperations>;
  footer?: InputMaybe<FilterQueryOperations>;
  forcedTheme?: InputMaybe<FilterQueryOperations>;
  googleVerificationId?: InputMaybe<FilterQueryOperations>;
  header?: InputMaybe<FilterQueryOperations>;
  notFoundPage?: InputMaybe<FilterQueryOperations>;
  siteName?: InputMaybe<FilterQueryOperations>;
  twitterCreator?: InputMaybe<FilterQueryOperations>;
};

export type ConfigItem = {
  __typename?: 'ConfigItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<ConfigComponent>;
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

export type ConfigItems = {
  __typename?: 'ConfigItems';
  items?: Maybe<Array<Maybe<ConfigItem>>>;
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

export type FooterComponent = {
  __typename?: 'FooterComponent';
  _editable?: Maybe<Scalars['String']['output']>;
  _uid?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['BlockScalar']['output']>;
  component?: Maybe<Scalars['String']['output']>;
};

export type FooterItem = {
  __typename?: 'FooterItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<FooterComponent>;
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

export type FooterItems = {
  __typename?: 'FooterItems';
  items?: Maybe<Array<Maybe<FooterItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type HeaderComponent = {
  __typename?: 'HeaderComponent';
  _editable?: Maybe<Scalars['String']['output']>;
  _uid?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['BlockScalar']['output']>;
  component?: Maybe<Scalars['String']['output']>;
};

export type HeaderItem = {
  __typename?: 'HeaderItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<HeaderComponent>;
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

export type HeaderItems = {
  __typename?: 'HeaderItems';
  items?: Maybe<Array<Maybe<HeaderItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
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
  body?: Maybe<Scalars['BlockScalar']['output']>;
  component?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<Scalars['BlockScalar']['output']>;
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

export type QueryType = {
  __typename?: 'QueryType';
  ConfigItem?: Maybe<ConfigItem>;
  ConfigItems?: Maybe<ConfigItems>;
  ContentNode?: Maybe<ContentItem>;
  ContentNodes?: Maybe<ContentItems>;
  DatasourceEntries?: Maybe<DatasourceEntries>;
  Datasources?: Maybe<Datasources>;
  FooterItem?: Maybe<FooterItem>;
  FooterItems?: Maybe<FooterItems>;
  HeaderItem?: Maybe<HeaderItem>;
  HeaderItems?: Maybe<HeaderItems>;
  Links?: Maybe<LinkEntries>;
  PageItem?: Maybe<PageItem>;
  PageItems?: Maybe<PageItems>;
  RateLimit?: Maybe<RateLimit>;
  RedirectItem?: Maybe<RedirectItem>;
  RedirectItems?: Maybe<RedirectItems>;
  Space?: Maybe<Space>;
  Tags?: Maybe<Tags>;
};

export type QueryTypeConfigItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};

export type QueryTypeConfigItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  filter_query_v2?: InputMaybe<ConfigFilterQuery>;
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

export type QueryTypeFooterItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};

export type QueryTypeFooterItemsArgs = {
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

export type QueryTypeHeaderItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};

export type QueryTypeHeaderItemsArgs = {
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

export type QueryTypeRedirectItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};

export type QueryTypeRedirectItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  filter_query_v2?: InputMaybe<RedirectFilterQuery>;
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

export type RedirectComponent = {
  __typename?: 'RedirectComponent';
  _editable?: Maybe<Scalars['String']['output']>;
  _uid?: Maybe<Scalars['String']['output']>;
  component?: Maybe<Scalars['String']['output']>;
  newPath?: Maybe<Scalars['String']['output']>;
  oldPath?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type RedirectFilterQuery = {
  newPath?: InputMaybe<FilterQueryOperations>;
  oldPath?: InputMaybe<FilterQueryOperations>;
  status?: InputMaybe<FilterQueryOperations>;
};

export type RedirectItem = {
  __typename?: 'RedirectItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<RedirectComponent>;
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

export type RedirectItems = {
  __typename?: 'RedirectItems';
  items?: Maybe<Array<Maybe<RedirectItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
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

export type GetConfigNodeQueryVariables = Exact<{
  slug: Scalars['ID']['input'];
  relations?: InputMaybe<Scalars['String']['input']>;
  skipHeader?: InputMaybe<Scalars['Boolean']['input']>;
  skipFooter?: InputMaybe<Scalars['Boolean']['input']>;
  skipNotFoundPage?: InputMaybe<Scalars['Boolean']['input']>;
  skipSeo?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type GetConfigNodeQuery = {
  __typename?: 'QueryType';
  ConfigItem?: {
    __typename?: 'ConfigItem';
    created_at?: string | null;
    first_published_at?: string | null;
    full_slug?: string | null;
    id?: number | null;
    name?: string | null;
    path?: string | null;
    published_at?: string | null;
    release_id?: number | null;
    uuid?: string | null;
    content?: {
      __typename?: 'ConfigComponent';
      _editable?: string | null;
      _uid?: string | null;
      defaultSeo?: any | null;
      twitterCreator?: string | null;
      googleVerificationId?: string | null;
      siteName?: string | null;
      defaultTheme?: string | null;
      forcedTheme?: string | null;
      header?: { __typename?: 'Story'; content?: any | null } | null;
      footer?: { __typename?: 'Story'; content?: any | null } | null;
      notFoundPage?: { __typename?: 'Story'; content?: any | null } | null;
    } | null;
  } | null;
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

export const GetConfigNode = gql`
  query getConfigNode(
    $slug: ID!
    $relations: String = ""
    $skipHeader: Boolean = false
    $skipFooter: Boolean = false
    $skipNotFoundPage: Boolean = false
    $skipSeo: Boolean = false
  ) {
    ConfigItem(id: $slug, resolve_relations: $relations) {
      content {
        _editable
        _uid
        header @skip(if: $skipHeader) {
          content
        }
        footer @skip(if: $skipFooter) {
          content
        }
        notFoundPage @skip(if: $skipNotFoundPage) {
          content
        }
        defaultSeo @skip(if: $skipSeo)
        twitterCreator @skip(if: $skipSeo)
        googleVerificationId @skip(if: $skipSeo)
        siteName @skip(if: $skipSeo)
        defaultTheme
        forcedTheme
      }
      created_at
      first_published_at
      full_slug
      id
      name
      path
      published_at
      release_id
      uuid
    }
  }
`;
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
