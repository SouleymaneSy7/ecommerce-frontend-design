"use client";

import * as React from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import {
  HeartIcon,
  LayoutGridIcon,
  Loader2Icon,
  MenuIcon,
  StarIcon,
} from "lucide-react";

import Title from "../common/Title";
import Card from "@/components/common/Card";
import List from "@/components/common/List";

import { ProductListType } from "@/types";
import { useProducts } from "@/hooks/useProducts";
import { formatCurrency } from "@/libs/formatCurrency";

const ProductsList = () => {
  const { products, isLoading, isError } = useProducts(
    "/data/products/products.json"
  );
  const [isGridOpen, setIsGridOpen] = React.useState(true);

  const gridShow = () => setIsGridOpen(true);
  const gridHide = () => setIsGridOpen(false);

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
    <div className="col-span-3">
      <div className="  rounded-md flex items-center justify-between bg-shade-100 border border-shade-200 p-3 mb-4">
        <div>
          <p>
            12, 991 items in <strong>Mobile Accessory</strong>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <p className="text-shade-800 capitalize">verified only</p>
          </div>

          <select className="border border-shade-200 rounded-md py-2 px-4">
            <option value="feature">Featured</option>
            <option value="others">Others</option>
          </select>

          <div className="flex items-center rounded-md border border-shade-200  overflow-hidden">
            <button
              type="button"
              className={clsx(
                "p-2 cursor-pointer overflow-hidden",
                isGridOpen === true ? "bg-shade-200" : "bg-shade-100"
              )}
              onClick={gridShow}
            >
              <LayoutGridIcon fill="#000" />
            </button>

            <button
              type="button"
              className={clsx(
                "p-2 cursor-pointer border-l border-shade-200",
                isGridOpen === false ? "bg-shade-200" : "bg-shade-100"
              )}
              onClick={gridHide}
            >
              <MenuIcon fill="#000" />
            </button>
          </div>
        </div>
      </div>

      {isGridOpen === true ? (
        <List
          items={products as ProductListType}
          className="products-list-grid"
          renderItem={({ id, discount_price, image, name, price, rating }) => {
            return (
              <li key={id}>
                <Link href={`/products/${id}`}>
                  <Card className="bg-shade-100 shadow rounded-md border border-shade-200 overflow-hidden">
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
                </Link>
              </li>
            );
          }}
        />
      ) : (
        <List
          items={products as ProductListType}
          className="flex flex-col gap-3"
          renderItem={({
            id,
            description,
            discount_price,
            image,
            name,
            orders,
            price,
            rating,
          }) => {
            return (
              <li key={id}>
                <Link href={`/products/${id}`}>
                  <Card className="flex items-start gap-8 justify-between bg-shade-100 border border-shade-200 rounded-md p-4">
                    <div className="w-[230px] h-auto">
                      <Image
                        src={image}
                        alt={`${name} - products`}
                        width={500}
                        height={500}
                        className="w-full h-full aspect-square object-contain"
                      />
                    </div>

                    <div className="grow space-y-2">
                      <Title
                        level="h3"
                        ariaLevel={3}
                        className="text-lg font-semibold mb-4"
                      >
                        {name}
                      </Title>

                      <div className="flex items-center gap-2">
                        <Title
                          level="h2"
                          ariaLevel={2}
                          className="text-2xl font-semibold"
                        >
                          {formatCurrency(price)}
                        </Title>
                        <p className="line-through text-[#8B96A5] font-semibold">
                          {formatCurrency(discount_price)}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <p className="text-orange-200 flex items-center gap-2">
                          <StarIcon
                            stroke="hsl(37, 77%, 58%)"
                            fill="hsl(37, 77%, 58%)"
                          />

                          <span>{rating}</span>
                        </p>

                        <div>
                          <p className="text-[#8B96A5]">{orders} orders</p>
                        </div>

                        <div>
                          <p className="text-green-200">Free Shipping</p>
                        </div>
                      </div>

                      <p className="text-shade-900">{description}</p>

                      <button
                        type="button"
                        className="font-medium text-blue-1400"
                      >
                        View Details
                      </button>
                    </div>

                    <div>
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
                  </Card>
                </Link>
              </li>
            );
          }}
        />
      )}
    </div>
  );
};

export default ProductsList;
