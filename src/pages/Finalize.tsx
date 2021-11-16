import React, { FC, useEffect, useState } from 'react';
import './styles/ResultsFinalize.scss';
import { useHistory } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import PostService from '../api/fetchData';
import useFetching from '../hooks/useFetch';
import { Test } from '../api/types';

interface FinalizeProps {
  id: string | number;
}

const Finalize: FC<FinalizeProps> = ({ id }) => {
  const [result, setResult] = useState<Test>();
  const [fetchData, isLoadingData, fetchError] = useFetching(async () => {
    const tests = await PostService.getTestsById(id);
    setResult(tests);
  });

  const history = useHistory();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppLayout pageTitle="Finalize">
      {fetchError && <div style={{ textAlign: 'center' }}>Error: {fetchError}</div>}
      {isLoadingData ? (
        <div style={{ textAlign: 'center' }}>Loading...</div>
      ) : (
        <>
          <p className="item__name" style={{ flex: '1 1 auto' }}>
            {result?.name}
          </p>
          <button type="button" onClick={() => history.goBack()} className="btnBack">
            {'< Back'}
          </button>
        </>
      )}
    </AppLayout>
  );
};

export default Finalize;
