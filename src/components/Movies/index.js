import React, { useEffect, useState } from 'react';

import { getPopularMovies } from '../../api/movies';
import { useParams } from 'react-router-dom';

const Movies = () => {
  const [data, setData] = useState();

  const params = useParams();

  console.log(params);

  useEffect(() => {
    
  }, []);
  
  return (
    <div className="flex container align-center mx-auto justify-center pt-5">
      Loading movies...
    </div>
  );
};

export default Movies;
