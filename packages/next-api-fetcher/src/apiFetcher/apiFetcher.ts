interface NextFetchRequestConfig {
  revalidate?: number | false;
  tags?: string[];
}

type Exact<T> = { [K in keyof T]: T[K] };

interface FetcherInput<U> {
  query: string;
  cache?: RequestCache;
  variables?: Exact<U>;
  headers?: HeadersInit;
  next?: NextFetchRequestConfig;
}

export class ApiFetcher {
  constructor(
    private endpoint: string,
    public readonly requestParams: Pick<RequestInit, 'headers' | 'cache' | 'next'> = {},
  ) {
    this.fetcher = this.fetcher.bind(this);
  }

  async fetcher<T, U>({
    cache,
    headers,
    query,
    next,
    variables,
    ...rest
  }: FetcherInput<U>): Promise<{ status: number; data: T } | never> {
    try {
      const result = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...this.requestParams.headers,
          ...headers,
        },
        body: JSON.stringify({
          query,
          ...(variables && { variables }),
        }),
        cache: cache || this.requestParams.cache,
        next: next || this.requestParams.next,
        ...rest,
      });

      const data = await result.json();

      return {
        data: data.data,
        status: data.status,
      };
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw {
        error: e,
        query,
      };
    }
  }
}
