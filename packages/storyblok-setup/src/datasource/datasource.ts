interface Datasource {
  name: string;
  slug: string;
  dimensions: {
    name: string;
    value: string;
  }[];
}

export const getDatasources = (): Datasource[] => [
  {
    name: 'Align Items',
    slug: 'align-items',
    dimensions: [
      { name: 'start', value: 'start' },
      { name: 'center', value: 'center' },
      { name: 'end', value: 'end' },
      { name: 'baseline', value: 'baseline' },
    ],
  },
  {
    name: 'Container Size',
    slug: 'container-size',
    dimensions: [
      { name: 'full', value: 'full' },
      { name: '1536px', value: 'screen-2xl' },
      { name: '1280px', value: 'screen-xl' },
      { name: '768px', value: 'screen-md' },
    ],
  },
  {
    name: 'CTA',
    slug: 'cta',
    dimensions: [
      { name: 'default', value: 'default' },
      { name: 'destructive', value: 'destructive' },
      { name: 'outline', value: 'outline' },
      { name: 'secondary', value: 'secondary' },
      { name: 'ghost', value: 'ghost' },
      { name: 'link', value: 'link' },
    ],
  },
  { name: 'Font family', slug: 'font-family', dimensions: [{ name: 'primary', value: 'primary' }] },
  {
    name: 'Font size',
    slug: 'font-size',
    dimensions: [
      { name: '12px', value: 'text-xs' },
      { name: '14px', value: 'text-sm' },
      { name: '16px', value: 'text-base' },
      { name: '18px', value: 'text-lg' },
      { name: '20px', value: 'text-xl' },
      { name: '24px', value: 'text-2xl' },
      { name: '30px', value: 'text-3xl' },
      { name: '36px', value: 'text-4xl' },
      { name: '48px', value: 'text-5xl' },
      { name: '60px', value: 'text-6xl' },
      { name: '72px', value: 'text-7xl' },
      { name: '96px', value: 'text-8xl' },
      { name: '128px', value: 'text-9xl' },
    ],
  },
  {
    name: 'Grid variants',
    slug: 'grid-variants',
    dimensions: [
      { name: '1-col', value: '1-col' },
      { name: '2-col', value: '2-col' },
      { name: '3-col', value: '3-col' },
      { name: '4-col', value: '4-col' },
      { name: '5-col', value: '5-col' },
      { name: '1/2', value: '1/2' },
      { name: '2/1', value: '2/1' },
    ],
  },
  {
    name: 'Justify Items',
    slug: 'justify-items',
    dimensions: [
      { name: 'start', value: 'start' },
      { name: 'end', value: 'end' },
      { name: 'spaceBetween', value: 'spaceBetween' },
      { name: 'center', value: 'center' },
      { name: 'around', value: 'around' },
      { name: 'evenly', value: 'evenly' },
    ],
  },
  {
    name: 'Space',
    slug: 'space',
    dimensions: [
      { name: '8px', value: '2' },
      { name: '16px', value: '4' },
      { name: '24px', value: '6' },
      { name: '32px', value: '8' },
      { name: '40px', value: '10' },
      { name: '48px', value: '12' },
      { name: '64px', value: '16' },
      { name: '80px', value: '20' },
    ],
  },
  {
    name: 'Text Align',
    slug: 'text-align',
    dimensions: [
      { name: 'left', value: 'left' },
      { name: 'center', value: 'center' },
      { name: 'right', value: 'right' },
      { name: 'justify', value: 'justify' },
    ],
  },
];
