"use client";

import Link from "next/link";
import Image from "next/image";
import { Loader2Icon } from "lucide-react";

import Card from "../common/Card";
import List from "../common/List";
import Title from "../common/Title";
import Container from "../common/Container";

import { useProducts } from "@/hooks/useProducts";
import { ConsumerProductsType } from "@/types";

const Consumers = () => {
  const { products, isLoading, isError } = useProducts(
    "/data/consumer-and-electronics-gadgets/consumer-and-electronics-gadgets.json"
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
    <Container as="section" className=" bg-shade-100 ">
      <div className="flex rounded-md shadow mt-7 mb-5 overflow-hidden">
        <div className="consumers-bg-image | p-4 w-[420px] border-t border-l border-b border-shade-200 ">
          <Title
            level="h2"
            ariaLevel={2}
            className="text-xl font-semibold mb-8"
          >
            Consumers <br /> electronics
            <br /> and gadgets
          </Title>

          <button
            type="button"
            className="px-4 py-2 bg-shade-100 rounded-sm font-medium"
          >
            Source Now
          </button>
        </div>

        <List
          className="grid grid-cols-4 grid-rows-2 grow pt-px pl-px"
          items={products as ConsumerProductsType}
          renderItem={(item) => {
            return (
              <li
                key={item.id}
                className="border border-shade-200 -ml-px -mt-px"
              >
                <Link href={`/products/${item.id}`}>
                  <Card className="pl-5 py-5 pr-2 flex justify-between items-end gap-6">
                    <div className="flex flex-col gap-2">
                      <Title level="h3" ariaLevel={3} className="capitalize">
                        {item.title}
                      </Title>

                      <p className="text-sm text-[#8B96A5]">
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
                </Link>
              </li>
            );
          }}
        />
      </div>
    </Container>
  );
};

export default Consumers;
