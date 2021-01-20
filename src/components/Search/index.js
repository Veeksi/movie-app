import React, { useEffect, useState } from 'react';

import ListContainer from '../Common/ListContainer';
import Pagination from '../Common/Pagination';
import { ResultHeader } from '../Common/ResultHeader';
import { getSpecificList } from '../../api/other';

const Search = ({ searchValue, searchType }) => {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      if (searchValue && searchType) {
        try {
          const result = await getSpecificList({
            entertainment: searchType,
            page: page,
            searchParam: searchValue,
          });
          setData(result.data);
        } catch (e) {
          console.error(e);
        }
      }
    };
    fetchData();
  }, [searchValue, searchType, page]);

  if (!data) {
    return <div className="flex justify-center">Loading...</div>;
  }

  console.log(data);

  return (
    <div className="flex flex-col bg-primary flex-grow">
      <div className="flex container mx-auto px-4 lg:px-0 py-3 justify-between align-middle">
        <ResultHeader type="Search results" />
        <Pagination
          page={data.page}
          maxPages={data.total_pages}
          onNewPage={setPage}
        />
      </div>
      <ListContainer data={data} />
    </div>
  );
};

export default Search;
