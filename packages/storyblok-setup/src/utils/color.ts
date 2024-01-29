const styles = {
  // got these from playing around with what I found from:
  // https://github.com/istanbuljs/istanbuljs/blob/0f328fd0896417ccb2085f4b7888dd8e167ba3fa/packages/istanbul-lib-report/lib/file-writer.js#L84-L96
  // they're the best I could find that works well for light or dark terminals
  success: { open: '\u001b[32;1m', close: '\u001b[0m' },
  danger: { open: '\u001b[31;1m', close: '\u001b[0m' },
  info: { open: '\u001b[36;1m', close: '\u001b[0m' },
  subtitle: { open: '\u001b[2;1m', close: '\u001b[0m' },
};

type Color = keyof typeof styles;

export const color = (modifier: Color, string: string) =>
  styles[modifier].open + string + styles[modifier].close;
