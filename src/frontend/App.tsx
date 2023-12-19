import React from 'react';
import './styles/stylesheet.scss'
import { Home, Proto } from './routes'

const App = (): JSX.Element => {
  return (
    <div className='container'>
      <Proto />
    </div>
  );
};

export default App;
