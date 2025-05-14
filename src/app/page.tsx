import Consumers from "@/components/layouts/Consumers";
import DealsAndOffers from "@/components/layouts/DealsAndOffers";
import ExtraServices from "@/components/layouts/ExtraServices";
import Hero from "@/components/layouts/Hero";
import Newsletter from "@/components/layouts/Newsletter";
import Outdoors from "@/components/layouts/Outdoors";
import QuoteToSuppliers from "@/components/layouts/QuoteToSuppliers";
import RecommendedItems from "@/components/layouts/RecommendedItems";
import SingleNav from "@/components/layouts/SingleNav";
import Suppliers from "@/components/layouts/Suppliers";

export default function Home() {
  return (
    <main className="bg-[#f7fafc]">
      <SingleNav />
      <Hero />
      <DealsAndOffers />
      <Outdoors />
      <Consumers />
      <QuoteToSuppliers />
      <RecommendedItems />
      <ExtraServices />
      <Suppliers />
      <Newsletter />
    </main>
  );
}
