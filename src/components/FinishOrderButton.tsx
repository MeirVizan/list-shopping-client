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
  const navigate = useNavigate();

  const handleFinishOrder = () => {
    dispatch(finishOrder());
  };

  return (
    <div className='btn-order'>
      {clientMassege !== '' ?
        <div>
          <div className='client-massege'>
            {clientMassege}
          </div>
          <div>

            <button className='nvg-older-order' onClick={()=>navigate('/purchasehistory')} >
              {translate('View orders')}
            </button>
          </div>
        </div>
        :
        <Button variant="contained" color="primary" onClick={handleFinishOrder}>
          {translate('Finish Order')}
        </Button>
      }
    </div>
  );
};
