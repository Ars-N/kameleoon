import React, { FC } from 'react';
import TableItem from '../TableItem';
import { TableItemData } from '../../api/types';

interface TableItemsListProps {
  itemsList: TableItemData[];
}

const TableItemsList: FC<TableItemsListProps> = ({ itemsList }) => {
  return (
    <div>
      {itemsList?.map(({ id, ...tableProps }) => {
        return <TableItem key={id} id={id} {...tableProps} />;
      })}
    </div>
  );
};

export default TableItemsList;
