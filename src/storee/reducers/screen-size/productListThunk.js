import { createAsyncThunk } from "@reduxjs/toolkit";
// import {getProductBoxes} from '../../../api/products'
import { instance } from "../../../api";

export const getProductBoxess = createAsyncThunk("products/getProducts", async () => {
    try{
        // const data = await getProductBoxes();
        const data = await instance.get("products?populate=*");
        return data;

    }catch(error){
        console.log(error);
    }
});

