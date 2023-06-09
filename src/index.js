import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//pages
import OurStory from './Pages/OurStory';
import TravelAndStay from './Pages/TravelAndStay';
import Photos from './Pages/Photos';
import QAndA from './Pages/QAndA';
import Registry from './Pages/Registry';
import WeddingParty from './Pages/WeddingParty';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'OurStory',
    element: <OurStory />,
  },
  {
    path: 'TravelAndStay',
    element: <TravelAndStay />,
  },
  {
    path: 'Photos',
    element: <Photos />,
  },
  {
    path: 'QAndA',
    element: <QAndA />,
  },
  {
    path: 'Registry',
    element: <Registry />,
  },
  {
    path: 'WeddingParty',
    element: <WeddingParty />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
