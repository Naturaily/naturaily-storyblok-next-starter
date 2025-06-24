import {
  SBProps,
  Spacing,
  StoryblokTable,
  resolveStoryblokStyles,
  sbEditable,
} from '@natu/storyblok-utils';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@natu/ui';

interface SBTableProps {
  table?: StoryblokTable;
  caption?: string;
  mtMobile?: Spacing;
  mtTablet?: Spacing;
  mtDesktop?: Spacing;
  mbMobile?: Spacing;
  mbTablet?: Spacing;
  mbDesktop?: Spacing;
}

export const SBTable = ({ blok }: SBProps<SBTableProps>) => {
  const { caption, table, mbMobile, mbTablet, mbDesktop, mtMobile, mtTablet, mtDesktop } = blok;

  if (!table) {
    return null;
  }

  const { tbody, thead } = table;

  const className = resolveStoryblokStyles({
    mt: mtMobile,
    mtTablet,
    mtDesktop,
    mb: mbMobile,
    mbTablet,
    mbDesktop,
  });

  return (
    <Table className={className} {...sbEditable(blok)}>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        <TableRow>
          {thead?.map(item => <TableHead key={item._uid}>{item.value}</TableHead>)}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tbody?.map(rowItem => (
          <TableRow key={rowItem._uid}>
            {rowItem.body?.map(cellItem => (
              <TableCell key={cellItem._uid}>{cellItem.value}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
