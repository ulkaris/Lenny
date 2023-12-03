import { createAsyncThunk } from "@reduxjs/toolkit";
import {register} from "../../../api/auth";
import {login} from '../../../api/auth';

export const fetchAuthRegister = createAsyncThunk(
  "auth/register",
  async (regObj, { rejectWithValue }) => {
    try {
      const result = await register(regObj);

      return result;
    } catch (error) {
      return rejectWithValue("error happened");
    }
  }
);

export const fetchAuthLogin = createAsyncThunk(
  "auth/fetchAuthLogin",
  async (logObj, { rejectWithValue }) => {
    try {
      const result = await login(logObj);

      return result;
    } catch (error) {
      return rejectWithValue("Nese problem oldu");
    }
  }
);

