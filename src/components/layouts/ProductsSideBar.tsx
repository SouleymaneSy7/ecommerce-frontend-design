import { StarIcon } from "lucide-react";

import List from "../common/List";
import Accordion from "./Accordion";
import Inputs from "../common/Input";

import {
  brands,
  category,
  conditions,
  features,
} from "@/constants/productsPageConstants";

const ProductsSideBar = () => {
  return (
    <aside className="col-span-1 pr-6">
      <Accordion title="Category">
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
      </Accordion>

      <Accordion title="Brands">
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
      </Accordion>

      <Accordion title="Features">
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
      </Accordion>

      <Accordion title="Price Range">
        <input type="range" name="range" id="range" className="w-full mb-3" />

        <div className="flex items-center gap-3">
          <Inputs
            type="text"
            placeholder="0"
            label="Min"
            className="bg-shade-100 border border-shade-200 rounded-md shadow-md px-2 py-1 w-full"
          />

          <Inputs
            type="text"
            placeholder="9999"
            label="Max"
            className="bg-shade-100 border border-shade-200 shadow-md rounded-md px-2 py-1 w-full"
          />
        </div>

        <button
          type="button"
          className="w-full py-2 rounded-md border border-shade-200 bg-shade-100 shadow-md mt-4"
        >
          <span className="text-blue-900">Apply</span>
        </button>
      </Accordion>

      <Accordion title="Condition">
        <List
          items={conditions}
          className="flex flex-col gap-2"
          renderItem={(item) => {
            return (
              <li key={item.id} className="flex items-center gap-3">
                <input type="radio" name="radio" id="radio" />
                <p className="text-shade-800 capitalize">{item.title}</p>
              </li>
            );
          }}
        />
      </Accordion>

      <Accordion title="Ratings">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  className="w-5 h-5"
                  stroke="hsl(37, 77%, 58%)"
                  fill="hsl(37, 77%, 58%)"
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <div className="flex items-center gap-1">
              {[...Array(4)].map((_, index) => (
                <StarIcon
                  key={index}
                  className="w-5 h-5"
                  stroke="hsl(37, 77%, 58%)"
                  fill="hsl(37, 77%, 58%)"
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, index) => (
                <StarIcon
                  key={index}
                  className="w-5 h-5"
                  stroke="hsl(37, 77%, 58%)"
                  fill="hsl(37, 77%, 58%)"
                />
              ))}
            </div>
          </div>
        </div>
      </Accordion>
    </aside>
  );
};

export default ProductsSideBar;
