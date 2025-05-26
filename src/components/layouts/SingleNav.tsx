import List from "../common/List";
import Container from "../common/Container";

import { singleNav } from "@/constants";
import { MenuIcon } from "lucide-react";

const SingleNav = () => {
  return (
    <section className="bg-shade-100 border-t border-b border-shade-200">
      <Container as={"div"} className="py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <MenuIcon />
          </div>
          
          <List
            items={singleNav}
            className="flex items-center gap-4"
            renderItem={(item) => {
              return (
                <li key={item.id}>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </li>
              );
            }}
          />
          <select>
            <option value="help">Help</option>
            <option value="abouts">Abouts</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <select>
            <option value="english">English, USD</option>
            <option value="france">France, EUR</option>
            <option value="germany">Germany, EUR</option>
          </select>

          <select>
            <option value="germany">Ship to Germany</option>
            <option value="france">Ship to France</option>
            <option value="china">Ship to China</option>
          </select>
        </div>
      </Container>
    </section>
  );
};

export default SingleNav;
