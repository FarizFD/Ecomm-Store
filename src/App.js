import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Routing from './Component/Routing'
import { Store } from './Redux/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route exact path='*' element={<Routing/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;