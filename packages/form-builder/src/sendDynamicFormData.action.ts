'use server';

import { apiPlugin, storyblokInit } from '@storyblok/js';

import { env } from '@natu/env';
import { actionClient } from '@natu/utils/safeAction';
import { tryCatch } from '@natu/utils/tryCatch';

import { SendDataSchema } from './sendData.schema';

const { storyblokApi } = storyblokInit({
  accessToken: env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  apiOptions: {
    region: 'eu',
    maxRetries: 0,
  },
  use: [apiPlugin],
});

export const sendDynamicFormDataAction = actionClient
  .inputSchema(SendDataSchema)
  .action(async ({ parsedInput: { submissionData, formId } }) => {
    const storyblokStoryResponse = await storyblokApi?.getStory(formId, {
      version: 'draft',
    });

    const formUrl = storyblokStoryResponse?.data.story.content?.formUrl;

    if (!formUrl) {
      throw new Error('Form URL is required');
    }

    const { data, error } = await tryCatch(
      fetch(formUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      }),
    );

    if (error) {
      throw new Error('Form has errors');
    }

    const html = await data.text();

    const hasErrors = html?.includes('Please correct the errors below');

    if (hasErrors) {
      throw new Error('Form has errors');
    }

    return {
      status: 'success',
      html,
    };
  });
