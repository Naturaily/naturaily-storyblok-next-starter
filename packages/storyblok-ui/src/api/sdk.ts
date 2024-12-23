/* eslint-disable @typescript-eslint/no-unused-vars */
import { ISbStoriesParams, StoryblokClient } from '@storyblok/react/rsc';

import { GetContentNodeQueryVariables, GetContentNodesQueryVariables } from './sdk.types';

export type SdkFunctionWrapper = <T>(
  action: (options?: ISbStoriesParams) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(
  client: () => StoryblokClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    getContentNode(variables: GetContentNodeQueryVariables) {
      const sbClient = client();
      const { slug, relations } = variables;

      return withWrapper(
        async wrapperOptions =>
          sbClient.get(`cdn/stories/${slug}`, {
            ...wrapperOptions,
            version: wrapperOptions?.version,
            resolve_relations: relations ?? wrapperOptions?.resolve_relations,
          }),
        'getContentNode',
        'GET',
      );
    },
    getContentNodes(variables: GetContentNodesQueryVariables) {
      const sbClient = client();
      const {
        relations,
        excludingSlugs,
        filterQuery,
        page,
        perPage,
        searchTerm,
        sortBy,
        startsWith,
        withTag,
      } = variables;

      const DEFAULT_PAGE = 1;
      const DEFAULT_PER_PAGE = 12;

      return withWrapper(
        async wrapperOptions =>
          sbClient.get('cdn/stories', {
            ...wrapperOptions,
            page: page || DEFAULT_PAGE,
            per_page: perPage || DEFAULT_PER_PAGE,
            starts_with: startsWith ?? '',
            excluding_slugs: excludingSlugs ?? '',
            with_tag: withTag ?? '',
            search_term: searchTerm ?? '',
            filter_query: filterQuery ?? {},
            sort_by: sortBy ?? '',
            version: wrapperOptions?.version,
            resolve_relations: relations ?? wrapperOptions?.resolve_relations,
          }),
        'getContentNodes',
        'GET',
      );
    },

    // getContentNodesold(
    //   variables: GetContentNodesQueryVariables,
    //   { headers, ...restFetchOptions }: FetchOptions = {},
    // ): Promise<GetContentNodesQuery> {
    //   return withWrapper(
    //     async wrapperOptions => {
    //       const { headers: wrapperHeaders, ...restWrapperOptions } = wrapperOptions || {};
    //       const { data } = await fetcher<GetContentNodeQuery, GetContentNodesQueryVariables>({
    //         query: print(GetContentNodes),
    //         variables,
    //         headers: {
    //           ...wrapperHeaders,
    //           ...headers,
    //         },
    //         ...restWrapperOptions,
    //         ...restFetchOptions,
    //       });

    //       return data;
    //     },
    //     'getContentNodes',
    //     'query',
    //   );
    // },
    // getConfigNode(
    //   variables: GetConfigNodeQueryVariables,
    //   { headers, ...restFetchOptions }: FetchOptions = {},
    // ): Promise<GetConfigNodeQuery> {
    //   return withWrapper(
    //     async wrapperOptions => {
    //       const { headers: wrapperHeaders, ...restWrapperOptions } = wrapperOptions || {};
    //       const { data } = await fetcher<GetConfigNodeQuery, GetConfigNodeQueryVariables>({
    //         query: print(GetConfigNode),
    //         variables,
    //         headers: {
    //           ...wrapperHeaders,
    //           ...headers,
    //         },
    //         ...restWrapperOptions,
    //         ...restFetchOptions,
    //       });
    //       return data;
    //     },
    //     'getConfigNode',
    //     'query',
    //   );
    // },
    // Add more
  };
}

export type Sdk = ReturnType<typeof getSdk>;
