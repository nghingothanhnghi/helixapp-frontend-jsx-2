import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Route } from "react-router"



import Layout from './layouts';
import ErrorPage from './pages/404';
import Home from './pages/home'
import SearchResult from './pages/search'
import Categories from './pages/categories';
import CatePost from './pages/categories/post';

import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<ErrorPage />}>
      <Route
       index
        path="/helixapp-frontend-jsx-2/"
        element={<Home />}
      />
      <Route
        path="search-result"
        element={<SearchResult />}
      />
      <Route
        path="categories/"
        element={<Categories />}
      />
      <Route
        path="/:cateId"
        element={<CatePost />}
      />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

