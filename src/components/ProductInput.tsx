import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addProduct } from '../store/shoppingSlice';
import { translate } from './utils';
import './ComponentStyle.css';


export const ProductInput: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const categories = useSelector((state: RootState) => state.shopping.categories);
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (productName && category) {
      dispatch(addProduct({ name: productName, category }));
      setProductName('');
      setCategory('');
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
            onChange={(e) => setCategory(e.target.value as string)}
            required
          >
            {categories.map((cat) => (
              <MenuItem className='menu-item' key={cat} value={cat}>{translate(cat)}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button type="submit" variant="outlined" color="primary">
          {translate('add')}
        </Button>
      </form>
      <hr className='hr'/>
    </div>
  );
};
