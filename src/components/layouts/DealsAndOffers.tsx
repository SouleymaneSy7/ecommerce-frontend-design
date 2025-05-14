"use client";

import { useProducts } from "@/hooks/useProducts";

import Title from "../common/Title";
import Container from "../common/Container";
import List from "../common/List";
import Card from "../common/Card";
import Image from "next/image";
import { DealsAndOffersProductsType } from "@/types";

const DealsAndOffers = () => {
  const { products, isLoading, isError } = useProducts(
    "/data/deals-and-offers/deals-and-offers.json"
  );

  if (isLoading)
    return <div className="flex justify-center p-8">Loading Products...</div>;
  if (isError)
    return <div className="text-red-500 p-4">Error while loading products</div>;

  return (
    <Container
      as="section"
      className="flex bg-shade-100 rounded-md shadow mt-7 mb-5"
    >
      <div className="p-4">
        <Title level="h2" ariaLevel={2} className="text-2xl font-bold mb-1">
          Deals and Offers
        </Title>

        <p className="mb-5 text-[#8B96A5]">Hygiene equipments</p>

        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-0.5 p-3 rounded-sm bg-shade-900 text-shade-100">
            <Title level="h3" ariaLevel={3} className="text-2xl font-bold">
              04
            </Title>
            <p>Days</p>
          </div>

          <div className="flex flex-col items-center gap-0.5 p-3 rounded-sm bg-shade-900 text-shade-100">
            <Title level="h3" ariaLevel={3} className="text-2xl font-bold">
              04
            </Title>
            <p>Days</p>
          </div>

          <div className="flex flex-col items-center gap-0.5 p-3 rounded-sm bg-shade-900 text-shade-100">
            <Title level="h3" ariaLevel={3} className="text-2xl font-bold">
              04
            </Title>
            <p>Days</p>
          </div>

          <div className="flex flex-col items-center gap-0.5 p-3 rounded-sm bg-shade-900 text-shade-100">
            <Title level="h3" ariaLevel={3} className="text-2xl font-bold">
              04
            </Title>
            <p>Days</p>
          </div>
        </div>
      </div>

      <List
        className="flex flex-wrap"
        items={products as DealsAndOffersProductsType}
        renderItem={(item) => {
          return (
            <li key={item.id} className="border-l border-shade-200">
              <Card className="py-4">
                <div className="w-full h-auto">
                  <Image
                    src={item.imageUrl}
                    alt={`${item.title} - products`}
                    width={500}
                    height={500}
                    className="w-full h-full aspect-square object-contain"
                  />
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Title level="h3" ariaLevel={3}>
                    {item.title}
                  </Title>

                  <div className="bg-red-100 text-red-300 p-2 rounded-full">
                    -{item.discount}%
                  </div>
                </div>
              </Card>
            </li>
          );
        }}
      />
    </Container>
  );
};

export default DealsAndOffers;
