import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import Form from "../common/Form";
import List from "../common/List";
import Title from "../common/Title";
import Container from "../common/Container";

import { formatCurrency } from "@/libs/formatCurrency";
import { cartItems, payCardList } from "@/constants/cartConstants";

const Cart = () => {
  return (
    <Container as={"section"} className="grid grid-cols-4 gap-4 items-start">
      <section className="col-span-3 bg-shade-100 rounded-md border border-shade-200 p-4">
        {cartItems.length === 0 ? (
          <div className="w-full h-[80vh] grid place-items-center">
            No Items
          </div>
        ) : (
          <List
            items={cartItems}
            renderItem={({
              id,
              colors,
              image,
              materials,
              price,
              seller,
              size,
              title,
            }) => {
              return (
                <li
                  key={id}
                  className="flex gap-4 border-b border-shade-200 py-5"
                >
                  <div className="w-[128px] h-auto rounded-md border border-shade-200 overflow-hidden">
                    <Image
                      src={image}
                      alt={`${title} - products`}
                      width={500}
                      height={500}
                      className="w-full h-full aspect-square object-contain"
                    />
                  </div>

                  <div className="flex justify-between gap-4 grow">
                    <div className="flex flex-col gap-3">
                      <Title level="h2" ariaLevel={2} className="font-semibold">
                        {title}
                      </Title>

                      <div>
                        <p className="text-shade-400">
                          Size: {size}, Color: {colors}, Material: {materials},
                        </p>
                        <p className="text-shade-400">Seller: {seller}</p>
                      </div>

                      <div className=" flex items-center gap-2">
                        <button
                          type="button"
                          className="bg-shade-100 text-red-200 font-medium text-sm rounded-md border border-shade-200 px-2 py-1"
                        >
                          Remove
                        </button>

                        <button
                          type="button"
                          className="bg-shade-100 text-blue-1100 font-medium text-sm rounded-md border border-shade-200 px-2 py-1"
                        >
                          Save for later
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <p className="font-semibold pb-4">
                        {formatCurrency(price)}
                      </p>

                      <select className="border border-shade-200 p-1.5 rounded-md">
                        <option value="1">Qty: 1</option>
                        <option value="2">Qty: 2</option>
                        <option value="3">Qty: 3</option>
                        <option value="4">Qty: 4</option>
                        <option value="5">Qty: 5</option>
                        <option value="6">Qty: 6</option>
                        <option value="7">Qty: 7</option>
                        <option value="8">Qty: 8</option>
                        <option value="9">Qty: 9</option>
                        <option value="10">Qty: 10</option>
                      </select>
                    </div>
                  </div>
                </li>
              );
            }}
          />
        )}

        <div className="flex justify-between items-center py-4">
          <Link
            href={"/products"}
            className="flex items-center gap-2 bg-blue-1100 rounded-md px-4 py-2"
          >
            <ArrowLeft stroke="#fff" />
            <span className="text-shade-100">Back to shop</span>
          </Link>

          <button
            type="button"
            className="bg-shade-100 text-blue-1100 rounded-md border border-shade-200 px-4 py-1.5"
          >
            Remove All
          </button>
        </div>
      </section>

      <aside className="col-span-1">
        <div className="bg-shade-100 rounded-md border border-shade-200 p-3 mb-4">
          <p className="mb-4">Have a coupon?</p>

          <Form className="flex items-center w-full rounded-md border border-shade-200">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Add coupon"
              className="py-2 pl-3 grow w-3/4"
            />
            <button
              type="submit"
              className=" w-1/4 text-blue-1100 font-semibold border-l border-shade-200 py-2 px-3 cursor-pointer"
            >
              Apply
            </button>
          </Form>
        </div>

        <div className="bg-shade-100 rounded-md border border-shade-200 p-4">
          <div className="flex flex-col gap-2 pb-4 border-b border-shade-200">
            <div>
              <p className="flex justify-between items-center">
                <span>Subtotal:</span>
                <span>{formatCurrency(1403.97)}</span>
              </p>
            </div>

            <div>
              <p className="flex justify-between items-center">
                <span>Discount:</span>
                <span className="text-red-200">{formatCurrency(-60.0)}</span>
              </p>
            </div>

            <div>
              <p className="flex justify-between items-center">
                <span>Tax:</span>
                <span className="text-green-200">{formatCurrency(+14.0)}</span>
              </p>
            </div>
          </div>

          <div className="py-5">
            <p className="flex justify-between items-center">
              <span className="font-bold">Total:</span>
              <span className="font-bold">{formatCurrency(1357.97)}</span>
            </p>
          </div>

          <button
            type="button"
            className="w-full py-3 rounded-md bg-green-200 text-shade-100 mb-5"
          >
            Checkout
          </button>

          <List
            items={payCardList}
            className="flex items-center justify-center gap-3"
            renderItem={(item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid place-items-center w-10 h-8 rounded-sm border border-shade-200"
                  >
                    <Icon />
                  </a>
                </li>
              );
            }}
          />
        </div>
      </aside>
    </Container>
  );
};

export default Cart;
