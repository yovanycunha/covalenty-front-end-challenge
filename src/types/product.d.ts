export type TProduct = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
    slug: string;
    creationAt: string;
    updatedAt: string;
  };
  images: string[];
  updatedAt: string;
  creationAt: string;
};
