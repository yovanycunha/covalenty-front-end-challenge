import { TProduct } from "@/types";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card } from "./Card";

const product: TProduct = {
  id: 16,
  title: "Classic White Tee - Timeless Style and Comfort",
  slug: "classic-white-tee-timeless-style-and-comfort",
  price: 73,
  description:
    "Elevate your everyday wardrobe with our Classic White Tee. Crafted from premium soft cotton material, this versatile t-shirt combines comfort with durability, perfect for daily wear. Featuring a relaxed, unisex fit that flatters every body type, it's a staple piece for any casual ensemble. Easy to care for and machine washable, this white tee retains its shape and softness wash after wash. Pair it with your favorite jeans or layer it under a jacket for a smart look.",
  category: {
    id: 1,
    name: "Clothes",
    slug: "clothes",
    image: "https://i.imgur.com/QkIa5tT.jpeg",
    creationAt: "2025-08-24T10:20:10.000Z",
    updatedAt: "2025-08-24T10:20:10.000Z",
  },
  images: [
    "https://i.imgur.com/Y54Bt8J.jpeg",
    "https://i.imgur.com/SZPDSgy.jpeg",
    "https://i.imgur.com/sJv4Xx0.jpeg",
  ],
  creationAt: "2025-08-24T10:20:10.000Z",
  updatedAt: "2025-08-24T10:20:10.000Z",
};

describe("Card Component test", () => {
  it("should render Card component - fields renders", () => {
    // render component
    render(<Card product={product} />);

    // validate product image
    const cardPoster = screen.queryByRole("img");
    expect(cardPoster).toBeInTheDocument();

    // validate title
    const titleRegex = new RegExp(`${product.title}`, "i");
    const cardTitle = screen.queryByText(titleRegex);
    expect(cardTitle).toBeInTheDocument();

    // validate price
    const priceRegex = new RegExp(`${product.price}`, "i");
    const cardPrice = screen.queryByText(priceRegex);
    expect(cardPrice).toBeInTheDocument();
  });
});
