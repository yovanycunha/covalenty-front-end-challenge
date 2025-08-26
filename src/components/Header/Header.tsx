"use client";

import { useAppSelector } from "@/lib/hooks";
import "./header.css";

export function Header() {
  const { selectedProduct } = useAppSelector((state) => state.productSlice);

  const renderNoSelectedMsg = () => (
    <div className="seletedContainer">
      <span className="selectedText">No products were seleted yet</span>
    </div>
  );

  const renderSelectedProduct = () => (
    <div className="selectedContainer">
      <span className="selectedText">Recently viewed product:</span>
      <span className="selectedProduct">{selectedProduct?.title}</span>
    </div>
  );
  return (
    <header className="headerWrapper">
      <div className="headerContainer">
        <p className="headerText">Products List</p>
      </div>
      {selectedProduct ? renderSelectedProduct() : renderNoSelectedMsg()}
    </header>
  );
}
