import React, { useEffect, useState } from 'react';

import ListContainer from '../Common/ListContainer';
import Pagination from '../Common/Pagination';
import { ResultHeader } from '../Common/ResultHeader';
import { getMovies } from '../../api/movies';
import { useParams } from 'react-router-dom';

const Movies = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getMovies({
          page: page,
          type: id,
        });
        setData(result.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [page, id]);

  if (!data) {
    return (
      <div className="flex container align-center mx-auto justify-center pt-5 bg-secondary text-primary flex-grow">
        Loading main...
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-secondary flex-grow">
      <div className="flex container mx-auto px-4 lg:px-0 py-3 justify-between align-middle">
        <ResultHeader title={id} type={'movies'} />
        <Pagination
          page={data.page}
          maxPages={data.total_pages}
          onNewPage={setPage}
        />
      </div>
      <ListContainer data={data} type={'movie'} />
    </div>
  );
};

export default Movies;
