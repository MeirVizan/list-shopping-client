import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Typography } from '@mui/material';

export const ItemsTotal: React.FC = () => {
  const totalItems = useSelector((state: RootState) => state.shopping.totalItems);

  return (
    <Typography variant="h6">
      סה"כ: {totalItems} מוצרים
    </Typography>
  );
};
