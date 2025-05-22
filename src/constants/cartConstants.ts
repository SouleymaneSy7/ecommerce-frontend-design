import {
  AmericanExpressIcon,
  ApplePayIcon,
  LockIcon,
  MasterCardIcon,
  MessageIcon,
  PaypalIcon,
  VehiculeIcon,
  VisaIcon,
} from "@/icons/Icons.component";

const cartItems = [
  {
    id: crypto.randomUUID(),
    title: "T-shirts with multiple colors, for men and lady",
    image: "/assets/cloths/1.jpg",
    size: "Medium",
    colors: "Blue",
    materials: "Plastics",
    seller: "Artel Market",
    price: 78.99,
  },
  {
    id: crypto.randomUUID(),
    title: "T-shirts with multiple colors, for men and lady",
    image: "/assets/cloths/5.jpg",
    size: "Medium",
    colors: "Blue",
    materials: "Plastics",
    seller: "Artel Market",
    price: 39.00,
  },
  {
    id: crypto.randomUUID(),
    title: "T-shirts with multiple colors, for men and lady",
    image: "/assets/cloths/2.jpg",
    size: "Medium",
    colors: "Blue",
    materials: "Plastics",
    seller: "Artel Market",
    price: 170.50,
  },
];

const descriptionList = [
  {
    id: crypto.randomUUID(),
    icon: LockIcon,
    title: "Secure Payment",
    description: "Your payment information is encrypted and secure.",
  },
  {
    id: crypto.randomUUID(),
    icon: MessageIcon,
    title: "Customers Support",
    description: "24/7 customer support for all your queries.",
  },
  {
    id: crypto.randomUUID(),
    icon: VehiculeIcon,
    title: "Free Delivery",
    description: "Free delivery on orders over $50.",
  },
];

const payCardList = [
  {
    id: crypto.randomUUID(),
    icon: AmericanExpressIcon,
    href: "https://americanexpress.com",
  },
  {
    id: crypto.randomUUID(),
    icon: MasterCardIcon,
    href: "https://mastercard.com",
  },
  {
    id: crypto.randomUUID(),
    icon: PaypalIcon,
    href: "https://paypal.com",
  },
  {
    id: crypto.randomUUID(),
    icon: VisaIcon,
    href: "https://visa-card.com",
  },
  {
    id: crypto.randomUUID(),
    icon: ApplePayIcon,
    href: "https://apple-pay.com",
  },
];

export { cartItems, descriptionList, payCardList };
