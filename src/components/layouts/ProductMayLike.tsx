"use client";

import { useProducts } from "@/hooks/useProducts";
import Container from "../common/Container";
import Title from "../common/Title";
import List from "../common/List";
import { RecommendedProductsTypes } from "@/types";
import Card from "../common/Card";
import Image from "next/image";
import { formatCurrency } from "@/libs/formatCurrency";

const ProductMayLike = () => {
  const { products, isLoading, isError } = useProducts(
    "/data/you-may-like/you-may-like.json"
  );

  if (isLoading)
    return <div className="flex justify-center p-8">Loading Products...</div>;
  if (isError)
    return <div className="text-red-500 p-4">Error while loading products</div>;

  return (
    <Container
      as={"section"}
      className="col-span-1 bg-shade-100 border border-shade-200 rounded-md p-5"
    >
      <Title level="h2" ariaLevel={2} className="text-2xl font-bold mb-6">
        You may like
      </Title>

      <List
        className="flex flex-col gap-6"
        items={products as RecommendedProductsTypes}
        renderItem={(item) => {
          return (
            <li key={item.id}>
              <Card classNames="flex gap-4">
                <div className="w-[100px] h-[100px] border border-shade-200 rounded-md overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.title} - products`}
                    width={500}
                    height={500}
                    className="w-full h-full aspect-square object-contain"
                  />
                </div>

                <div>
                  <Title level="h3" ariaLevel={3} className="text-xl mb-3">
                    {item.title}
                  </Title>
                  <p className="text-shade-400 ">
                    {formatCurrency(item.price)} - {formatCurrency(item.price)}
                  </p>
                </div>
              </Card>
            </li>
          );
        }}
      />
    </Container>
  );
};

export default ProductMayLike;
