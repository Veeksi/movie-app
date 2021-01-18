import React, { useEffect, useState } from 'react';

import { getPopularMovies } from '../../api/movies';

const Movies = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPopularMovies({
        page: 1,
        media_type: 'all',
        length: 'week',
      });
      setData(data.data);
    };
    fetchData();
  }, []);
  return (
    <div className="flex container align-center mx-auto justify-center pt-5">
      Loading movies...
    </div>
  );
};

export default Movies;
