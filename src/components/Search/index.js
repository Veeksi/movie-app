import React, { useEffect, useState } from 'react';

import ListContainer from '../Common/ListContainer';
import Pagination from '../Common/Pagination';
import { ResultHeader } from '../Common/ResultHeader';
import { getSpecificList } from '../../api/other';
import { useHistory } from 'react-router-dom';

const Search = ({ searchValue, searchType }) => {
  const history = useHistory();
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
      } else {
        history.push('/');
      }
    };
    fetchData();
  }, [searchValue, searchType, page, history]);

  if (!data) {
    return (
      <div className="flex container align-center mx-auto justify-center pt-5 bg-secondary text-primary flex-grow">
        Loading main...
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-secondary flex-grow">
      <div className="flex container mx-auto px-4 lg:px-0 py-3 justify-between align-middle">
        <ResultHeader type="Search results" />
        <Pagination
          page={data.page}
          maxPages={data.total_pages}
          onNewPage={setPage}
        />
      </div>
      <ListContainer data={data} type={searchType} />
    </div>
  );
};

export default Search;
