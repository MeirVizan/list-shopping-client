import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { List, ListItem, ListItemText } from '@mui/material';
import { groupBy, translate } from './utils';
import './ComponentStyle.css';
import ProductOfCategory from './ProductOfCategory';

export const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.shopping.products);

  console.log('products', products)
  const prodectSaperedly = groupBy(products, 'category');
  console.log('prodectSaperedly', prodectSaperedly)

  return (
    <div className='product-list-wapper'>
      <h2>{"יש לאסוף מוצרים אלו במחלקות המתאימות"}</h2>
      <ProductOfCategory prodectSaperedly={prodectSaperedly} />
    </div>
  );
};
