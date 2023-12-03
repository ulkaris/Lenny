import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./categoriesThunk";
import { getOneCategory } from "./categoriesThunk";

const initialState = {
  loading: false,
  categoriesArray: [],
  categoryArray: [],
  idReducer: 'idd',
};

export const categoriesReducer = createSlice({
  name: "categories",
  initialState,
  reducers: {
    updateId: (state, action) => {
      state.idReducer = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categoriesArray = action.payload;
      state.loading = false;
    });

    builder.addCase(getCategories.rejected, (state) => {
      state.loading = false;
      console.log("rejected categories");
    });
    builder.addCase(getOneCategory.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getOneCategory.fulfilled, (state, action) => {
      state.categoryArray = action.payload;
      state.loading = false;
    });

    builder.addCase(getOneCategory.rejected, (state) => {
      state.loading = false;
      console.log("rejected categories");
    });
  },
});

export const {updateId} = categoriesReducer.actions;

export default categoriesReducer.reducer;
