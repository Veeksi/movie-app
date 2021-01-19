import React, { useEffect, useState } from 'react';

import { getSingleMovie } from '../../api/movies';
import { useParams } from 'react-router-dom';

const SingleMovie = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  console.log('Single movie page');
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching single movie');
        const result = await getSingleMovie({
          id: id,
        });
        setData(result.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [id]);

  if (!data) {
    return (
      <div className="flex container align-center mx-auto justify-center pt-5">
        Loading main...
      </div>
    );
  }

  console.log(data);

  return <div></div>;
};

export default SingleMovie;