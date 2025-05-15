import Container from "../common/Container";
import Title from "../common/Title";

const DiscountCard = () => {
  return (
    <Container as="section" className="flex items-center justify-between bg-blue-1200 rounded-md p-8">
      <div>
        <Title level="h2" ariaLevel={2} className="text-shade-100 text-2xl font-semibold">
          Super discount on more than 100 USD
        </Title>
        <p className="text-shade-100">Have you ever finally just write dummy info</p>
      </div>

      <div>
        <button
          type="button"
          className="py-2 px-4 bg-orange-200 text-shade-100 font-medium rounded-md"
        >
          Shop Now
        </button>
      </div>
    </Container>
  );
};

export default DiscountCard;
