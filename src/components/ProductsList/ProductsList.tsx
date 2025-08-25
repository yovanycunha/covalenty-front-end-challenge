import { useAppSelector } from "@/lib/hooks";
import "./productList.css";
import { Card } from "../Card/Card";
import { TProduct } from "@/types";

export function ProductsList() {
  const { productsList } = useAppSelector((state) => state.productSlice);

  return (
    <section className="productsSection">
      {productsList &&
        productsList.map((product: TProduct) => (
          <Card key={product.id} product={product} />
        ))}
    </section>
  );
}
