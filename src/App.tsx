import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import PurchasesHistory from './components/PurchasesHistory';
import ShoppingList from './components/ShoppingList';
import { AppDispatch } from './store';
import { fetchCategories } from './store/shoppingSlice';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { CssBaseline } from '@mui/material';

// Create a cache for the RTL direction
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Fetch categories from the server
    dispatch(fetchCategories());

  }, []);

  return (
    <CacheProvider value={cacheRtl}>
      <CssBaseline/>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ShoppingList />} />
          <Route path="/shoppinglist" element={<ShoppingList />} />
          <Route path="/purchasehistory" element={<PurchasesHistory />} />
        </Routes>
      </Router>
    </CacheProvider>

  );
};

export default App;
