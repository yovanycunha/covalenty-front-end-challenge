"use client";

import { useQuery } from "@tanstack/react-query";
import { ProductService } from "@/services/product.service";
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { createList } from "@/lib/features/ProductState/ProductSlice";
import { ProductsList } from "@/components/ProductsList/ProductsList";
import { Container } from "@/components/Container/Container";
import { Spinner } from "@/components/Spinner/Spinner";
import { ErrorMsg } from "@/components/ErrorMsg/ErrorMsg";

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => ProductService.getAllProducts(),
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(createList(data));
    }
  }, [data, dispatch]);

  const renderContent = () => {
    return error ? <ErrorMsg msg="No products found" /> : <ProductsList />;
  };

  return <Container>{isLoading ? <Spinner /> : renderContent()}</Container>;
}
