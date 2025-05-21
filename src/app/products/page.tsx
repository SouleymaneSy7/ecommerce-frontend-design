import Container from "@/components/common/Container";
import Newsletter from "@/components/layouts/Newsletter";
import ProductPagination from "@/components/layouts/ProductPagination";
import ProductsBreadCrumbs from "@/components/layouts/ProductsBreadCrumbs";
import ProductsList from "@/components/layouts/ProductsList";
import ProductsSideBar from "@/components/layouts/ProductsSideBar";
import SingleNav from "@/components/layouts/SingleNav";
import { useProducts } from "@/hooks/useProducts";

const page = () => {
  return (
    <main className="bg-[#f7fafc]">
      <SingleNav />
      <ProductsBreadCrumbs />
      <Container as={"section"} className="grid grid-cols-4">
        <ProductsSideBar />
        <ProductsList />
      </Container>

      <ProductPagination />
      <Newsletter />
    </main>
  );
};

export default page;
