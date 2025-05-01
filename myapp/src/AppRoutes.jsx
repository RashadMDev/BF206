import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';

const AppRoutes = () => {
      <BrowserRouter>
            <Routes>
                  <Route element={<Layout />}>
                        <Route path='/home' element={<Home />} />
                  </Route>
            </Routes>
      </BrowserRouter>
}

export default AppRoutes