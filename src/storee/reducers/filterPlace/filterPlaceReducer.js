import { createSlice } from "@reduxjs/toolkit";
import { getPlace } from "./filterPlaceThunk";

const initialState = {
  loading: false,
  placeArray: "placeArray",
  place: 'Addax',
  place2: 'Trendiz'
};

export const placeReducer = createSlice({
  name: "place",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPlace.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getPlace.fulfilled, (state, action) => {
      state.placeArray = action.payload;
      state.loading = false;
    });

    builder.addCase(getPlace.rejected, (state) => {
      state.loading = false;
      console.log("rejected");
    });
  },
});

// export const {} = profileReducer.actions;

export default placeReducer.reducer;
