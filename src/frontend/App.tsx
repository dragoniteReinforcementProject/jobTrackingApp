import React from 'react';
import './styles/stylesheet.scss'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import {Home, Login, Logout, Register, Settings, NotFound, Proto} from './routes'

import CenteredWrapper from './components/CenteredWrapper';


const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/logout",
    element: <Logout />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/",
    element: <Settings />
  },
  {
    path: "/proto",
    element: <Proto />
  },
  {
    path: "*",
    element: <NotFound />
  },
]);

const App = (): JSX.Element => {
  return (
    <CenteredWrapper>
      <RouterProvider router={router} />
    </CenteredWrapper>
  );
};

export default App;
