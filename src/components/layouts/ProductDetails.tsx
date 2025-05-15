"use client";

import * as React from "react";
import Image from "next/image";
import clsx from "clsx";

import Title from "../common/Title";
import { ProductDetailsType } from "@/types";
import { useProductId } from "@/hooks/useProductsID";
import {
  CheckIcon,
  GlobeIcon,
  HardHatIcon,
  HeartIcon,
  MessageCircleMoreIcon,
  ShieldCheckIcon,
  StarIcon,
  XIcon,
} from "lucide-react";

import { formatCurrency } from "@/libs/formatCurrency";

const ProductDetails: React.FC<{
  id: string | number;
}> = ({ id }) => {
  const { product, isLoading, isError } = useProductId(
    "/data/product-details/",
    id
  ) as { product: ProductDetailsType; isLoading: boolean; isError: boolean };

  if (isLoading)
    return <div className="flex justify-center p-8">Loading Products...</div>;
  if (isError)
    return <div className="text-red-500 p-4">Error while loading products</div>;
  if (!product)
    return <div className="text-red-500 p-4">Product Not Found!!!</div>;

  return (
    <div>
      <div className="bg-shade-100 grid grid-cols-3 gap-4 p-4 border border-shade-200 rounded-md ">
        <div className="col-span-1 w-full min-h-full h-full border border-shade-200 rounded-md overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-full object-contain aspect-square"
            priority
          />
        </div>

        <div className="col-span-1  space-y-3.5">
          <p
            className={clsx(
              `flex items-center gap-1 capitalize
              ${product.in_stock ? "text-green-200" : "text-red-200"}`
            )}
          >
            {product.in_stock ? (
              <CheckIcon stroke="#00b318" />
            ) : (
              <XIcon stroke="#fa3333" />
            )}
            {product.in_stock ? "in stock" : "stock empty"}
          </p>

          <Title level="h2" ariaLevel={2} className="text-2xl font-bold">
            {product.name}
          </Title>

          <div className="flex gap-4 items-center">
            <div className="text-orange-200 flex items-center gap-1">
              <StarIcon
                width={20}
                height={20}
                stroke="hsl(37, 77%, 58%)"
                fill="hsl(37, 77%, 58%)"
              />
              <StarIcon
                width={20}
                height={20}
                stroke="hsl(37, 77%, 58%)"
                fill="hsl(37, 77%, 58%)"
              />
              <StarIcon
                width={20}
                height={20}
                stroke="hsl(37, 77%, 58%)"
                fill="hsl(37, 77%, 58%)"
              />
              <StarIcon
                width={20}
                height={20}
                stroke="hsl(37, 77%, 58%)"
                fill="hsl(37, 77%, 58%)"
              />

              <p>{product.rating}</p>
            </div>

            <div className="flex items-center gap-1 text-shade-600">
              <MessageCircleMoreIcon />
              <p>{product.reviews} reviews</p>
            </div>

            <div className="flex items-center gap-1 text-shade-600">
              <HardHatIcon />
              <p>{product.sold} sold</p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-sm bg-orange-100 p-3">
            <div className="pr-8 border-r border-shade-200">
              <p className="font-bold text-red-200">{formatCurrency(98.0)}</p>
              <span className="text-shade-600 text-sm">50-100 pcs</span>
            </div>

            <div className="pr-8 border-r border-shade-200">
              <p className="font-bold">{formatCurrency(90.0)}</p>
              <span className="text-shade-600 text-sm">100-700 pcs</span>
            </div>

            <div>
              <p className="font-bold">{formatCurrency(78.0)}</p>
              <span className="text-shade-600 text-sm">700+ pcs</span>
            </div>
          </div>

          <div className="border-b border-shade-200 pb-3">
            <div className="flex items-center justify-between">
              <p className="w-full text-shade-400">Price: </p>
              <p className="text-shade-800 capitalize w-full">
                {product.price}
              </p>
            </div>
          </div>

          <div className="border-b border-shade-200 pb-3">
            <div className="flex items-center justify-between">
              <p className="w-full text-shade-400">Type: </p>
              <p className="text-shade-800 capitalize w-full">{product.type}</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="w-full text-shade-400">Material: </p>
              <p className="text-shade-800 capitalize w-full">
                {product.material}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <p className="w-full text-shade-400">Design: </p>
              <p className="text-shade-800 capitalize w-full">
                {product.design}
              </p>
            </div>
          </div>

          <div className="border-b border-shade-200 pb-3">
            <div className="flex items-center justify-between">
              <p className="w-full text-shade-400">Customization: </p>
              <p className="text-shade-800 capitalize w-full">
                {product.customization}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <p className="w-full text-shade-400">Protection: </p>
              <p className="text-shade-800 capitalize w-full">
                {product.protection}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <p className="w-full text-shade-400">Warranty: </p>
              <p className="text-shade-800 capitalize w-full">
                {product.warranty}
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="border border-shade-200 rounded-md p-4">
            <div className="flex items-center gap-3 pb-3 border-b border-shade-200 mb-3">
              <div className="bg-blue-600 py-3 px-4  rounded-sm grid place-items-center">
                <span className="text-3xl font-bold text-blue-700">R</span>
              </div>

              <Title level="h4" ariaLevel={4}>
                Suppliers <br /> Guanjoi Trading LLC
              </Title>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3 text-shade-600">
                <img
                  src={"/assets/flags/germany.png"}
                  alt=""
                  className="w-6 h-6"
                />
                <p>Germany, Berlin</p>
              </div>

              <div className="flex items-center gap-3 mb-3 text-shade-600">
                <ShieldCheckIcon />
                <p>Verified Seller</p>
              </div>

              <div className="flex items-center gap-3 mb-3 text-shade-600">
                <GlobeIcon />
                <p>Worldwide Shipping</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                type="button"
                className="py-2 w-full rounded-md text-shade-100 bg-blue-1300"
              >
                Send Inquiry
              </button>

              <button
                type="button"
                className="py-2 w-full rounded-md bg-shade-100 border border-shade-200 text-blue-1300"
              >
                Seller's Profile
              </button>
            </div>
          </div>

          <div className="mt-8 grid place-items-center">
            <button type="button" className="flex items-center gap-2">
              <HeartIcon stroke="#005ae0" />
              <span className="text-blue-1300">Save for later</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
