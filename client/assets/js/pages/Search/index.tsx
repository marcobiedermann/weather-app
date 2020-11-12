import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import Results from '../../components/Results';
import Search from '../../containers/Search';

const SearchPage: FC = () => {
  return (
    <div>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <Search />
      <Results results={search.list} />
    </div>
  );
};

export default SearchPage;
