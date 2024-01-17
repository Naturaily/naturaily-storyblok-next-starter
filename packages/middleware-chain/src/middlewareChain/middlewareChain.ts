'use server';

import { NextResponse } from 'next/server';
import type { NextMiddleware } from 'next/server';

type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

export const middlewareChain = (functions: MiddlewareFactory[], index = 0): NextMiddleware => {
  const current = functions[index];

  if (current) {
    const next = middlewareChain(functions, index + 1);

    return current(next);
  }

  return () => NextResponse.next();
};
