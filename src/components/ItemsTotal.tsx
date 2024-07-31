import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const ItemsTotal: React.FC = () => {
  const totalItems = useSelector((state: RootState) => state.shopping.totalItems);

  return (
    <Typography variant="h6" textAlign={"end"}>
      סה"כ: {totalItems} מוצרים
    </Typography>
  );
};
