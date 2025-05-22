"use client";

import Link from "next/link";
import Image from "next/image";

import { useProducts } from "@/hooks/useProducts";
import { RecommendedProductsTypes } from "@/types";

import List from "../common/List";
import Card from "../common/Card";
import Title from "../common/Title";
import Container from "../common/Container";

import { CartIcon } from "@/icons/Icons.component";
import { formatCurrency } from "@/libs/formatCurrency";

const CartSavedForLater = () => {
  const { products, isLoading, isError } = useProducts(
    "/data/save-for-later/save-for-later.json"
  );

  if (isLoading)
    return <div className="flex justify-center p-8">Loading Products...</div>;
  if (isError)
    return <div className="text-red-500 p-4">Error while loading products</div>;

  return (
    <Container
      as={"section"}
      className="bg-shade-100 border border-shade-200 rounded-md mb-6 p-5"
    >
      <Title level="h2" ariaLevel={2} className="text-2xl font-bold mb-6">
        Saved For Later
      </Title>

      <List
        className="save-for-later-grid gap-6"
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

                  <div>
                    <Title
                      level="h3"
                      ariaLevel={3}
                      className="text-xl font-bold mb-2"
                    >
                      {formatCurrency(item.price)}
                    </Title>

                    <Title
                      level="h2"
                      ariaLevel={2}
                      className="text-shade-600 mb-2"
                    >
                      {item.title}
                    </Title>

                    <button
                      type="button"
                      className="flex items-center gap-2 py-2 px-3 rounded-md border border-shade-200 bg-shade-100 cursor-pointer"
                    >
                      <CartIcon fill="#2c7bf2" />
                      <span className="text-blue-1100">Move to cart</span>
                    </button>
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

export default CartSavedForLater;
