"use client";

import Title from "../common/Title";
import Container from "../common/Container";
import List from "../common/List";
import { useProducts } from "@/hooks/useProducts";
import Image from "next/image";
import Card from "../common/Card";
import { OutdoorsProductsType } from "@/types";

const Outdoors = () => {
  const { products, isLoading, isError } = useProducts(
    "/data/home-and-outdoors/home-and-outdoors.json"
  );

  if (isLoading)
    return <div className="flex justify-center p-8">Loading Products...</div>;
  if (isError)
    return <div className="text-red-500 p-4">Error while loading products</div>;

  return (
    <Container as="section" className=" bg-shade-100 ">
      <div className="flex rounded-md shadow mt-7 mb-5">
        <div className="p-4 w-[404px] | outdoors-bg-image">
          <Title level="h2" ariaLevel={2} className="text-2xl font-bold mb-8">
            Home and <br /> outdoors
          </Title>

          <button
            type="button"
            className="px-4 py-2 bg-shade-100 rounded-sm font-medium"
          >
            Source Now
          </button>
        </div>

        <List
          className="grid grid-cols-4 grid-rows-2 pt-px pl-px"
          items={products as OutdoorsProductsType}
          renderItem={(item) => {
            return (
              <li
                key={item.id}
                className="border border-shade-200 -ml-px -mt-px"
              >
                <Card className="pl-4 py-5 flex justify-between items-end gap-6">
                  <div className="flex flex-col gap-2">
                    <Title
                      level="h3"
                      ariaLevel={3}
                      className="text-lg font-semibold"
                    >
                      {item.title}
                    </Title>

                    <p className="text-[#8B96A5]">
                      From <br /> USD {item.price}
                    </p>
                  </div>

                  <div className="w-20 h-auto">
                    <Image
                      src={item.image}
                      alt={`${item.title} - products`}
                      width={500}
                      height={500}
                      className="w-full h-full aspect-square object-contain"
                    />
                  </div>
                </Card>
              </li>
            );
          }}
        />
      </div>
    </Container>
  );
};

export default Outdoors;
