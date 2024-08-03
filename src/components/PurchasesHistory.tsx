import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPurchases } from '../store/shoppingSlice';
import { AppDispatch, RootState } from '../store';
import PurchaseDetail from './PurchaseDetail';
import { groupByDate } from './utils';
import { useNavigate } from 'react-router';
import { Container } from '@mui/material';
import { translate } from './utils';
import './ComponentStyle.css';

// This component is responsible for displaying the purchase history of the user.
const PurchasesHistory: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const purchases = useSelector((state: RootState) => state.shopping.purchases);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPurchases());
  }, [dispatch]);

  const purchasesByDate = groupByDate(purchases)
  return (
    <Container>
        <div className='new-order-btn flex j-end'>
            <button onClick={()=>navigate('/')}>{translate('New order')}</button>
        </div>
      {purchasesByDate.map(purchase => (
        <PurchaseDetail purchase={purchase.data} date={purchase.datetime} />
      ))}
    </Container>
  );
};

export default PurchasesHistory;
