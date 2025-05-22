import List from "../common/List";
import Container from "../common/Container";

import { descriptionList } from "@/constants/cartConstants";

const CartDescriptionList = () => {
  return (
    <Container as={"section"} className="py-8">
      <List
        items={descriptionList}
        className="flex items-center gap-6"
        renderItem={(item) => {
          const Icon = item.icon;

          return (
            <li key={item.id} className="flex items-center gap-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#BDC4CD]">
                <Icon />
              </div>

              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-shade-400">{item.description}</p>
              </div>
            </li>
          );
        }}
      />
    </Container>
  );
};

export default CartDescriptionList;
