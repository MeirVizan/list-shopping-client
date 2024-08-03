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

// This component is responsible for displaying the details of a purchase.
const PurchaseDetail = ({ purchase, date }:PurchaseProps) => {

const prodectSaperedly = groupBy(purchase, 'categoryId');
  return (
    <div className='product-list-wapper'>
      <h2>{"הזמנה"+" - " + moment(date).format("DD/MM/YY kk:mm")}</h2>
      <ProductOfCategory prodectSaperedly={prodectSaperedly} />
    </div>
  );
};

export default PurchaseDetail;
