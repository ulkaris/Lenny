import { createSlice } from "@reduxjs/toolkit";
import { getElectronics } from "./filterElecsThunk";

const initialState = {
    loading:  false,
    elecsArray: 'elecs'
};

export const elecsReducer = createSlice({
  name: "elecs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getElectronics.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getElectronics.fulfilled, (state,action) => {
      state.loading = false;
      state.elecsArray = action.payload;
      console.log(state.elecsArray, 'filterarray');
    });

    builder.addCase(getElectronics.rejected, (state) => {
      state.loading = false;
    });
  },
});

// export const {} = profileReducer.actions;

export default elecsReducer.reducer;