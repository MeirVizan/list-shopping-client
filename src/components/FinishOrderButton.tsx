import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { finishOrder } from '../store/shoppingSlice';
import { translate } from './utils';
import { RootState } from '../store';

export const FinishOrderButton: React.FC = () => {
  const dispatch = useDispatch();
  const clientMassege = useSelector((state: RootState) => state.shopping.clientMassege);

  const handleFinishOrder = () => {
    dispatch(finishOrder());
  };

  useEffect(() => {
    // if (clientMassege !== '') {
    //   setTimeout(() => {
    //     dispatch(finishOrder());
    //   }, 5000);
    // }
  }, [clientMassege]);

  console.log('clientMassege', clientMassege)

  return (
    <div className='btn-order'>

      {clientMassege !== '' ?
        <div className='client-massege'>
          {clientMassege}
        </div>
        :
        <Button variant="contained" color="primary" onClick={handleFinishOrder}>
          {translate('Finish Order')}
        </Button>
      }
    </div>
  );
};
