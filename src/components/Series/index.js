import React, { useEffect, useState } from 'react';

import ListContainer from '../Common/ListContainer';
import { getSeries } from '../../api/series';
import { useParams } from 'react-router-dom';

const Series = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  console.log('Type', id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getSeries({
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

  console.log('Series data:', data);

  return (
    <div className="flex flex-grow bg-gray-300">
      <ListContainer data={data} />
    </div>
  );
};

export default Series;
