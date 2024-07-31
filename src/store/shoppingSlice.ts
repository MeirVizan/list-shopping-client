import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface ShoppingState {
  categories: string[];
  products: { name: string; category: string; quantity: number }[];
  purchases: any[];
  totalItems: number;
  clientMassege: string;
}

const initialState: ShoppingState = {
  categories: [],
  products: [],
  purchases: [],
  totalItems: 0,
  clientMassege: '',
};

export const fetchCategories = createAsyncThunk('shopping/fetchCategories', async () => {
  const response = await axios.get('http://localhost:5000/api/categories');
  console.log('response.data', response.data)
  return response.data;
});

export const fetchPurchases = createAsyncThunk('shopping/fetchPurchases', async () => {
  const response = await axios.get('http://localhost:5000/api/purchases');
  console.log('response.data', response.data)
  return response.data;
});

const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<{ name: string; category: string }>) => {
      const existingProduct = state.products.find(p => p.name === action.payload.name);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.totalItems += 1;
    },
    finishOrder: (state) => {
        axios.post('http://localhost:5000/api/order', {"products":state.products})
            .then((response) => {
                console.log('Order sent:', response.data);
                state.products = [];
                state.totalItems = 0;
                state.clientMassege = 'ההזמנה בוצעה בהצלחה';
            })
            .catch((error) => {
                console.error('Error sending order:', error);
            });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    }).addCase(fetchPurchases.fulfilled, (state, action) => {
      state.purchases = action.payload;
    });
    
  },
});

export const { addProduct, finishOrder } = shoppingSlice.actions;
export default shoppingSlice.reducer;
