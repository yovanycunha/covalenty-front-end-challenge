import { Container } from "@/components/Container/Container";
import { ProductDetails } from "@/components/ProductDetails/ProductDetails";

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
