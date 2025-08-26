import { ICardProps } from "./type";
import "./card.css";
import { Poster } from "../Poster/Poster";
import { useAppDispatch } from "@/lib/hooks";
import { selectProduct } from "@/lib/features/ProductState/ProductSlice";
import { useRouter } from "next/navigation";

export function Card({ product }: ICardProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClick = () => {
    dispatch(selectProduct(product));
    router.push(`productDetails/${product.id}`);
  };

  return (
    <div className="productCard" onClick={handleClick}>
      <Poster src={product.images[0]} alt={product.slug} />
      <div className="infoContainer">
        <p className="cardTitle">{product.title}</p>
        <span className="cardPrice">R$ {product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}
