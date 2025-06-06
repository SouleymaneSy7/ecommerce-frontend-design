"use client";

import Link from "next/link";
import Image from "next/image";
import { Loader2Icon } from "lucide-react";

import { useProducts } from "@/hooks/useProducts";
import { DealsAndOffersProductsType } from "@/types";

import List from "../common/List";
import Card from "../common/Card";
import Title from "../common/Title";
import Container from "../common/Container";
import CountDownTimer from "./CountDownTimer";

const DealsAndOffers = () => {
  const { products, isLoading, isError } = useProducts(
    "/data/deals-and-offers/deals-and-offers.json"
  );

  if (isLoading)
    return (
      <div className="grid place-items-center min-h-20 p-8">
        <p className="flex items-center gap-3">
          <Loader2Icon className="animate-spin" /> Loading Products...
        </p>
      </div>
    );

  if (isError)
    return (
      <div className="grid place-items-center min-h-20 p-8">
        Error while loading products
      </div>
    );

  return (
    <Container
      as="section"
      className="flex justify-between bg-shade-100 rounded-md shadow border border-shade-200 mt-7 mb-5"
    >
      <div className="p-4">
        <Title level="h2" ariaLevel={2} className="text-xl font-semibold mb-1">
          Deals and Offers
        </Title>

        <p className="mb-5 text-[#8B96A5]">Hygiene equipments</p>

        <CountDownTimer />
      </div>

      <List
        className="flex flex-wrap"
        items={products as DealsAndOffersProductsType}
        renderItem={(item) => {
          return (
            <li key={item.id} className="border-l border-shade-200">
              <Link href={`/products/${item.id}`}>
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
              </Link>
            </li>
          );
        }}
      />
    </Container>
  );
};

export default DealsAndOffers;
