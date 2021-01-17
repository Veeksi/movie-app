import React, { useEffect, useState } from 'react';

import { getTrendings } from '../../api/trending';

const Main = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching');
      const data = await getTrendings({
        page: 1,
        media_type: 'all',
        length: 'week',
      });
      setData(data.data);
    };
    // fetchData();
  }, []);

  console.log(data);

  if (!data) {
    return (
      <div className="flex container align-center mx-auto justify-center pt-5">
        Loading main...
      </div>
    );
  }

  return (
    <div className="flex flex-row flex-wrap container pt-2 px-2 mx-auto justify-between">
      {data.results.map((item, idx) => (
        <div key={idx}>
          <img
            alt=""
            src={`${process.env.REACT_APP_IMAGE_URI}${item.poster_path}`}
          />
          <b>{item.original_title ? item.original_title : item.name}</b>
        </div>
      ))}
    </div>
  );
};

export default Main;
