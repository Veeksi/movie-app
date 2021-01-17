import React, { useEffect, useState } from 'react';

import { getSpecificSerie } from '../../api/series';

const Search = ({ searchValue, searchType }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      if (searchValue && searchType) {
        try {
          const result = await getSpecificSerie({
            entertainment: searchType,
            page: 1,
            searchParam: searchValue,
          });
          setData(result.data);
        } catch (e) {
          console.error(e);
        }
      }
    };
    fetchData();
  }, [searchValue, searchType]);

  if (!data) {
    return <div className="flex justify-center">Loading...</div>;
  }

  console.log(data);

  return (
    <div className="flex flex-row flex-wrap container pt-2 px-2 mx-auto justify-between">
      {data.results.map(
        (item, idx) =>
          item.poster_path && (
            <div key={idx}>
              <img
                alt=""
                src={`${process.env.REACT_APP_IMAGE_URI}${item.poster_path}`}
              />
              <b>{item.original_title ? item.original_title : item.name}</b>
            </div>
          )
      )}
    </div>
  );
};

export default Search;
