import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AppRoute } from 'constants';

import { Layout } from 'features/layouts';
import { CatalogPage, PetPage } from 'pages';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.CATALOG} element={<Layout />}>
          <Route index element={<CatalogPage />} />
          <Route path={AppRoute.PET} element={<PetPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    <ToastContainer position="top-center" />
  </React.StrictMode>,
);
