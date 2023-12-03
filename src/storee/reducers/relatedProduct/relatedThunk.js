import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../api";


export const handleRelated = createAsyncThunk(
    "products/relatedProducts",
    async (limit,{ rejectWithValue }) => {
      try {
        const res = await instance.get(
          `/products?populate=*&pagination[start]=${0}&pagination[limit]=${limit}`
        );
   
        return res.data;
      } catch (error) {
        rejectWithValue(error);
      }
    }
  );