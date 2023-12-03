import {instance} from '../../api/';
import axios from "axios";

export const register = async (registerObj) => {
    const res = await instance.post('auth/local/register', registerObj);

    return res.data;
};

// export const login = async (registerObj) => {
//   const res = await instance.post('auth/local', registerObj);

//   return res.data;
// };

export const login = async (loginObj) => {
    const res = await axios.post(
      "http://localhost:1337/api/auth/local",
      JSON.stringify(loginObj),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  
    return res.data;
  };
