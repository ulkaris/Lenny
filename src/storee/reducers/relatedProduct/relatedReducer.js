import { createSlice } from "@reduxjs/toolkit";
import { handleRelated } from "./relatedThunk";

const initialState = {
  loading: false,
  relatedProducts: []
};

export const relatedReducer = createSlice({
  name: "related",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleRelated.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(handleRelated.fulfilled, (state,action) => {
      state.relatedProducts = action.payload;
      state.loading = false;
    });

    builder.addCase(handleRelated.rejected, (state) => {
      state.loading =false;
    });
  },
});

// export const {} = relatedReducer.actions;

export default relatedReducer.reducer;