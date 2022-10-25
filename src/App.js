import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/provider';
// import Filter from './components/Filter';

function App() {
  return (
    <Provider>
      <Table />
      {/* <Filter /> */}
    </Provider>
  );
}

export default App;
