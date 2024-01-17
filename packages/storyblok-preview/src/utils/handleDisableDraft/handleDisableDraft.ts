'use server';

import { draftMode } from 'next/headers';

export const handleDisableDraft = async () => {
  draftMode().disable();
};
