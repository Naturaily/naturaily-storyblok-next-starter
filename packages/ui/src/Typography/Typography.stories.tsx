import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';
import { TypographyVariant } from './Typography.type';
import { typographyVariantsMobile } from './utils/getTypographyVariantStyles';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  args: {
    children: 'Lorem ipsum dolor sit ament',
    variant: 'text-base',
    component: 'p',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: Object.keys(typographyVariantsMobile),
    },
    ref: {
      table: { disable: true },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

const allItems = Object.keys(typographyVariantsMobile) as TypographyVariant[];

export const All: Story = {
  argTypes: {
    variant: {
      table: { disable: true },
    },
    component: {
      table: { disable: true },
    },
  },
  render: ({ children }) => (
    <div className="flex flex-col gap-4">
      {allItems.map(variant => (
        <Typography key={variant} variant={variant}>
          <span>{variant} &gt;</span> {children}
        </Typography>
      ))}
    </div>
  ),
};

export const Base: Story = {};
