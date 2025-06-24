'use server';

import { draftMode } from 'next/headers';

export const handleDisableDraftAction = async () => {
  (await draftMode()).disable();
};
