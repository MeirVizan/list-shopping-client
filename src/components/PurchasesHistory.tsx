import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPurchases } from '../store/shoppingSlice';
import { AppDispatch, RootState } from '../store';
import PurchaseDetail from './PurchaseDetail';
import { groupByDate } from './utils';
import { useNavigate } from 'react-router';

const PurchasesHistory: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const purchases = useSelector((state: RootState) => state.shopping.purchases);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPurchases());
  }, [dispatch]);

  const purchasesByDate = groupByDate(purchases)
  console.log('purchasesByDate', purchasesByDate);
  return (
    <div>
        <div>
            <button onClick={()=>navigate('/')}>New order</button>
        </div>
      {purchasesByDate.map(purchase => (
        <PurchaseDetail purchase={purchase.data} date={purchase.datetime} />
      ))}
    </div>
  );
};

export default PurchasesHistory;
