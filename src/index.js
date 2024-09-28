import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './shop.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Testimonials from './Testimonials';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Shop';
import Gainers from './Gainers';
import Vitamins from './Vitamins';
import Weight from './Weight';
import Testboost from './Testboost';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  // Root path points to App
  },
  {
    path: "home",
    element: <App />,  // "home" renders the same App component
  },
  {
    path: "test",
    element: <Testimonials />,  // Renders the Pages component
  },
  {
    path: "shop",
    element: <Shop />,  
  },
  {
    path: "gain",
    element: <Gainers />,  
  },
  {
    path: "vitamin",
    element: <Vitamins />,  
  },
  {
    path: "weight",
    element: <Weight />,  
  },
  {
    path: "test1",
    element: <Testboost />,  
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
