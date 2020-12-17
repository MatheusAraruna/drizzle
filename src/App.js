import React from 'react'

import { DataProvider} from './context/DataContext'

import Main from './pages/Main'


function App() {
  return (
    <DataProvider>
      <Main />
    </DataProvider>
  );
}

export default App;
