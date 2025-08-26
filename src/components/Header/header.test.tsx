import { describe, expect, it } from "vitest";
import { Header } from "./Header";
import { render, screen } from "@testing-library/react";
import { makeStore } from "@/lib/store";
import { Provider } from "react-redux";
import { selectProduct } from "@/lib/features/ProductState/ProductSlice";

const storeMock = makeStore();

const prod = {
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

describe("Header Component test - Render", () => {
  it("should render Header component", () => {
    // render component
    render(
      <Provider store={storeMock}>
        <Header />
      </Provider>
    );

    // validate title rendering
    expect(screen.queryByText(/Products List/i)).toBeInTheDocument();

    // validate last selected product - have no product selected
    const noSelectedContainer = screen.queryByRole("noSelectedContainer");
    expect(noSelectedContainer).toBeInTheDocument();
  });
  it("should render selected product", () => {
    storeMock.dispatch(selectProduct(prod));
    // render component
    render(
      <Provider store={storeMock}>
        <Header />
      </Provider>
    );

    // validate last selected product - have product selected
    const selectedContainer = screen.queryByRole("selectedContainer");
    expect(selectedContainer).toBeInTheDocument();
  });
});
