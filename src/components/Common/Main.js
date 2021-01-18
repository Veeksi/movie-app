import React, { useEffect, useState } from 'react';

import ListContainer from './ListContainer';
import { getTrendings } from '../../api/trending';

const Main = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTrendings({
        page: 1,
        media_type: 'all',
        length: 'week',
      });
      setData(data.data);
    };
    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="flex container align-center mx-auto justify-center pt-5">
        Loading main...
      </div>
    );
  }

  return (
    <div className="bg-gray-300">
      <ListContainer data={data} />
    </div>
  );
};

export default Main;
