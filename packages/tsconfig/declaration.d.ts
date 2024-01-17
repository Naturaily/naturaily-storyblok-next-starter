declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare global {
  interface Window {}
}

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
  }

  interface RequestInit extends globalThis.RequestInit {
    next?: NextFetchRequestConfig | undefined;
  }
}

interface NextFetchRequestConfig {
  revalidate?: number | false;
  tags?: string[];
}

interface RequestInit {
  next?: NextFetchRequestConfig | undefined;
}
