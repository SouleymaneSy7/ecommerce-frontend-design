import { CheckIcon } from "lucide-react";

const descriptionList1 = [
  { id: crypto.randomUUID(), title: "Description" },
  { id: crypto.randomUUID(), title: "Review" },
  { id: crypto.randomUUID(), title: "Shipping" },
  { id: crypto.randomUUID(), title: "About Seller" },
];

const descriptionList2 = [
  {
    id: crypto.randomUUID(),
    icon: CheckIcon,
    title: "Some great features name here",
  },
  {
    id: crypto.randomUUID(),
    icon: CheckIcon,
    title: "Some great features name here",
  },
  {
    id: crypto.randomUUID(),
    icon: CheckIcon,
    title: "Some great features name here",
  },
  {
    id: crypto.randomUUID(),
    icon: CheckIcon,
    title: "Some great features name here",
  },
];

export { descriptionList1, descriptionList2 };
