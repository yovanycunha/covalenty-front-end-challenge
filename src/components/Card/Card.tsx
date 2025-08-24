import Image from "next/image";
import { ICardProps } from "./type";
import "./card.css";

export function Card({ product }: ICardProps) {
  return (
    <div className="productCard">
      <div className="poster">
        <Image
          src={product.images[0]}
          alt={product.slug}
          width={100}
          height={200}
        />
      </div>
      <div className="infoContainer">
        <p className="cardTitle">{product.title}</p>
        <span className="cardPrice">R$ {product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}
