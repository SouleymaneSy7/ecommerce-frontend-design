"use client";

import Link from "next/link";
import Image from "next/image";
import { Loader2Icon } from "lucide-react";

import Card from "../common/Card";
import List from "../common/List";
import Title from "../common/Title";
import Container from "../common/Container";

import { useProducts } from "@/hooks/useProducts";
import { RecommendedProductsTypes } from "@/types";
import { formatCurrency } from "@/libs/formatCurrency";

const RelatedProducts = () => {
  const { products, isLoading, isError } = useProducts(
    "/data/related-products/related-products.json"
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
      as={"section"}
      className="bg-shade-100 border border-shade-200 rounded-md my-6 p-5"
    >
      <Title level="h2" ariaLevel={2} className="text-2xl font-bold mb-6">
        Related Products
      </Title>

      <List
        className="recommended-items-grid  gap-6"
        items={products as RecommendedProductsTypes}
        renderItem={(item) => {
          return (
            <li key={item.id}>
              <Link href={`/products/${item.id}`}>
                <Card classNames="p-4">
                  <div className="w-full h-auto">
                    <Image
                      src={item.image}
                      alt={`${item.title} - products`}
                      width={500}
                      height={500}
                      className="w-full h-full aspect-square object-contain"
                    />
                  </div>

                  <div className="pt-2">
                    <Title level="h3" ariaLevel={3} className="text-xl mb-3">
                      {item.title}
                    </Title>
                    <p className="text-shade-400 ">
                      {formatCurrency(item.price)} -{" "}
                      {formatCurrency(item.price)}
                    </p>
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

export default RelatedProducts;
