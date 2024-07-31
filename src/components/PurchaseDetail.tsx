import React from 'react';
import { groupBy } from './utils';
import ProductOfCategory from './ProductOfCategory';
import moment from 'moment';

interface Purchase {
    id: number;
    createdAt: string;
    name: string;
    category: string;
    quantity: number;
};

interface PurchaseProps {
    purchase: Purchase[];
    date: Date;
}


const PurchaseDetail = ({ purchase, date }:PurchaseProps) => {


console.log('purchase', purchase)
const prodectSaperedly = groupBy(purchase, 'category');
  console.log('PurchaseDetail', prodectSaperedly)

  return (
    <div className='product-list-wapper'>
      <h2>{"הזמנה"+" - " + moment(date).format("YYYY/MM/DD kk:mm:ss")}</h2>
      <ProductOfCategory prodectSaperedly={prodectSaperedly} />
    </div>
  );
};

export default PurchaseDetail;
