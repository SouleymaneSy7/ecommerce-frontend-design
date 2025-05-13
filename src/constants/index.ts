import {
  Boxes,
  BoxesIcon,
  Facebook,
  FacebookIcon,
  HeartIcon,
  InstagramIcon,
  LinkedinIcon,
  LucideShieldHalf,
  MessageSquareTextIcon,
  PlaneIcon,
  SearchIcon,
  ShieldHalfIcon,
  ShoppingCartIcon,
  Twitter,
  TwitterIcon,
  UserRound,
  UserRoundIcon,
  YoutubeIcon,
} from "lucide-react";
import { title } from "process";

const navbarListItems = [
  { id: crypto.randomUUID(), title: "profile", link: "#", icon: UserRoundIcon },
  {
    id: crypto.randomUUID(),
    title: "messages",
    link: "#",
    icon: MessageSquareTextIcon,
  },
  { id: crypto.randomUUID(), title: "orders", link: "#", icon: HeartIcon },
  { id: crypto.randomUUID(), title: "cart", link: "#", icon: ShoppingCartIcon },
];

const singleNav = [
  { id: crypto.randomUUID(), title: "All category" },
  { id: crypto.randomUUID(), title: "Hot offers" },
  { id: crypto.randomUUID(), title: "Gift boxes" },
  { id: crypto.randomUUID(), title: "Projects" },
  { id: crypto.randomUUID(), title: "Menu items" },
];

const heroCategoriesList = [
  { id: crypto.randomUUID(), title: "Automobiles" },
  { id: crypto.randomUUID(), title: "Clothes and wears" },
  { id: crypto.randomUUID(), title: "Home interiors" },
  { id: crypto.randomUUID(), title: "Computer and techs" },
  { id: crypto.randomUUID(), title: "Tools and equipments" },
  { id: crypto.randomUUID(), title: "Sport and outdoors" },
  { id: crypto.randomUUID(), title: "Animal and pets" },
  { id: crypto.randomUUID(), title: "Machinery tools" },
  { id: crypto.randomUUID(), title: "More Category" },
];

const heroContents = {
  title: "Latest trending",
  subTitle: "Electronic Items",
  btnText: "Learn More",
};

const sendQuotesContents = {
  title: "An easy way to send request to all suppliers",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quisquam soluta maiores, incidunt aspernatur reiciendis obcaecati officia ab neque saepe iure ipsa dolore atque nostrum! Dolorem vero officia magnam inventore.",
};

const ourExtraServices = [
  {
    id: crypto.randomUUID(),
    title: "source from industry hubs",
    image: "/public/assets/image108.png",
    icon: SearchIcon,
  },
  {
    id: crypto.randomUUID(),
    title: "customize your products",
    image: "/public/assets/image104.png",
    icon: BoxesIcon,
  },
  {
    id: crypto.randomUUID(),
    title: "fast, reliable shipping by ocean or air",
    image: "/public/assets/image106.png",
    icon: PlaneIcon,
  },
  {
    id: crypto.randomUUID(),
    title: "product monotoring and inspection",
    image: "/public/assets/image106.png",
    icon: ShieldHalfIcon,
  },
];

const suppliersByRegion = [
  {
    id: crypto.randomUUID(),
    title: "Arabic Emirates",
    linkTitle: "shopname.ae",
    link: "#",
    flags: "/assets/flags/dubai.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Australia",
    linkTitle: "shopname.ae",
    link: "#",
    flags: "/assets/flags/australia.png",
  },
  {
    id: crypto.randomUUID(),
    title: "United States",
    linkTitle: "shopname.ae",
    link: "#",
    flags: "/assets/flags/usa.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Russia",
    linkTitle: "shopname.ae",
    link: "#",
    flags: "/assets/flags/russia.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Italy",
    linkTitle: "shopname.ae",
    link: "#",
    flags: "/assets/flags/itlay.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Arabic Emirates",
    linkTitle: "shopname.ae",
    link: "#",
    flags: "/assets/flags/scotland.png",
  },
  {
    id: crypto.randomUUID(),
    title: "France",
    linkTitle: "shopname.ae",
    link: "#",
    flags: "/assets/flags/france.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Arabic Emirates",
    linkTitle: "shopname.ae",
    link: "#",
    flags: "/assets/flags/dubai.png",
  },
  {
    id: crypto.randomUUID(),
    title: "China",
    linkTitle: "shopname.ae",
    link: "#",
    flags: "/assets/flags/china.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Great Bretain",
    linkTitle: "shopname.ae",
    link: "#",
    flags: "/assets/flags/england.png",
  },
];

const subscriptionNewsletter = {
  title: "Subscribe on our newsletter",
  description:
    "Get daily news on upcomming offers from many suppliers all over the world",
};

const footerDescription =
  "Best information about the best products and services.";

const footerSocials = [
  {
    id: crypto.randomUUID(),
    name: "Facebook",
    link: "https://www.facebook.com/",
    icon: FacebookIcon,
    title: "Facebook",
  },
  {
    id: crypto.randomUUID(),
    name: "Twitter",
    link: "https://twitter.com/",
    icon: TwitterIcon,
    title: "Twitter",
  },
  {
    id: crypto.randomUUID(),
    name: "LinkedIn",
    link: "https://www.linkedin.com/",
    icon: LinkedinIcon,
    title: "LinkedIn",
  },
  {
    id: crypto.randomUUID(),
    name: "Instagram",
    link: "https://www.instagram.com/",
    icon: InstagramIcon,
    title: "Instagram",
  },
  {
    id: crypto.randomUUID(),
    name: "YouTube",
    link: "https://www.youtube.com/",
    icon: YoutubeIcon,
    title: "YouTube",
  },
];

const footerLinksAbout = [
  { id: crypto.randomUUID(), name: "About Us", link: "#", title: "About Us" },
  {
    id: crypto.randomUUID(),
    name: "Find Store",
    link: "#",
    title: "Find Store",
  },
  {
    id: crypto.randomUUID(),
    name: "Categories",
    link: "#",
    title: "Categories",
  },
  { id: crypto.randomUUID(), name: "Blogs", link: "#", title: "Blogs" },
];

const footerLinksPartnership = [
  { id: crypto.randomUUID(), name: "About Us", link: "#", title: "About Us" },
  {
    id: crypto.randomUUID(),
    name: "Find Store",
    link: "#",
    title: "Find Store",
  },
  {
    id: crypto.randomUUID(),
    name: "Categories",
    link: "#",
    title: "Categories",
  },
  { id: crypto.randomUUID(), name: "Blogs", link: "#", title: "Blogs" },
];

const footerLinksInformation = [
  {
    id: crypto.randomUUID(),
    name: "Help Center",
    link: "#",
    title: "Help Center",
  },
  {
    id: crypto.randomUUID(),
    name: "Money Refund",
    link: "#",
    title: "Money Refund",
  },
  { id: crypto.randomUUID(), name: "Shipping", link: "#", title: "Shipping" },
  {
    id: crypto.randomUUID(),
    name: "Contact Us",
    link: "#",
    title: "Contact Us",
  },
];

const footerLinksForUsers = [
  { id: crypto.randomUUID(), name: "Login", link: "#", title: "Login" },
  { id: crypto.randomUUID(), name: "Register", link: "#", title: "Register" },
  { id: crypto.randomUUID(), name: "Settings", link: "#", title: "Settings" },
  { id: crypto.randomUUID(), name: "My Orders", link: "#", title: "My Orders" },
];

export {
  navbarListItems,
  singleNav,
  heroCategoriesList,
  heroContents,
  sendQuotesContents,
  ourExtraServices,
  suppliersByRegion,
  subscriptionNewsletter,
  footerDescription,
  footerSocials,
  footerLinksAbout,
  footerLinksPartnership,
  footerLinksInformation,
  footerLinksForUsers,
};
