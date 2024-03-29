import React from 'react';
import './App.css';
import SearchUser from './SearchUser';
import SearchProvider from './UserContext';

import RepoOfHyf from './Repos'


function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <h1>GitHub Searcher</h1>
        <SearchProvider>
          <SearchUser />
        </SearchProvider>
      </div>
      <div className="container">
        <h1>HYF - Repos</h1>
        <SearchProvider>
          <RepoOfHyf />
        </SearchProvider>
      </div>
    </div>
  );
}

export default App;