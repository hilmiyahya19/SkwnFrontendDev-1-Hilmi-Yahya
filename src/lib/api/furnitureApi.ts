import axios from "axios";
import type { Product } from "../../types/product"; // pastikan path sesuai

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getProducts = async () => {
  try {
    const res = await api.get<Product[]>("/products");
    return res.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
