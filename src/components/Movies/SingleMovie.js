import React, { useEffect, useState } from 'react';

import { convertMinsToTime } from '../../utils/getRuntime';
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
    <div className="flex flex-col flex-grow text-primary bg-secondary">
      <div className="flex container mx-auto px-2 lg:px-0">
        <div className="flex flex-row flex-wrap container mx-auto my-2 p-2 md:px-2 lg:p-2 bg-primary pb-1">
          <div className="flex flex-col">
            <img
              alt="Placeholder"
              className="block"
              src={`${process.env.REACT_APP_IMAGE_URI}${data.poster_path}`}
            />
            <p className="italic">{data.tagline}</p>
          </div>

          <div className="flex flex-col sm:px-2 md:px-2 lg:px-2">
            <h1 className="text-3xl font-bold">
              {data.original_title ? data.original_title : data.name}
            </h1>
            <p className="text-base">Relase date: {data.release_date}</p>

            <div className="flex flex-row flex-wrap">
              {data.genres.map((genre, idx) => (
                <p
                  key={idx}
                  className="max-w-max p-1 mr-2 my-1 bg-card rounded"
                >
                  {genre.name}
                </p>
              ))}
            </div>

            <p className="text-base">{convertMinsToTime(data.runtime)}</p>
            <p className="text-base">Status: {data.status}</p>
          </div>

          <div className="flex flex-col flex-wrap container mx-auto my-1 bg-primary">
            <p className="text-base">{data.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
