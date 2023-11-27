export const capitalize = (string: string) => {
  return string ? string?.replace(/\b\w/g, (l) => l.toUpperCase()) : string;
};
