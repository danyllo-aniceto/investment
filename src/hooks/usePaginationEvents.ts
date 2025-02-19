import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export function usePaginationEvents() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') ?? '1';

  const handlePageChange = useCallback(
    (page: number) => {
      if (page) {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('page', `${page}`);
        setSearchParams(newParams);
      }
    },
    [searchParams, setSearchParams],
  );

  return { handlePageChange, page };
}
