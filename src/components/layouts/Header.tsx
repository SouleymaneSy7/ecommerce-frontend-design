import Link from "next/link";
import Container from "../common/Container";
import Inputs from "../common/Input";
import Form from "../common/Form";
import List from "../common/List";
import { navbarListItems } from "@/constants";

const Header = () => {
  return (
    <Container as={"header"} className="py-6">
      <nav className="flex items-center justify-between">
        <Link href={"/"}>
          <img src="/assets/logo-colored.svg" alt="colored logo" />
        </Link>

        <Form className="flex items-center h-[40px] border-2  rounded-[12px]  border-blue-1200">
          <Inputs
            type="search"
            name="search"
            placeholder="Search"
            className="w-full max-w-[420px] h-full max-h-[40px]  rounded-tl-lg rounded-bl-lg pl-4"
          />

          <select
            name="navbar-select"
            id="navbar-select"
            className="inline-block w-full max-w-[145px] h-full border-l border-blue-1200 pl-4 pr-8"
          >
            <option value="all-categories">All categories</option>
            <option value="others">Others</option>
          </select>

          <button
            type="submit"
            className="flex items-center justify-center bg-blue-1200 h-full w-[100px] text-shade-100 rounded-tr-md rounded-br-md px-8"
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
                >
                  <Icon
                    fill="#8B96A5"
                    stroke="#8B96A5"
                    width={24}
                    height={24}
                  />

                  <span className="capitalize text-[#8B96A5]">
                    {item.title}{" "}
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
