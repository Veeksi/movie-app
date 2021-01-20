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
      <div className="flex container align-center mx-auto justify-center pt-5 bg-secondary text-primary flex-grow">
        Loading single movie...
      </div>
    );
  }
  console.log(data);
  return (
    <div className="flex flex-col flex-grow">
      <div className="flex container mx-auto px-4 lg:px-0 py-3 justify-between align-middle">
        <div className="flex flex-row container mx-auto my-2 p-2 md:px-2 lg:p-2 bg-primary pb-1">
          <img
            alt="Placeholder"
            className="block"
            src={`${process.env.REACT_APP_IMAGE_URI}${data.poster_path}`}
          />

          <h1 className="text-3xl font-bold px-2">
            {data.original_title ? data.original_title : data.name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
