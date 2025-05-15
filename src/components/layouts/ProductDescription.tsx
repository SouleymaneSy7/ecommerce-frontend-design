import {
  descriptionList1,
  descriptionList2,
} from "@/constants/productDetailsConstants";
import List from "../common/List";

const ProductDescription = () => {
  return (
    <div className="col-span-3 bg-shade-100 rounded-md border border-shade-200">
      <div className="p-4 border-b border-shade-200">
        <List
          items={descriptionList1}
          className="flex items-center gap-8"
          renderItem={(item) => {
            return (
              <li key={item.id}>
                <button type="button" className="cursor-pointer">
                  {item.title}
                </button>
              </li>
            );
          }}
        />
      </div>

      <div className="p-4">
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
            optio odio eius temporibus, voluptate nobis soluta vero quidem
            laborum? Ut incidunt officia error dolores sapiente! Et tenetur
            provident consequatur suscipit. Ut incidunt officia error dolores
            sapiente! Et tenetur provident consequatur suscipit. Ut incidunt
            officia error dolores sapiente! Et tenetur provident consequatur
            suscipit.
          </p>

          <p>
            laborum? Ut incidunt officia error dolores sapiente! Et tenetur
            provident consequatur suscipit. Ut incidunt officia error dolores
            sapiente! Et tenetur provident consequatur suscipit. Ut incidunt
            officia error dolores sapiente! Et tenetur provident consequatur
            suscipit.
          </p>
        </div>

        <div className="flex flex-col w-full max-w-[450px] mt-8">
          <div className="flex items-center justify-between border border-shade-200">
            <p className="w-full border-r border-shade-200 bg-shade-600 py-1.5 px-2">
              Model
            </p>
            <p className="w-full py-1.5 px-2">#86898582</p>
          </div>
          <div className="flex items-center justify-between border border-shade-200">
            <p className="w-full border-r border-shade-200 bg-shade-600 py-1.5 px-2">
              Model
            </p>
            <p className="w-full py-1.5 px-2">#86898582</p>
          </div>
          <div className="flex items-center justify-between border border-shade-200">
            <p className="w-full border-r border-shade-200 bg-shade-600 py-1.5 px-2">
              Model
            </p>
            <p className="w-full py-1.5 px-2">#86898582</p>
          </div>
          <div className="flex items-center justify-between border border-shade-200">
            <p className="w-full border-r border-shade-200 bg-shade-600 py-1.5 px-2">
              Model
            </p>
            <p className="w-full py-1.5 px-2">#86898582</p>
          </div>
        </div>

        <List
          items={descriptionList2}
          className="flex flex-col gap-3 mt-8"
          renderItem={(item) => {
            const Icon = item.icon;

            return (
              <li key={item.id} className="flex items-center gap-2">
                <Icon />
                <p>{item.title}</p>
              </li>
            );
          }}
        />
      </div>
    </div>
  );
};

export default ProductDescription;
