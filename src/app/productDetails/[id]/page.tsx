import { Container } from "@/components/Container/Container";
import { ProductDetails } from "@/components/ProductDetails/ProductDetails";

const prod = {
  id: 65,
  title: "Classic Red Pullover Hoodie",
  slug: "classic-red-pullover-hoodie",
  price: 10,
  description:
    "Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs for a snug fit. The timeless design ensures easy pairing with jeans or joggers for a relaxed yet stylish look, making it a versatile addition to your everyday attire.",
  category: {
    id: 13,
    name: "Clothes",
    slug: "clothes",
    image: "https://i.imgur.com/QkIa5tT.jpeg",
    creationAt: "2025-08-24T21:13:43.000Z",
    updatedAt: "2025-08-24T21:13:43.000Z",
  },
  images: [
    "https://i.imgur.com/1twoaDy.jpeg",
    "https://i.imgur.com/FDwQgLy.jpeg",
    "https://i.imgur.com/kg1ZhhH.jpeg",
  ],
  creationAt: "2025-08-24T21:13:46.000Z",
  updatedAt: "2025-08-24T21:13:46.000Z",
};

export default async function PageDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  return (
    <Container>
      <ProductDetails id={id} />
    </Container>
  );
}
