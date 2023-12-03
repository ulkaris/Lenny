import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../api";

export const getElectronics = createAsyncThunk("filterElec/getElec", async () => {
    try{
        const data = await instance.get("products?populate=*&[filters][price][$eq]=139.99");
        console.log(data, 'filter');
        return data;

    }catch(error){
        console.log(error);
    }
});

