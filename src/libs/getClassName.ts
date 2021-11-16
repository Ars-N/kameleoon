type Direction = 'asc' | 'desc';

interface SortConfig {
  key: string;
  direction: 'asc' | 'desc';
}

export enum COLUMN {
  NAME = 'name',
  TYPE = 'type',
  STATUS = 'status',
  SITE_URL = 'siteUrl',
}

export const getClassName = (
  name: string,
  sortConfig: SortConfig | null,
): Direction | undefined => {
  if (!sortConfig) {
    return;
  }

  return sortConfig.key === name ? sortConfig.direction : undefined;
};
