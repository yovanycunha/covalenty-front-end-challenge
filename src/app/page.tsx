"use client";

import { Header } from "@/components/Header/Header";
import "./page.css";
import { useQuery } from "@tanstack/react-query";
import { ProductService } from "@/services/product.service";
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { createList } from "@/lib/features/ProductState/ProductSlice";
import { ProductsList } from "@/components/ProductsList/ProductsList";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => ProductService.getAllProducts(),
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(createList(data));
    }
  }, [data, dispatch]);

  return (
    <div className="container">
      <Header />
      <main className="main">
        <ProductsList />
      </main>
    </div>
  );
}
