import Image from "next/image";

import List from "../common/List";
import Title from "../common/Title";
import Container from "../common/Container";

import { suppliersByRegion } from "@/constants";

const Suppliers = () => {
  return (
    <Container as={"section"} className="py-10">
      <Title level="h2" ariaLevel={2} className="text-2xl font-bold mb-6">
        Suppliers by region
      </Title>

      <List
        className="suppliers-grid"
        items={suppliersByRegion}
        renderItem={(item) => {
          return (
            <li key={item.id}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-end gap-2"
              >
                <div className="w-10 h-8">
                  <Image
                    src={item.flags}
                    alt={`${item.title} - flags`}
                    width={40}
                    height={32}
                    className="w-full h-full aspect-video object-cover"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <Title
                    level="h3"
                    ariaLevel={3}
                    className="text-sm leading-1.5"
                  >
                    {item.title}
                  </Title>
                  <p className="text-xs text-[#8B96A5]">{item.linkTitle} </p>
                </div>
              </a>
            </li>
          );
        }}
      />
    </Container>
  );
};

export default Suppliers;
