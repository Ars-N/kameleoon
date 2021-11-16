import { useState } from 'react';

const useFetching: (callback: () => unknown) => [() => Promise<void>, boolean, string] = (
  callback,
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (err) {
      setError((err as Error)?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};

export default useFetching;
