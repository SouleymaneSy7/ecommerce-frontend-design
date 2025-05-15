"use client";

import { useProducts } from "@/hooks/useProducts";
import Container from "../common/Container";
import Title from "../common/Title";
import List from "../common/List";
import { RecommendedProductsTypes } from "@/types";
import Card from "../common/Card";
import Image from "next/image";
import { formatCurrency } from "@/libs/formatCurrency";
import Link from "next/link";

const RelatedProducts = () => {
  const { products, isLoading, isError } = useProducts(
    "/data/related-products/related-products.json"
  );

  if (isLoading)
    return <div className="flex justify-center p-8">Loading Products...</div>;
  if (isError)
    return <div className="text-red-500 p-4">Error while loading products</div>;

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
