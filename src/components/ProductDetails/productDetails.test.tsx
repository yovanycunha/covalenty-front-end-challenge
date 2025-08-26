import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProductDetails } from "./ProductDetails";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { makeStore } from "@/lib/store";
import { Provider } from "react-redux";

const selectedProduct = {
  id: 55,
  title: "Camisa Payaso",
  slug: "camisa-payaso",
  price: 200,
  description: "Merch exclusiva",
  category: {
    id: 1,
    name: "un nuevo nombre",
    slug: "un-nuevo-nombre",
    image: "https://i.imgur.com/QkIa5tT.jpeg",
    creationAt: "2025-08-26T16:21:30.000Z",
    updatedAt: "2025-08-26T19:23:59.000Z",
  },
  images: [
    "https://http2.mlstatic.com/D_NQ_NP_823649-MLM76339979912_052024-O-playera-auron-house-clown-auronplay-payaso.webp",
  ],
  creationAt: "2025-08-26T16:26:59.000Z",
  updatedAt: "2025-08-26T16:26:59.000Z",
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

    const titleDetail = await screen.findByText(selectedProduct.title);
    expect(titleDetail).toBeInTheDocument();
    const priceDetail = await screen.findByRole("detailsPrice");
    expect(priceDetail).toBeInTheDocument();
    const categoryDetail = await screen.findByRole("detailsCategory");
    expect(categoryDetail).toBeInTheDocument();
    const descriptionDetail = await screen.findByRole("detailsDescription");
    expect(descriptionDetail).toBeInTheDocument();
  });
});
