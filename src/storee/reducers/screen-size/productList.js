import { createSlice } from "@reduxjs/toolkit";
import { getProductBoxess } from "./productListThunk";

const initialState = {
  loading: false,
  productList: 'product list',
  productListSearch: 'prod list',
  message: 'Addax',
};

export const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductBoxess.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getProductBoxess.fulfilled, (state,action) => {
      state.loading =false;
      state.productList = action.payload;
      state.productListSearch = action.payload;
    });

    builder.addCase(getProductBoxess.rejected, (state) => {
      state.loading = false;
    });
  },
});

// export const {} = profileReducer.actions;

export default productReducer.reducer;
