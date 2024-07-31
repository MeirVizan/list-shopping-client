import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import './ComponentStyle.css';
import ProductOfCategory from './ProductOfCategory';
import { groupBy } from './utils';

export const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.shopping.products);
  const prodectSaperedly = groupBy(products, 'categoryId');

  return (
    <div className='product-list-wapper'>
      <h2>{"יש לאסוף מוצרים אלו במחלקות המתאימות"}</h2>
      <ProductOfCategory prodectSaperedly={prodectSaperedly} />
    </div>
  );
};
