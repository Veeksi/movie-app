import React, { useEffect, useState } from 'react';

import Credits from '../Common/Credits';
import Seasons from './Seasons';
import SimilarMoviesOrSeries from '../Common/SimilarMovies';
import { getSingleSerie } from '../../api/series';
import { useParams } from 'react-router-dom';

const SingleSerie = () => {
  const [data, setData] = useState();
  const [similarSeries, setSimilarSeries] = useState();
  const [credits, setCredits] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching single serie');
        const result = await getSingleSerie({
          id: id,
        });
        setData(result[0].data);
        setSimilarSeries(result[1].data);
        setCredits(result[2].data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [id]);

  if (!data || !similarSeries || !credits) {
    return (
      <div className="flex container align-center mx-auto justify-center pt-5 bg-secondary text-primary flex-grow">
        Loading single serie...
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-grow bg-secondary text-primary">
      <div className="flex container mx-auto px-2 lg:px-0">
        <div className="flex flex-row flex-wrap container mx-auto my-2 p-0 bg-primary pb-1">
          <div className="flex flex-col w-52 m-2">
            <img
              alt="Placeholder"
              src={`${process.env.REACT_APP_IMAGE_URI}${data.poster_path}`}
            />
            <p className="italic text-italic">{data.tagline}</p>
          </div>
          <div className="flex flex-col mx-2">
            <h1 className="text-3xl font-bold">
              {data.original_title ? data.original_title : data.name}
            </h1>
            <p className="text-base">First air date: {data.first_air_date}</p>
            <p className="text-base">Status: {data.status}</p>
            <p className="text-base">Type: {data.type}</p>
            <p className="text-base">Seasons: {data.seasons.length}</p>

            <div className="flex flex-row flex-wrap">
              {data.genres.map((genre, idx) => (
                <p
                  key={idx}
                  className="max-w-max p-1 mr-2 my-1 bg-card rounded border"
                >
                  {genre.name}
                </p>
              ))}
            </div>

            <div className="flex flex-row flex-wrap items-center">
              {data.production_companies.map(
                (company, idx) =>
                  company.logo_path && (
                    <p key={idx} className="font-bold mr-2">
                      {company.name}
                    </p>
                  )
              )}
            </div>

            <div className="flex flex-row flex-wrap items-center">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="gold"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <p className="text-base font-bold ml-1">{data.vote_average}</p>
            </div>
          </div>
          <div className="flex flex-col container">
            <p className="text-base pl-2">{data.overview}</p>
          </div>

          {data.seasons.length > 0 && (
            <>
              <div className="border-t-2 border-primary mx-2 mt-5 pt-2 w-full">
                <h1 className="text-3xl font-bold mb-2">Seasons</h1>
              </div>
              <Seasons data={data.seasons} />
            </>
          )}

          {credits.cast.length > 0 && (
            <>
              <div className="border-t-2 border-primary mx-2 mt-5 pt-2 w-full">
                <h1 className="text-3xl font-bold mb-2">Full cast</h1>
              </div>
              <Credits data={credits} />
            </>
          )}

          {similarSeries.results.length > 0 && (
            <>
              <div className="border-t-2 border-primary mx-2 mt-5 pt-2 w-full">
                <h1 className="text-3xl font-bold mb-2">Similar series</h1>
              </div>
              <SimilarMoviesOrSeries data={similarSeries} type="tv" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleSerie;
