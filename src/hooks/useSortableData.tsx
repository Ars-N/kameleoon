import React, { useMemo } from 'react';
import { Status, TableItemData } from '../api/types';

type Direction = 'asc' | 'desc';

interface SortConfig {
  key: string;
  direction: Direction;
}

export const useSortableData = (items: TableItemData[], config = null) => {
  const [sortConfig, setSortConfig] = React.useState<SortConfig | null>(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];

    if (sortConfig !== null) {
      if (sortConfig.key !== 'status') {
        sortableItems.sort((a, b) => {
          const firstCell = a[sortConfig.key] as string;
          const secondCell = b[sortConfig.key] as string;

          if (firstCell < secondCell) {
            return sortConfig.direction === 'asc' ? -1 : 1;
          }
          if (firstCell > secondCell) {
            return sortConfig.direction === 'asc' ? 1 : -1;
          }
          return 0;
        });
      } else {
        const onlineItems = items.filter((item) => item.status === Status.ONLINE);
        const pausedItems = items.filter((item) => item.status === Status.PAUSED);
        const stoppedItems = items.filter((item) => item.status === Status.STOPPED);
        const draftItems = items.filter((item) => item.status === Status.DRAFT);
        sortableItems = [...onlineItems, ...pausedItems, ...stoppedItems, ...draftItems];

        if (sortConfig.direction !== 'asc') sortableItems = sortableItems.reverse();
      }
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: string) => {
    let direction: Direction = 'asc';

    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return [sortedItems, requestSort, sortConfig] as const;
};

export const useItemsData = (tableItemData: TableItemData[], searchString: string) => {
  return useMemo(() => {
    return tableItemData.filter((item) => {
      return item.name.toLowerCase().includes(searchString.toLowerCase());
    });
  }, [searchString, tableItemData]);
};
