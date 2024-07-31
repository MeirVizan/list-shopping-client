import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addProduct } from '../store/shoppingSlice';
import './ComponentStyle.css';
import { translate } from './utils';


export const ProductInput: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState<number>(0);
  const categories = useSelector((state: RootState) => state.shopping.categories);
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (productName && category) {
      dispatch(addProduct({ "name": productName, "categoryId": category }));
      setProductName('');
      setCategory(0);
    }
  };

  return (
    <div>
      <form className='form-input' onSubmit={handleSubmit}>
        <TextField
          className='text-field'
          label="שם המוצר"
          variant="outlined"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <FormControl className='form-select' >
          <InputLabel id="category-label">{translate('category')}</InputLabel>
          <Select
            labelId="category-label"
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value as number)}
            required
          >
            {categories.map((cat) => (
              <MenuItem className='menu-item' key={cat.id} value={cat.id}>{translate(cat.name)}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button type="submit" variant="outlined" color="primary">
          {translate('add')}
        </Button>
      </form>
      <hr className='hr' />
    </div>
  );
};
