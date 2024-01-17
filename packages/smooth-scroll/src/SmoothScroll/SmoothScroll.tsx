'use client';

import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

export const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: unknown) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return null;
};
