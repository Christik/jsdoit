import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../layout/layout';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import PetPage from '../../pages/pet-page/pet-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CatalogPage />} />
          <Route path="/pet" element={<PetPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
