
export function collectionTagsFromText(text: string): string[] {
  const regex = /\[?\s?(?:T|t)ags?:\s?([\d\w\s,]+)\]?\s?/g;

  const match = regex.exec(text);
  const lastMatch = match && match[1].trim();

  return lastMatch ? lastMatch.split(',').map((tag) => tag.trim()) : [];
}
