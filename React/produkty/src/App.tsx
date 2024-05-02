import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/EditProductList';
import NewProduct from './pages/AddProduct';
import ViewProducts from './pages/ViewProducts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<NewProduct />} />
        <Route path="/edit" element={<ProductList />} />
        <Route path="/getall" element={<ViewProducts />} />
      </Routes>
    </Router>
  );
}

export default App;
