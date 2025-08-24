import { ICardProps } from "./type";
import "./card.css";
import { Poster } from "../Poster/Poster";

export function Card({ product }: ICardProps) {
  return (
    <div className="productCard">
      <Poster src={product.images[0]} alt={product.slug} />
      <div className="infoContainer">
        <p className="cardTitle">{product.title}</p>
        <span className="cardPrice">R$ {product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}
