import { TProduct } from "@/types";
import { productsApi } from "./client/client";

export class ProductService {
  static async getAllProducts(): Promise<TProduct[]> {
    try {
      const response = await productsApi.get("");

      return response.data;
    } catch (err) {
      console.error(`Error recovering products. ${err}`);
      throw new Error("Failed to get products.");
    }
  }

  static async getProduct(id: number) {
    try {
      const response = await productsApi.get(`/${id}`);

      return response;
    } catch (err) {
      console.error(`Error recovering product (product id: ${id}). ${err}`);
      throw new Error("Failed to get product.");
    }
  }
}
