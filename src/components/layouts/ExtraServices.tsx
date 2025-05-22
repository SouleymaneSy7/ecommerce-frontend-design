import { ourExtraServices } from "@/constants";
import Container from "../common/Container";
import List from "../common/List";
import Title from "../common/Title";
import Card from "../common/Card";
import Image from "next/image";

const ExtraServices = () => {
  return (
    <Container as={"section"} className="pt-10">
      <Title level="h2" ariaLevel={2} className="text-2xl font-semibold mb-6">
        Our extra services
      </Title>

      <List
        className="extra-services-grid"
        items={ourExtraServices}
        renderItem={(item) => {
          const Icon = item.icon;

          return (
            <li key={item.id}>
              <Card className="w-full bg-shade-100 rounded-md shadow overflow-hidden">
                <div className="w-full h-[120px] | dark-image-overlay">
                  <Image
                    src={item.image}
                    alt={`${item.title}`}
                    width={300}
                    height={200}
                    className="w-full h-full aspect-video object-cover"
                  />
                </div>

                <div className="p-5 relative">
                  <Title
                    level="h3"
                    ariaLevel={3}
                    className="text-base font-medium w-[190px] capitalize"
                  >
                    {item.title}
                  </Title>

                  <div className="absolute -top-7 right-[20px] grid place-items-center w-14 h-14 rounded-full bg-blue-300 border-2 border-shade-100">
                    <Icon />
                  </div>
                </div>
              </Card>
            </li>
          );
        }}
      />
    </Container>
  );
};

export default ExtraServices;
