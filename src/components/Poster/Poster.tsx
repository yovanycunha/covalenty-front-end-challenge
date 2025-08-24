import Image from "next/image";
import "./poster.css";
import { IPosterProps } from "./type";

export function Poster({ src, alt }: IPosterProps) {
  return (
    <div className="poster">
      <Image src={src} alt={alt} width={100} height={200} className="image" />
    </div>
  );
}
