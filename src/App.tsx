import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategories } from './store/shoppingSlice';
import { AppDispatch } from './store';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShoppingList from './components/ShoppingList';
import PurchasesHistory from './components/PurchasesHistory';


const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCategories());

  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShoppingList />} />
        <Route path="/shoppinglist" element={<ShoppingList />} />
        <Route path="/purchasehistory" element={<PurchasesHistory />} />
      </Routes>
    </Router>

  );
};

export default App;
