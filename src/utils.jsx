import axios from "axios";

const api_add = "https://dummyjson.com/products";

export const getProducts = async () => {
  const products = await axios("https://dummyjson.com/products");
  return products.data.products;
};

export const getSingleProduct = async (productId) => {
  const product = await axios(`https://dummyjson.com/products/${productId}`);
  return product.data;
};
