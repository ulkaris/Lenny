import { createSlice } from "@reduxjs/toolkit";
import { handleProductView } from "./productDetailThunk";

const initialState = {
  loading: false,
  productView: false
};

export const handleProductViewReducer = createSlice({
  name: "productView",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleProductView.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(handleProductView.fulfilled, (state, action) => {
      state.productView = action.payload;
      state.loading = false;
    });

    builder.addCase(handleProductView.rejected, (state) => {
      state.loading = false;
      console.log('prView error')
    });
  },
});

// export const {} = handleProductViewReducer.actions;

export default handleProductViewReducer.reducer;
