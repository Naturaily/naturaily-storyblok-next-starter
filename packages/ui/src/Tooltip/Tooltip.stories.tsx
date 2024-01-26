import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    delayDuration: 300,
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: args => (
    <TooltipProvider delayDuration={args.delayDuration}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Any data as children</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
