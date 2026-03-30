export const capitalize = (text: string, separator: string): string => {
  return text
    .split(separator)
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};
