import ExtraServices from "@/components/layouts/ExtraServices";
import Hero from "@/components/layouts/Hero";
import Newsletter from "@/components/layouts/Newsletter";
import QuoteToSuppliers from "@/components/layouts/QuoteToSuppliers";
import SingleNav from "@/components/layouts/SingleNav";
import Suppliers from "@/components/layouts/Suppliers";

export default function Home() {
  return (
    <main className="bg-[#f7fafc]">
      <SingleNav />
      <Hero />
      <QuoteToSuppliers />
      <ExtraServices />
      <Suppliers />
      <Newsletter />
    </main>
  );
}
