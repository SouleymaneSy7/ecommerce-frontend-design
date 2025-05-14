"use client";

import Image from "next/image";

import Title from "../common/Title";
import Card from "@/components/common/Card";
import List from "@/components/common/List";

import { useProducts } from "@/hooks/useProducts";
import { ProductListType } from "@/types";
import { formatCurrency } from "@/libs/formatCurrency";
import { HeartIcon, StarIcon } from "lucide-react";

const ProductsList = () => {
  const { products, isLoading, isError } = useProducts(
    "/data/products/products.json"
  );

  if (isLoading)
    return <div className="flex justify-center p-8">Loading Products...</div>;
  if (isError)
    return <div className="text-red-500 p-4">Error while loading products</div>;

  return (
    <List
      items={products as ProductListType}
      className="products-list-grid | py-6"
      renderItem={({
        id,
        category,
        description,
        discount_price,
        image,
        in_stock,
        liked,
        name,
        orders,
        price,
        rating,
      }) => {
        return (
          <li key={id}>
            <Card className="bg-shade-100 shadow rounded-md">
              <div className="w-full h-auto">
                <Image
                  src={image}
                  alt={`${name} - products`}
                  width={500}
                  height={500}
                  className="w-full h-full aspect-square object-contain"
                />
              </div>

              <div className="p-5 border-t border-shade-200">
                <div className="flex items-center justify-between pb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <Title
                        level="h2"
                        ariaLevel={2}
                        className="text-2xl font-semibold"
                      >
                        {formatCurrency(price)}
                      </Title>
                      <p className="line-through text-[#8B96A5]">
                        {formatCurrency(discount_price)}
                      </p>
                    </div>

                    <p className="text-orange-200 flex items-center gap-2">
                      <StarIcon
                        stroke="hsl(37, 77%, 58%)"
                        fill="hsl(37, 77%, 58%)"
                      />

                      <span>{rating}</span>
                    </p>
                  </div>

                  <button
                    type="button"
                    className="rounded-md p-2 border border-shade-200 cursor-pointer"
                  >
                    <HeartIcon
                      stroke="hsl(216, 100%, 44%)"
                      width={28}
                      height={28}
                    />
                  </button>
                </div>

                <Title
                  level="h3"
                  ariaLevel={3}
                  className="text-lg text-shade-800"
                >
                  {name}
                </Title>
              </div>
            </Card>
          </li>
        );
      }}
    />
  );
};

export default ProductsList;
