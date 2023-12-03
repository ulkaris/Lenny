import { instance } from "./index";

export const getProductBoxes = async () => {
  const res = await instance.get("products?populate=*");

  return res;
};