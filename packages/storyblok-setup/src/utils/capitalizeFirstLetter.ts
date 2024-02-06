export const capitalizeFirstLetter = <T extends string>(string: T) =>
  string.charAt(0).toUpperCase() + string.slice(1);
