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

export default SingleSerie;
