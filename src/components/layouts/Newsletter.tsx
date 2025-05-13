import Form from "../common/Form";
import Title from "../common/Title";
import Inputs from "../common/Input";
import Container from "../common/Container";

import { subscriptionNewsletter } from "@/constants";

const Newsletter = () => {
  const { title, description } = subscriptionNewsletter;

  return (
    <section className="bg-[#EFF2F4]">
      <Container as="div" className="flex flex-col items-center py-10">
        <Title
          level="h4"
          ariaLevel={4}
          className="text-center text-2xl font-bold text-[#1c1c1c] mb-2"
        >
          {title}
        </Title>

        <p className="text-center text-sm text-[#606060] max-w-[600px]">
          {description}
        </p>

        <Form className="flex items-center gap-2 mt-5">
          <Inputs
            type="email"
            name="email_address"
            placeholder="Email"
            className="w-full max-w-[274px] h-10 bg-shade-100 text-[#8B96A5] p-2 border border-gray-300 rounded-md"
            required
          />

          <button
            type="submit"
            className="bg-[#127FFF] flex items-center justify-center w-full max-w-[110px] h-10 rounded-md text-shade-100 font-semibold"
          >
            Subscribe
          </button>
        </Form>
      </Container>
    </section>
  );
};

export default Newsletter;
