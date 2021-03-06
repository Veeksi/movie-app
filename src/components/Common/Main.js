import React, { useEffect, useState } from 'react';

import ListContainer from './ListContainer';
import Pagination from './Pagination';
import { ResultHeader } from './ResultHeader';
import { getTrendings } from '../../api/trending';

const Main = () => {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching trending');
        const result = await getTrendings({
          page: page,
          media_type: 'all',
          length: 'week',
        });
        setData(result.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [page]);

  if (!data) {
    return (
      <div className="flex container align-center mx-auto justify-center pt-5 bg-secondary text-primary flex-grow">
        Loading main...
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-secondary">
      <div className="flex container mx-auto lg:px-0 px-2 py-3 justify-between align-middle">
        <ResultHeader type={'Trending'} />
        <Pagination
          page={data.page}
          maxPages={data.total_pages}
          onNewPage={setPage}
        />
      </div>
      <ListContainer data={data} />
    </div>
  );
};

export default Main;
