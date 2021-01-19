import React, { useEffect, useState } from 'react';

import ListContainer from '../Common/ListContainer';
import { getMovies } from '../../api/movies';
import { useParams } from 'react-router-dom';

const Movies = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  console.log('Type', id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getMovies({
          page: 1,
          type: id,
        });
        setData(result.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [id]);

  if (!data || id === 'latest') {
    return <div className="flex justify-center">Loading...</div>;
  }

  console.log('Movies data:', data);

  return (
    <div className="flex flex-grow bg-gray-300">
      <ListContainer data={data} />
    </div>
  );
};

export default Movies;
