import React, { FC, useCallback, useEffect, useState } from 'react';
import AppLayout from '../components/AppLayout';
import Form from '../components/Form';
import useFetching from '../hooks/useFetch';
import PostService from '../api/fetchData';
import { TableItemData } from '../api/types';
import TableHeader from '../components/TableHeader';
import NotFound from '../components/NotFound';
import TableItemsList from '../components/TableItemsList/TableItemsList';
import { useItemsData } from '../hooks/useSortableData';

const Dashboard: FC = () => {
  const [tableItemData, setTableItemData] = useState<TableItemData[]>([]);
  const [searchString, setSearchString] = useState('');

  const [fetchData, isLoadingData, fetchError] = useFetching(async () => {
    const sites = await PostService.getSites();
    const tests = await PostService.getTests();

    const result = tests.map(({ siteId, ...itemData }): TableItemData => {
      let siteUrl = '';

      sites.forEach((site) => {
        if (site.id === siteId) siteUrl = site.url;
      });

      return { ...itemData, siteUrl };
    });

    setTableItemData(result);
  });

  useEffect(() => {
    fetchData();
  }, []);

  const searchItemHandler = useCallback((itemName: string) => {
    setSearchString(itemName);
  }, []);

  const searchedItems = useItemsData(tableItemData, searchString);
  const countTests = tableItemData.length;

  // headr

  return (
    <AppLayout pageTitle="Dashboard">
      <Form searchItem={searchItemHandler} countTests={countTests} />
      {!searchedItems.length && !!searchString && <NotFound onClick={() => setSearchString('')} />}
      {!!searchedItems.length && (
        <TableHeader setTableItemData={setTableItemData} TableItems={tableItemData} />
      )}
      {fetchError && <div style={{ textAlign: 'center' }}>Error: {fetchError}</div>}
      {isLoadingData ? (
        <div style={{ textAlign: 'center' }}>Loading...</div>
      ) : (
        <TableItemsList itemsList={searchedItems} />
      )}
    </AppLayout>
  );
};

export default Dashboard;
