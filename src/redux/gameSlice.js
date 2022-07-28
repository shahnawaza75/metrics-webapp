import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGames = createAsyncThunk('game/getGames', async () => {
  const getResponse = await axios.get(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false',
  );
  const dat = getResponse.data;
  return dat;
});

const gameSlice = createSlice({
  name: 'game',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getGames.fulfilled]: (state, action) => action.payload,
  },
});

export default gameSlice.reducer;
