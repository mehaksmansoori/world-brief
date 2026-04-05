export function normalizeCopy(text: string) {
  return text.replaceAll("\u00e2\u20ac\u2122", "'");
}
