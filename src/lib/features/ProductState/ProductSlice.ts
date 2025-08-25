"use client";

import { TProduct } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductState } from "./type";

const initialState: IProductState = {
  selectedProduct: null,
  productsList: [],
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selectProduct: (state, action: PayloadAction<TProduct>) => {
      state.selectedProduct = action.payload;
    },
    unselectProduct: (state) => {
      state.selectedProduct = null;
    },
    createList: (state, action: PayloadAction<TProduct[]>) => {
      state.productsList = action.payload;
    },
  },
});

export const { selectProduct, unselectProduct, createList } =
  ProductSlice.actions;
export default ProductSlice.reducer;
