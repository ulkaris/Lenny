import { createSlice } from "@reduxjs/toolkit";
import { handleLoadMore } from "./loadMoreThunk";

const initialState = {
  loading: false,
  popularProducts: [],
  value: 4
};

export const loadMoreReducer = createSlice({
  name: "loadMore",
  initialState,
  reducers: {
    increment: (state) => {
        state.value = state.value+ 4;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleLoadMore.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(handleLoadMore.fulfilled, (state,action) => {
      state.popularProducts = action.payload;
      state.loading = false;
    });

    builder.addCase(handleLoadMore.rejected, (state) => {
      state.loading =false;
    });
  },
});

export const {increment} = loadMoreReducer.actions;

export default loadMoreReducer.reducer;