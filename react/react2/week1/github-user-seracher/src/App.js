import React from 'react';
import './App.css';
import SearchUser from './SearchUser';
import SearchProvider from './UserContext';


function App() {
  return (
    <div className="container">
      <h1>GitHub Searcher</h1>
      <SearchProvider>
      <SearchUser/>
      </SearchProvider>
    
    </div>
  );
}

export default App;