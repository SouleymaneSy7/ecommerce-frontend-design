import React from "react";
import Container from "../common/Container";
import { sendQuotesContents } from "@/constants";
import Title from "../common/Title";
import Form from "../common/Form";
import Inputs from "../common/Input";

const QuoteToSuppliers = () => {
  const { title, description } = sendQuotesContents;

  return (
    <Container
      as={"section"}
      className="quote-to-suppliers-bg-image | flex items-start justify-between py-8 px-8 mt-4 rounded-md"
    >
      <div className="text-shade-100 w-full max-w-[400px] ">
        <Title level="h2" ariaLevel={2} className="text-3xl font-semibold mb-4">
          {title}
        </Title>

        <p>{description}</p>
      </div>

      <Form className="flex flex-col gap-4 items-start w-full max-w-[540px] bg-shade-100 text-black py-6 px-4 rounded-md">
        <label htmlFor="quote" className="text-2xl font-semibold">
          Send quote to the suppliers
        </label>

        <Inputs
          type="text"
          name="quote"
          id="quote"
          placeholder="What item you need?"
          className="w-full p-2 border border-shade-400 rounded-md"
        />

        <textarea
          name="message"
          placeholder="Type more details"
          className="w-full p-2 border border-shade-400 rounded-md"
        />

        <div className="flex items-center gap-2">
          <Inputs
            type="number"
            placeholder="Quantity"
            min={0}
            max={100}
            className="w-[200px] p-2 border border-shade-400 rounded-md"
          />

          <select
            name="pcs"
            className="w-[100px] p-2.5  border border-shade-400 rounded-md"
          >
            <option value="pcs">Pcs</option>
            <option value="1-pcs">1 pcs</option>
            <option value="2-pcs">2 pcs</option>
          </select>
        </div>

        <button
          type="submit"
          className="py-3 px-6 bg-blue-1300 text-shade-100 rounded-md"
        >
          Send inquiry
        </button>
      </Form>
    </Container>
  );
};

export default QuoteToSuppliers;
