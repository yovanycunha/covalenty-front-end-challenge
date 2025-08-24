"use client";

import { Header } from "@/components/Header/Header";
import "./page.css";
import { useQuery } from "@tanstack/react-query";
import { ProductService } from "@/services/product.service";
import { Card } from "@/components/Card/Card";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => ProductService.getAllProducts(),
  });

  console.log("data", isLoading, data);

  return (
    <div className="container">
      <Header />
      <main className="main">
        <section className="productsSection">
          {data && <Card product={data[0]} />}
        </section>
      </main>
    </div>
  );
}
