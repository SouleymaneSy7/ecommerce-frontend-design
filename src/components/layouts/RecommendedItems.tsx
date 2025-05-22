"use client";

import Link from "next/link";
import Image from "next/image";
import { Loader2Icon } from "lucide-react";

import List from "../common/List";
import Card from "../common/Card";
import Title from "../common/Title";
import Container from "../common/Container";

import { useProducts } from "@/hooks/useProducts";
import { formatCurrency } from "@/libs/formatCurrency";
import { RecommendedProductsTypes } from "@/types";

const RecommendedItems = () => {
  const { products, isLoading, isError } = useProducts(
    "/data/recommended-items/recommended-items.json"
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
    <Container as={"section"} className="py-10">
      <Title level="h2" ariaLevel={2} className="text-2xl font-semibold mb-6">
        Recommended Items
      </Title>

      <List
        className="recommended-items-grid gap-6"
        items={products as RecommendedProductsTypes}
        renderItem={(item) => {
          return (
            <li key={item.id}>
              <Link href={`/products/${item.id}`}>
                <Card classNames="p-4 bg-shade-100 rounded-lg shadow">
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
                    <p className="mb-4">{formatCurrency(item.price)}</p>
                    <Title
                      level="h3"
                      ariaLevel={3}
                      className="text-[#8B96A5] w-full max-w-[180px] "
                    >
                      {item.title}
                    </Title>
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

export default RecommendedItems;
