'use client';

import { MouseEvent, useCallback, useState } from 'react';

type UseToggleValue = boolean;
export type ToggleFunc = (value?: UseToggleValue | MouseEvent<HTMLElement>) => void;

/**
 * It returns a tuple of the current value and a function that toggles the value
 * @param [initialOn=false] - The initial value of the toggle.
 * @returns An array with two values. The first value is the current state of the toggle. The second
 * value is a function that can be used to toggle the state.
 */
export const useToggle = (initialOn = false): [UseToggleValue, ToggleFunc] => {
  const [on, setOn] = useState<UseToggleValue>(initialOn);

  const toggle = useCallback<ToggleFunc>(
    value => setOn(currentValue => (typeof value === 'boolean' ? value : !currentValue)),
    [],
  );

  return [on, toggle];
};
