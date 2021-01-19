import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

const SingleMovie = () => {
  const { id } = useParams();
  console.log('Single movie page');
  console.log(id);

  useEffect(() => {}, []);

  return <div></div>;
};

export default SingleMovie;
