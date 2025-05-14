import List from "../common/List";
import Container from "../common/Container";

import { productsBreadCrumbs } from "@/constants/productsPageConstants";

const ProductsBreadCrumbs = () => {
  return (
    <Container as={"section"} className="py-5">
      <List
        items={productsBreadCrumbs}
        className="flex items-center gap-2"
        renderItem={(item) => {
          const Icon = item.icon;
          return (
            <li key={item.id}>
              <a
                href="#"
                className="text-sm text-[#8B96A5] flex gap-2 capitalize"
              >
                <span>{item.link}</span>
                <Icon />
              </a>
            </li>
          );
        }}
      />
    </Container>
  );
};

export default ProductsBreadCrumbs;
