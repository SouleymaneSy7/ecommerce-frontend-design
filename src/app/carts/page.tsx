import Cart from "@/components/layouts/Cart";
import CartDescriptionList from "@/components/layouts/CartDescriptionList";
import CartSavedForLater from "@/components/layouts/CartSavedForLater";
import DiscountCard from "@/components/layouts/DiscountCard";

const page = () => {
  return (
    <main className="bg-[#f7fafc] py-10">
      <Cart />
      <CartDescriptionList />
      <CartSavedForLater />
      <DiscountCard />
    </main>
  );
};

export default page;
