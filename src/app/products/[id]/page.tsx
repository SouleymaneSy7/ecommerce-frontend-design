import Container from "@/components/common/Container";
import SingleNav from "@/components/layouts/SingleNav";
import ProductsBreadCrumbs from "@/components/layouts/ProductsBreadCrumbs";
import { PagePropsType } from "@/types";
import ProductDetails from "@/components/layouts/ProductDetails";
import ProductDescription from "@/components/layouts/ProductDescription";
import RelatedProducts from "@/components/layouts/RelatedProducts";
import DiscountCard from "@/components/layouts/DiscountCard";
import ProductMayLike from "@/components/layouts/ProductMayLike";

const Page = async (props: { params: PagePropsType }) => {
  const params = await props.params;

  return (
    <main className="bg-[#f7fafc] pb-20">
      <SingleNav />
      <ProductsBreadCrumbs />
      <Container as={"section"}>
        <ProductDetails id={params.id} />
      </Container>
      <Container as={"section"} className="grid grid-cols-4 gap-4 mt-6">
        <ProductDescription />
        <ProductMayLike />
      </Container>
      <RelatedProducts />
      <DiscountCard />
    </main>
  );
};

export default Page;
