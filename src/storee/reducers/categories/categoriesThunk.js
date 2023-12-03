import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../api";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const res = await instance.get("/categories?populate=*");
      return res.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getOneCategory = createAsyncThunk(
  "category/getOneCategory",
  async ({ id, page }, { rejectWithValue }) => {
    try {
      const res = await instance.get(
        `/products?populate=*&[filters][categories][id][$eq]=${id}&pagination[pageSize]=12&pagination[page]=${page}`
      );
      return res.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
