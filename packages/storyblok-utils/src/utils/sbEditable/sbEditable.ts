// @ts-ignore
import { storyblokEditable, SbBlokData } from '@storyblok/react/rsc';

import { SbComponentType } from '../../types';

/**
 * This TypeScript function checks if a given object has an "_ed itable" property and returns a
 * corresponding object if it does.
 * @param [blok] - The `blok` parameter is an optional argument of type `SbComponentType<string>`. It
 * is used to check if the `_editable` property exists in the `blok` object. If it does, the function
 * returns the result of calling `storyblokEditable` function with the
 * @returns The `sbEditable` function returns an object that contains the editable properties of a
 * Storyblok component. If the `blok` parameter is not provided or does not have an `_editable`
 * property, an empty object is returned.
 */
export const sbEditable = (blok?: SbComponentType) => {
  // eslint-disable-next-line no-underscore-dangle
  if (!blok || !blok?._editable) {
    return {};
  }

  return storyblokEditable(blok as SbBlokData);
};
