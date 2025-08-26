export type TCategory = {
  id: number;
  name: string;
  image: string;
  slug: string;
  creationAt: string;
  updatedAt: string;
};

export type TProduct = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: TCategory;
  images: string[];
  updatedAt: string;
  creationAt: string;
};

export type TProductsResponse = {
  data: TProduct[];
};
