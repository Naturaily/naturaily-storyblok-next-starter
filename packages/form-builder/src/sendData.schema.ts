import { z } from 'zod';

export const SendDataSchema = z.object({
  submissionData: z
    .array(
      z.object({
        field: z.string(),
        value: z.string(),
      }),
    )
    .min(1),
  formId: z.string(),
});

export type SendDataSchema = z.infer<typeof SendDataSchema>;
