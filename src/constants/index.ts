import {
  Facebook,
  FacebookIcon,
  HeartIcon,
  InstagramIcon,
  LinkedinIcon,
  MessageSquareTextIcon,
  ShoppingCartIcon,
  Twitter,
  TwitterIcon,
  UserRound,
  UserRoundIcon,
  YoutubeIcon,
} from "lucide-react";

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
  footerDescription,
  footerSocials,
  footerLinksAbout,
  footerLinksPartnership,
  footerLinksInformation,
  footerLinksForUsers,
};
