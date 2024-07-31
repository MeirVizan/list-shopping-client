import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPurchases = createAsyncThunk('purchases/fetchPurchases', async () => {
  const response = await axios.get('/api/purchases');
  return response.data;
});

const purchasesSlice = createSlice({
  name: 'purchases',
  initialState: {
    data: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPurchases.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default purchasesSlice.reducer;
