import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  selectedProduct: 0,
  cartArray: [],
  cartArraySelected: []
};

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.selectedProduct += 1;
    },
    decrement: (state) => {
      state.selectedProduct -= 1;
    },
    addToCart: (state, action) => {
      state.cartArray.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartArray = state.cartArray.filter(
        (x) => x.id !== action.payload.id
      );
    },
    removeFromArray: (state, action) => {
      state.cartArray.pop(action.payload);
    },
    incrementPrice: (state, action) => {
      state.totalPrice += action.payload;
    },
    addToCartArraySelected: (state, action) => {
      state.cartArraySelected = action.payload.value;
    },
    
  },
});

export const { increment, decrement, addToCart, removeFromCart, incrementPrice , removeFromArray, addToCartArraySelected} = cartReducer.actions;

export default cartReducer.reducer;
