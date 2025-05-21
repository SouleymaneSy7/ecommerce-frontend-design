import { ChevronLeft, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Container from "../common/Container";

const ProductPagination = () => {
  return (
    <Container
      as={"section"}
      className="flex items-center justify-end pt-7 pb-10"
    >
      <div className="flex items-center gap-2">
        <select className="p-2.5 bg-shade-100 border border-shade-200 rounded-md">
          <option value="10">Show 10</option>
          <option value="5">Show 5</option>
          <option value="1">Show 1</option>
        </select>

        <div className="flex items-center rounded-sm border border-shade-200 overflow-hidden">
          <button
            type="button"
            className="bg-shade-100 grid place-items-center p-2 cursor-pointer"
          >
            <ChevronLeftIcon />
          </button>

          <button
            type="button"
            className="bg-shade-200 grid place-items-center py-2 px-4 cursor-pointer"
          >
            1
          </button>
          <button
            type="button"
            className="bg-shade-100 grid place-items-center py-2 px-4 border-l border-shade-200 cursor-pointer"
          >
            2
          </button>
          <button
            type="button"
            className="bg-shade-100 grid place-items-center py-2 px-4 border-l border-shade-200 cursor-pointer"
          >
            3
          </button>

          <button
            type="button"
            className="bg-shade-100 grid place-items-center p-2 border-l border-shade-200 cursor-pointer"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ProductPagination;
