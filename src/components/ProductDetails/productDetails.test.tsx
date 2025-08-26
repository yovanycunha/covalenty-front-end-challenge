import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProductDetails } from "./ProductDetails";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { makeStore } from "@/lib/store";
import { Provider } from "react-redux";

const selectedProduct = {
  id: 5,
  title: "Classic Black Hooded Sweatshirt",
  slug: "classic-black-hooded-sweatshirt",
  price: 79,
  description:
    "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.",
  category: {
    id: 1,
    name: "Cloth",
    slug: "cloth",
    image: "https://i.imgur.com/QkIa5tT.jpeg",
    creationAt: "2025-08-25T15:47:21.000Z",
    updatedAt: "2025-08-26T14:26:08.000Z",
  },
  images: [
    "https://i.imgur.com/cSytoSD.jpeg",
    "https://i.imgur.com/WwKucXb.jpeg",
    "https://i.imgur.com/cE2Dxh9.jpeg",
  ],
  creationAt: "2025-08-25T15:47:21.000Z",
  updatedAt: "2025-08-25T15:47:21.000Z",
};

const storeMock = makeStore();

describe("ProductDetails component test", () => {
  it("Should render ProductDetails component", async () => {
    await render(
      <Provider store={storeMock}>
        <ReactQueryProvider>
          <ProductDetails id={String(selectedProduct.id)} />
        </ReactQueryProvider>
      </Provider>
    );

    const titleDetail = await screen.findByRole("detailsTitle");
    expect(titleDetail).toBeInTheDocument();
    const priceDetail = await screen.findByRole("detailsPrice");
    expect(priceDetail).toBeInTheDocument();
    const categoryDetail = await screen.findByRole("detailsCategory");
    expect(categoryDetail).toBeInTheDocument();
    const descriptionDetail = await screen.findByRole("detailsDescription");
    expect(descriptionDetail).toBeInTheDocument();
  });
});
