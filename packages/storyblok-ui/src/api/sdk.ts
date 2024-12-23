/* eslint-disable @typescript-eslint/no-unused-vars */
import { StoryblokClient } from '@storyblok/react/rsc';

type GetContentNodeQueryVariables = {
  slug: string;
  relations?: string;
};

export type FetchOptions = {
  version: 'published' | 'draft';
  resolve_relations?: string;
};

export type SdkFunctionWrapper = <T>(
  action: (options?: FetchOptions) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(
  client: () => StoryblokClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    getContentNode(variables: GetContentNodeQueryVariables, options?: FetchOptions) {
      const sbClient = client();
      const { slug, relations } = variables;

      return withWrapper(
        async wrapperOptions =>
          sbClient.get(`cdn/stories/${slug}`, {
            ...wrapperOptions,
            version: options?.version ?? wrapperOptions?.version,
            resolve_relations: relations ?? wrapperOptions?.resolve_relations,
          }),
        'getContentNode',
        'query',
      );
    },

    // getContentNodes(
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
