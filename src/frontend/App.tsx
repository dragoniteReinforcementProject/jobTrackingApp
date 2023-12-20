import React from 'react';
import './styles/stylesheet.scss'
import { Home, Proto, Login } from './routes'

const App = (): JSX.Element => {
  return (
    <div className='main-container'>
      {/* <Proto /> */}
      <Login />
    </div>
  );
};

export default App;
