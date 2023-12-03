import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../api";


export const handleProductView= createAsyncThunk(
    "productView/getProductView",
    
    async (id, { rejectWithValue }) => {
      try {
        const res = await instance.get(
          `/products?populate=*&[filters][id][$eq]=${id}`
        );
   
        return res.data;
      } catch (error) {
        rejectWithValue(error);
      }
    }
  );
