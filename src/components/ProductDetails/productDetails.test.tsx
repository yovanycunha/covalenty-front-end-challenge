import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProductDetails } from "./ProductDetails";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";

describe("ProductDetails component test", () => {
  it("Should render ProductDetails component", async () => {
    await render(
      <ReactQueryProvider>
        <ProductDetails id={"2"} />
      </ReactQueryProvider>
    );

    const imgDetail = await screen.findByRole("detailsImg");
    expect(imgDetail).toBeInTheDocument();
    const titleDetail = await screen.findByRole("detailsTitle");
    expect(titleDetail).toBeInTheDocument();
    expect(titleDetail).toBeInTheDocument();
    const priceDetail = await screen.findByRole("detailsPrice");
    expect(priceDetail).toBeInTheDocument();
    const categoryDetail = await screen.findByRole("detailsCategory");
    expect(categoryDetail).toBeInTheDocument();
    const descriptionDetail = await screen.findByRole("detailsDescription");
    expect(descriptionDetail).toBeInTheDocument();
  });
});
