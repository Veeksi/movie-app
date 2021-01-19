import React, { useEffect, useState } from 'react';

import ListContainer from '../Common/ListContainer';
import { ResultHeader } from '../Common/ResultHeader';
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
    <div className="bg-gray-300">
      <ResultHeader type="Search results" />
      <ListContainer data={data} />
    </div>
  );
};

export default Search;
