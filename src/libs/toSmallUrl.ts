export const toSmallUrl = (siteUrl: string) => {
  return siteUrl.replace(/((^\w+:|^)\/\/|www.)/gim, '');
};
