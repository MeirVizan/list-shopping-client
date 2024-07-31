import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { finishOrder } from '../store/shoppingSlice';
import { translate } from './utils';
import { AppDispatch, RootState } from '../store';
import './ComponentStyle.css';
import { useNavigate } from "react-router-dom";

export const FinishOrderButton: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const clientMassege = useSelector((state: RootState) => state.shopping.clientMassege);
  const products = useSelector((state: RootState) => state.shopping.products);
  const navigate = useNavigate();

  const handleFinishOrder = () => {
    if (products.length > 0) {
      dispatch(finishOrder());
    } else {
      alert('לא ניתן לבצע הזמנה ללא מוצרים')
    }
  };

  return (
    <div >
      {clientMassege !== '' ?
        <div className=' '>
          <div className='client-massege'>
            {clientMassege}
          </div>
          <div className='view-order'>
            <Button className='nvg-older-order' variant="contained" color="primary" onClick={() => navigate('/purchasehistory')} >
              {translate('View orders')}
            </Button>
          </div>
        </div>
        :
        <div className='flex j-end'>
        <Button sx={{margin: '1rem'}} variant="contained" color="primary" onClick={handleFinishOrder}>
          {translate('Finish Order')}
        </Button>
        </div>
      }
    </div>
  );
};
