import { TProduct } from "@/types";
import { productsApi } from "./client/client";

export class ProductService {
  static async getAllProducts(): Promise<TProduct[]> {
    try {
      const { data } = await productsApi.get("");

      return data;
    } catch (err) {
      console.error(`Error recovering products. ${err}`);
      throw new Error("Failed to get products.");
    }
  }

  static async getProduct(id: string): Promise<TProduct> {
    try {
      const { data } = await productsApi.get(`/${id}`);

      return data;
    } catch (err) {
      console.error(`Error recovering product (product id: ${id}). ${err}`);
      throw new Error("Failed to get product.");
    }
  }
}
