import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import List from "../common/List";
import { brands, category, features } from "@/constants/productsPageConstants";

const ProductsSideBar = () => {
  return (
    <aside className="col-span-1 pr-6">
      <div className="mb-5">
        <div className="flex justify-between items-center border-t border-shade-200 py-4">
          <p className="font-bold">Category</p>

          <ChevronUpIcon />
        </div>

        <List
          items={category}
          className="flex flex-col gap-2"
          renderItem={(item) => {
            return (
              <li key={item.id}>
                <a href={item.linkUrl} className="text-shade-800 capitalize">
                  {item.link}
                </a>
              </li>
            );
          }}
        />

        <a href="#" className="text-blue-900 pt-2 inline-block">
          See All
        </a>
      </div>

      <div className="mb-5">
        <div className="flex justify-between items-center border-t border-shade-200 py-4">
          <p className="font-bold">Brands</p>

          <ChevronUpIcon />
        </div>

        <List
          items={brands}
          className="flex flex-col gap-2"
          renderItem={(item) => {
            return (
              <li key={item.id} className="flex items-center gap-3">
                <input type="checkbox" name="checkbox" id="checkbox" />

                <p className="text-shade-800 capitalize">{item.title}</p>
              </li>
            );
          }}
        />

        <a href="#" className="text-blue-900 pt-2 inline-block">
          See All
        </a>
      </div>

      <div className="mb-5">
        <div className="flex justify-between items-center border-t border-shade-200 py-4">
          <p className="font-bold">Features</p>

          <ChevronUpIcon />
        </div>

        <List
          items={features}
          className="flex flex-col gap-2"
          renderItem={(item) => {
            return (
              <li key={item.id} className="flex items-center gap-3">
                <input type="checkbox" name="checkbox" id="checkbox" />

                <p className="text-shade-800 capitalize">{item.title}</p>
              </li>
            );
          }}
        />

        <a href="#" className="text-blue-900 pt-2 inline-block">
          See All
        </a>
      </div>

      <div>
        <div className="flex justify-between items-center border-t border-shade-200 py-4">
          <p className="font-bold">Price Range</p>

          <ChevronDownIcon />
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center border-t border-shade-200 py-4">
          <p className="font-bold">Conditions</p>

          <ChevronDownIcon />
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center border-t border-shade-200 py-4">
          <p className="font-bold">Ratings</p>

          <ChevronDownIcon />
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center border-t border-shade-200 py-4">
          <p className="font-bold">Manufacturers</p>

          <ChevronDownIcon />
        </div>
      </div>
    </aside>
  );
};

export default ProductsSideBar;
