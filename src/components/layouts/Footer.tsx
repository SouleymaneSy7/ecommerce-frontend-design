import Link from "next/link";
import Image from "next/image";

import Container from "../common/Container";
import Title from "../common/Title";
import List from "../common/List";
import {
  footerDescription,
  footerLinksAbout,
  footerLinksForUsers,
  footerLinksInformation,
  footerLinksPartnership,
  footerSocials,
} from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-shade-100 pt-16">
      <Container
        as={"section"}
        className="flex flex-wrap gap-8 items-start justify-between mb-16"
      >
        <div className="space-y-4">
          <Link href={"/"} className="inline-block mb-4">
            <Image
              src="/assets/logo-colored.svg"
              alt="colored logo"
              width={151}
              height={46}
            />
          </Link>

          <p className="text-[#505050]">{footerDescription}</p>

          <List
            className="flex items-center gap-2"
            items={footerSocials}
            renderItem={(item) => {
              const Icon = item.icon;

              return (
                <li key={item.id}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.title}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-[#BDC4CD] hover:bg-[#BDC4CD]/80 transition-all duration-300"
                  >
                    <Icon stroke="#fff" width={24} height={24} />
                  </a>
                </li>
              );
            }}
          />
        </div>

        <div>
          <Title level="h4" ariaLevel={4} className="font-semibold mb-2">
            About
          </Title>

          <List
            className="flex flex-col gap-1"
            items={footerLinksAbout}
            renderItem={(item) => {
              return (
                <li key={item.id}>
                  <a
                    href={item.link}
                    title={item.title}
                    className="text-[#8B96A5]"
                  >
                    {item.name}
                  </a>
                </li>
              );
            }}
          />
        </div>
        <div>
          <Title level="h4" ariaLevel={4} className="font-semibold mb-2">
            Partnership
          </Title>

          <List
            className="flex flex-col gap-1"
            items={footerLinksPartnership}
            renderItem={(item) => {
              return (
                <li key={item.id}>
                  <a
                    href={item.link}
                    title={item.title}
                    className="text-[#8B96A5]"
                  >
                    {item.name}
                  </a>
                </li>
              );
            }}
          />
        </div>
        <div>
          <Title level="h4" ariaLevel={4} className="font-semibold mb-2">
            Information
          </Title>

          <List
            className="flex flex-col gap-1"
            items={footerLinksInformation}
            renderItem={(item) => {
              return (
                <li key={item.id}>
                  <a
                    href={item.link}
                    title={item.title}
                    className="text-[#8B96A5]"
                  >
                    {item.name}
                  </a>
                </li>
              );
            }}
          />
        </div>
        <div>
          <Title level="h4" ariaLevel={4} className="font-semibold mb-2">
            For Users
          </Title>

          <List
            className="flex flex-col gap-1"
            items={footerLinksForUsers}
            renderItem={(item) => {
              return (
                <li key={item.id}>
                  <a
                    href={item.link}
                    title={item.title}
                    className="text-[#8B96A5]"
                  >
                    {item.name}
                  </a>
                </li>
              );
            }}
          />
        </div>

        <div className="flex flex-col gap-4">
          <Title level="h4" ariaLevel={4} className="font-semibold mb-2">
            Get App
          </Title>

          <div className="flex flex-col gap-2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-[124px] h-[42px] "
            >
              <Image
                src={"/assets/app-store.png"}
                alt="download on the apple store image"
                width={124}
                height={42}
                className="w-full h-full aspect-square object-cover object-center"
              />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-[124px] h-[42px] "
            >
              <Image
                src={"/assets/google-play.png"}
                alt="download on the google store image"
                width={124}
                height={42}
                className="w-full h-full aspect-square object-cover object-center"
              />
            </a>
          </div>
        </div>
      </Container>

      <section className="bg-[#EFF2F4]">
        <Container
          as={"div"}
          className="flex items-center justify-between py-6"
        >
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Image
                src={"/assets/usa.png"}
                alt="Usa flags image"
                fill
                className="w-full h-full aspect-video object-contain"
              />
            </div>

            <select className="cursor-pointer">
              <option value="english">English</option>
              <option value="french">French</option>
              <option value="arabic">Arabic</option>
              <option value="chinese">Chinese</option>
            </select>
          </div>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
