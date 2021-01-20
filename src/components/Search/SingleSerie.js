import React, { useEffect, useState } from 'react';

import { getSingleSerie } from '../../api/series';
import { useParams } from 'react-router-dom';

const SingleSerie = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching single serie');
        const result = await getSingleSerie({
          id: id,
        });
        setData(result.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="flex container align-center mx-auto justify-center pt-5 bg-secondary text-primary flex-grow">
      Loading single serie...
    </div>
  );
};

export default SingleSerie;
