export const wordToPascalCase = (word: string) => {
  return word.replace(/\w+/g, (w) => {
    return w[0].toUpperCase() + w.slice(1).toLowerCase();
  });
};
