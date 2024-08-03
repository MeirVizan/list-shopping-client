import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// const apiUrl = 'https://shopping-list-server-eeded9691076.herokuapp.com';
const localApiUrl = 'http://localhost:5000';


interface Product {
  name: string;
  categoryId: number;
  quantity: number;
}

interface categorie{
  name: string;
  id: number;
}

interface ShoppingState {
  categories: categorie[];
  products: Product[];
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

// This function is used to fetch the categories from the server
export const fetchCategories = createAsyncThunk('shopping/fetchCategories', async () => {
  const response = await axios.get(`${localApiUrl}/api/categories`);
  return response.data;
});

// This function is used to fetch the purchases from the server
export const fetchPurchases = createAsyncThunk('shopping/fetchPurchases', async () => {
  const response = await axios.get(`${localApiUrl}/api/purchases`);
  return response.data;
});

// This function is used to finish the order
export const finishOrder = createAsyncThunk('shopping/finishOrder', async (_, { getState }) => {
  const state = getState() as { shopping: ShoppingState };
  const response = await axios.post(`${localApiUrl}/api/order`, { products: state.shopping.products });
  return response.data;
});


const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<{ name: string; categoryId: number }>) => {
      const existingProduct = state.products.find(p => p.name === action.payload.name && p.categoryId === action.payload.categoryId);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.totalItems += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    }).addCase(fetchPurchases.fulfilled, (state, action) => {
      state.purchases = action.payload;
      state.clientMassege = '';
    }).addCase(finishOrder.fulfilled, (state) => {
      state.products = [];
      state.totalItems = 0;
      state.clientMassege = 'ההזמנה בוצעה בהצלחה';
    });
  },

});

export const { addProduct } = shoppingSlice.actions;
export default shoppingSlice.reducer;
