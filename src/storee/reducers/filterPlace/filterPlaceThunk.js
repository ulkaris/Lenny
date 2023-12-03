import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../api";


export const getPlace = createAsyncThunk(
    "filterPlace/getPlace",
    async ( { place, place2, rejectWithValue }) => {
      try {
        const res = await instance.get(`products?populate=*&filters[place][$eq]=${place}&filters[place][$eq]=${place2}`);
   
        return res.data;
      } catch (error) {
        rejectWithValue(error);
      }
    }
  );