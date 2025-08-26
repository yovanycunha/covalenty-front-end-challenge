"use client";

import Image from "next/image";
import "./productDetails.css";
import { useQuery } from "@tanstack/react-query";
import { ProductService } from "@/services/product.service";
import { useEffect, useState } from "react";
import DefaultImage from "./images/default-image.svg";
import { IProductDetailsProps } from "./type";
import Arrow from "./images/arrow.svg";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/hooks";
import { selectProduct } from "@/lib/features/ProductState/ProductSlice";
import { Spinner } from "../Spinner/Spinner";

export function ProductDetails({ id }: IProductDetailsProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["details"],
    queryFn: () => ProductService.getProduct(id),
  });
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [imgSrc, setImgSrc] = useState<string>(DefaultImage);

  const handleNavigateBack = () => {
    router.push("/");
  };

  useEffect(() => {
    if (data) setImgSrc(data.images[0]);
  }, [data]);

  useEffect(() => {
    if (data) dispatch(selectProduct(data));
  }, [data, dispatch]);

  const renderDetails = () => (
    <div className="detailsWrapper">
      <div className="titleWrapper">
        <Image
          src={Arrow}
          height={35}
          width={35}
          alt="arrow"
          className="icon"
          onClick={handleNavigateBack}
        />
        <h2 className="detailTitle" role="detailsTitle">
          {data!.title}
        </h2>
      </div>
      <Image
        src={imgSrc}
        height={400}
        width={400}
        alt={data!.slug}
        onError={() => setImgSrc(data!.category.image)}
        className="detailImage"
        unoptimized
      />
      <div className="itemContainer" role="detailsPrice">
        <span className="itemTitle">Price:</span>
        <span className="itemText">R$ {data!.price.toFixed(2)}</span>
      </div>
      <div className="itemContainer" role="detailsCategory">
        <span className="itemTitle">Category:</span>
        <span className="itemText">{data!.category.name}</span>
      </div>
      <div className="itemContainer" role="detailsDescription">
        <span className="itemTitle">Description:</span>
        <p className="itemText">{data!.description}</p>
      </div>
    </div>
  );

  return isLoading ? <Spinner /> : renderDetails();
}
