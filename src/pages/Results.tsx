import React, { FC, useEffect, useState } from 'react';
import './styles/ResultsFinalize.scss';
import { NavLink } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import PostService from '../api/fetchData';
import useFetching from '../hooks/useFetch';
import { Test } from '../api/types';

interface ResultsProps {
  id: string;
}

const Results: FC<ResultsProps> = ({ id }) => {
  const [result, setResult] = useState<Test>();
  const [fetchData, isLoadingData, fetchError] = useFetching(async () => {
    const tests = await PostService.getTestsById(id);
    setResult(tests);
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppLayout pageTitle="Results">
      {fetchError && <div style={{ textAlign: 'center' }}>Error: {fetchError}</div>}
      {isLoadingData ? (
        <div style={{ textAlign: 'center' }}>Loading...</div>
      ) : (
        <>
          <p className="item__name" style={{ flex: '1 1 auto' }}>
            {result?.name}
          </p>
          <NavLink className="btnBack" to="/">
            {'< Back'}
          </NavLink>
        </>
      )}
    </AppLayout>
  );
};

export default Results;
