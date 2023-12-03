import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  profileModule: false,
  searchValue: 0,
  loginModal: false,
  registerModal: false,
  errorModal: false,
  successModal: false,
};

export const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    opposite: (state) => {
      state.profileModule = !state.profileModule;
    },
    getSearchValue: (state, action) => {
      state.searchValue = action.payload.value;
    },
    setLoginModal: (state) => {
      state.loginModal = !state.loginModal;
    },
    setRegisterModal: (state) => {
      state.registerModal = !state.registerModal;
    },
    setRegisterModalExm: (state) => {
      state.registerModal = false;
    },
    setSuccessModal: (state) => {
      state.successModal = !state.successModal;
    },
    setErrorModal: (state) => {
      state.errorModal = !state.errorModal;
    },
  },
});

export const {
  increment,
  opposite,
  getSearchValue,
  setLoginModal,
  setRegisterModal,
  addToRegistered,
  setSuccessModal,
  setErrorModal,
  setRegisterModalExm
} = counterReducer.actions;

export default counterReducer.reducer;
