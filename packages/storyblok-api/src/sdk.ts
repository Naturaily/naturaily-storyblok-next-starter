/* eslint-disable @typescript-eslint/no-unused-vars */
import { print } from 'graphql/language/printer';

import { ApiFetcher } from '@natu/next-api-fetcher';

import {
  GetContentNodeQueryVariables,
  GetContentNodeQuery,
  GetContentNode,
  GetContentNodesQueryVariables,
  GetContentNodesQuery,
  GetContentNodes,
  GetConfigNode,
  GetConfigNodeQuery,
  GetConfigNodeQueryVariables,
} from './generated/graphql';

interface FetchOptions extends Omit<RequestInit, 'body' | 'method'> {
  next?: NextFetchRequestConfig;
}

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: FetchOptions) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(
  fetcher: ApiFetcher['fetcher'],
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    getContentNode(
      variables: GetContentNodeQueryVariables,
      { headers, ...restFetchOptions }: FetchOptions = {},
    ): Promise<GetContentNodeQuery> {
      return withWrapper(
        async wrapperOptions => {
          const { headers: wrapperHeaders, ...restWrapperOptions } = wrapperOptions || {};
          const { data } = await fetcher<GetContentNodeQuery, GetContentNodeQueryVariables>({
            query: print(GetContentNode),
            variables,
            headers: {
              ...wrapperHeaders,
              ...headers,
            },
            ...restWrapperOptions,
            ...restFetchOptions,
          });

          return data;
        },
        'getContentNode',
        'query',
      );
    },
    getContentNodes(
      variables: GetContentNodesQueryVariables,
      { headers, ...restFetchOptions }: FetchOptions = {},
    ): Promise<GetContentNodesQuery> {
      return withWrapper(
        async wrapperOptions => {
          const { headers: wrapperHeaders, ...restWrapperOptions } = wrapperOptions || {};
          const { data } = await fetcher<GetContentNodeQuery, GetContentNodesQueryVariables>({
            query: print(GetContentNodes),
            variables,
            headers: {
              ...wrapperHeaders,
              ...headers,
            },
            ...restWrapperOptions,
            ...restFetchOptions,
          });

          return data;
        },
        'getContentNodes',
        'query',
      );
    },
    getConfigNode(
      variables: GetConfigNodeQueryVariables,
      { headers, ...restFetchOptions }: FetchOptions = {},
    ): Promise<GetConfigNodeQuery> {
      return withWrapper(
        async wrapperOptions => {
          const { headers: wrapperHeaders, ...restWrapperOptions } = wrapperOptions || {};

          const { data } = await fetcher<GetConfigNodeQuery, GetConfigNodeQueryVariables>({
            query: print(GetConfigNode),
            variables,
            headers: {
              ...wrapperHeaders,
              ...headers,
            },
            ...restWrapperOptions,
            ...restFetchOptions,
          });

          return data;
        },
        'getConfigNode',
        'query',
      );
    },
    // Add more
  };
}

export type Sdk = ReturnType<typeof getSdk>;
