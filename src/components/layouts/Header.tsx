import Link from "next/link";

import List from "../common/List";
import Form from "../common/Form";
import Inputs from "../common/Input";
import Container from "../common/Container";

import { navbarListItems } from "@/constants";

const Header = () => {
  return (
    <Container as={"header"} className="py-6">
      <nav className="flex items-center justify-between">
        <Link href={"/"}>
          <img src="/assets/logo-colored.svg" alt="colored logo" />
        </Link>

        <Form className="flex items-center h-[40px] rounded-md border-2 border-blue-1200 overflow-hidden">
          <Inputs
            type="search"
            name="search"
            placeholder="Search"
            className="w-[420px] h-full max-h-[40px] pl-4"
          />

          <select
            name="navbar-select"
            id="navbar-select"
            className="inline-block w-[145px] h-full border-l border-blue-1200 pl-4 pr-8"
          >
            <option value="all-categories">All categories</option>
            <option value="others">Others</option>
          </select>

          <button
            type="submit"
            className="flex items-center justify-center bg-blue-1200 h-full w-[100px] text-shade-100"
          >
            <span>Search</span>
          </button>
        </Form>

        <List
          className="flex items-center gap-8"
          items={navbarListItems}
          renderItem={(item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="flex flex-col items-center gap-2"
                  title={item.title}
                >
                  <Icon />

                  <span className="capitalize text-[#8B96A5]">
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          }}
        />
      </nav>
    </Container>
  );
};

export default Header;
