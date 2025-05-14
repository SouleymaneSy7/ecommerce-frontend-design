import { ChevronRight } from "lucide-react";

const productsBreadCrumbs = [
  { id: crypto.randomUUID(), link: "home", icon: ChevronRight },
  { id: crypto.randomUUID(), link: "clothings", icon: ChevronRight },
  { id: crypto.randomUUID(), link: "men's wear", icon: ChevronRight },
  { id: crypto.randomUUID(), link: "summer clothing", icon: ChevronRight },
];

const category = [
  {
    id: crypto.randomUUID(),
    link: "mobile accessory",
    linkUrl: "#",
  },
  {
    id: crypto.randomUUID(),
    link: "electronics",
    linkUrl: "#",
  },
  {
    id: crypto.randomUUID(),
    link: "smartphones",
    linkUrl: "#",
  },
  {
    id: crypto.randomUUID(),
    link: "modern techs",
    linkUrl: "#",
  },
];

const brands = [
  {
    id: crypto.randomUUID(),
    title: "samsung",
  },
  {
    id: crypto.randomUUID(),
    title: "apple",
  },
  {
    id: crypto.randomUUID(),
    title: "huawei",
  },
  {
    id: crypto.randomUUID(),
    title: "pocco",
  },
  {
    id: crypto.randomUUID(),
    title: "lenovo",
  },
];

const features = [
  {
    id: crypto.randomUUID(),
    title: "metallic",
  },
  {
    id: crypto.randomUUID(),
    title: "plastic cover",
  },
  {
    id: crypto.randomUUID(),
    title: "8GB RAM",
  },
  {
    id: crypto.randomUUID(),
    title: "super power",
  },
  {
    id: crypto.randomUUID(),
    title: "large memory",
  },
];

export { productsBreadCrumbs, category, brands, features };
