import { createSlice } from "@reduxjs/toolkit";
import { fetchAuthRegister } from "./authThunk";
import { fetchAuthLogin } from "./authThunk";

const initialState = {
  token: "",
  userDatas: {},
  error: "",
  regStatus: "",
  logStatus: "",
  loading: false,
  userInfoUI: {}
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userDatas = action.payload;
    },
    setLogData: (state) => {
      state.logStatus = '';
    },
    setRegData: (state) => {
      state.regStatus = '';
    },
    setToDefault: () => {
      return initialState;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuthRegister.pending, (state) => {
      state.regStatus = "pending";
    });

    builder.addCase(fetchAuthRegister.fulfilled, (state, action) => {
      console.log(action.payload, "action payload");
      state.regStatus = "success";
      state.userDatas = action.payload;
    });

    builder.addCase(fetchAuthRegister.rejected, (state, action) => {
      state.loading = false;
      state.regStatus = "error";
      state.error = action.payload;
    });

    builder.addCase(fetchAuthLogin.pending, (state) => {
      state.logStatus = "pending";
    });

    builder.addCase(fetchAuthLogin.fulfilled, (state, action) => {
      console.log(action.payload, "action payload login");
      state.logStatus = "success";
      state.userInfoUI = action.payload;
      console.log(state.userInfoUI, 'usinfo');
    });

    builder.addCase(fetchAuthLogin.rejected, (state, action) => {
      state.loading = false;
      state.logStatus = "error";
      state.error = action.payload;
    });
  },
});

export const { setUserData, setLogData, setRegData, setToDefault } = authReducer.actions;

export default authReducer.reducer;
