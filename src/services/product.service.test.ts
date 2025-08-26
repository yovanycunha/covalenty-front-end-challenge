import { describe, expect, it } from "vitest";
import { ProductService } from "./product.service";

describe("Service Test", () => {
  it("should call all products endpoint", async () => {
    const response = await ProductService.getAllProducts();

    expect(response.length).toBeGreaterThan(0);
  });

  it("should call product by id endpoint", async () => {
    const response = await ProductService.getProduct("55");

    expect(response).not.toBe(undefined);
    expect(response.title).not.toBe(undefined);
  });
});
