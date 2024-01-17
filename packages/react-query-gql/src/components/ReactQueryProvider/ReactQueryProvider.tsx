import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';

export interface ReactQueryProviderProps {
  children?: ReactNode;
  client: QueryClient;
}

export const ReactQueryProvider = ({ children, client }: ReactQueryProviderProps) => (
  <QueryClientProvider client={client}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
