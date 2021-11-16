import React, { Dispatch, FC, SetStateAction, MouseEvent, useEffect } from 'react';
import './TableHeader.scss';
import { TableItemData } from '../../api/types';
import { toSmallUrl } from '../../libs/toSmallUrl';
import { useSortableData } from '../../hooks/useSortableData';
import { COLUMN, getClassName } from '../../libs/getClassName';

export interface TableHeaderProps {
  TableItems: TableItemData[];
  setTableItemData: Dispatch<SetStateAction<TableItemData[]>>;
}

const TableHeader: FC<TableHeaderProps> = ({ setTableItemData, TableItems }) => {
  const [sortedItems, requestSort, sortConfig] = useSortableData(TableItems);

  useEffect(() => {
    setTableItemData(sortedItems);
  }, [sortConfig]);

  const handleClick = ({ currentTarget }: MouseEvent<HTMLElement>) => {
    const sortStr = (currentTarget.textContent as string).toLowerCase();

    requestSort(toSmallUrl(sortStr === 'site' ? 'siteUrl' : sortStr));
  };
  return (
    <div className="table-header_wrapper">
      <span
        onClick={handleClick}
        className={`TableHeader__title ${getClassName(COLUMN.NAME, sortConfig)}`}
      >
        Name
      </span>
      <span
        onClick={handleClick}
        className={`TableHeader__title ${getClassName(COLUMN.TYPE, sortConfig)}`}
      >
        TYPE
      </span>
      <span
        onClick={handleClick}
        className={`TableHeader__title ${getClassName(COLUMN.STATUS, sortConfig)}`}
      >
        STATUS
      </span>
      <span
        onClick={handleClick}
        className={`TableHeader__title ${getClassName(COLUMN.SITE_URL, sortConfig)}`}
      >
        SITE
      </span>
    </div>
  );
};

export default React.memo(TableHeader);
