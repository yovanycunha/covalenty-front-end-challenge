import Image from "next/image";
import "./poster.css";
import { IPosterProps } from "./type";
import { useEffect, useState } from "react";
import DefaultImg from "./image/default-image.svg";

export function Poster({ src, alt }: IPosterProps) {
  const [imgSrc, setImgSrc] = useState(DefaultImg);

  useEffect(() => {
    if (!src.includes(".png")) {
      setImgSrc(src);
    }
  }, [src]);

  return (
    <div className="poster">
      <Image
        src={imgSrc}
        alt={alt}
        width={100}
        height={200}
        style={{ objectFit: "contain" }}
        className="image"
        onError={() => setImgSrc(DefaultImg)}
      />
    </div>
  );
}
