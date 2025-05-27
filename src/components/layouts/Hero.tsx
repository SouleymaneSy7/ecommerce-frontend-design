import { heroCategoriesList, heroContents } from "@/constants";

import List from "../common/List";
import Title from "../common/Title";
import Container from "../common/Container";
import Image from "next/image";

const Hero = () => {
  const { title, subTitle, btnText } = heroContents;

  return (
    <Container
      as={"section"}
      className="flex gap-4 bg-shade-100 rounded-md shadow p-4 mt-2"
    >
      <div>
        <List
          items={heroCategoriesList}
          renderItem={({ id, title }) => {
            return (
              <li key={id} className="p-3 rounded-sm">
                <a href="#">{title}</a>
              </li>
            );
          }}
        />
      </div>

      <div className="grow py-14 px-8 | hero-bg-image">
        <Title level="h1" ariaLevel={1} className="text-3xl font-medium mb-2">
          {title}
        </Title>

        <Title level="h2" ariaLevel={2} className="text-4xl font-bold">
          {subTitle}
        </Title>

        <button
          type="button"
          className="grid place-items-center font-medium bg-shade-100 px-4 py-2 rounded-sm mt-4"
        >
          {btnText}
        </button>
      </div>

      <div className="flex flex-col gap-2 max-w-[250px]">
        <div className="flex flex-col gap-4 bg-blue-100 p-4 rounded">
          <div className="flex gap-2">
            <div className="w-15 h-15">
              <Image
                src="/assets/Avatar.svg"
                alt="avatar profile icons"
                className="w-full h-full aspect-square object-contain"
                width={44}
                height={44}
              />
            </div>

            <p className="text-xl">
              Hi user, <br /> let get started
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <button
              type="button"
              className="py-2 w-full rounded-md text-shade-100 bg-blue-1300"
            >
              Join now
            </button>

            <button
              type="button"
              className="py-2 w-full rounded-md bg-shade-100 text-blue-1300"
            >
              Login
            </button>
          </div>
        </div>

        <div className="px-4 py-3 rounded-md bg-[#F38332]">
          <p className="text-shade-100 text-xl">
            Get us $10 off <br /> with a new <br /> supplier
          </p>
        </div>

        <div className="px-4 py-3 rounded-md bg-[#55BDC3]">
          <p className="text-shade-100 text-xl">
            Send quotes with <br /> supplier <br /> preferences
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
