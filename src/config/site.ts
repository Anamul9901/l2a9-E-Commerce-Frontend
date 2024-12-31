export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "AnSa Mart - Ecommerce Website",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Products",
      href: "products",
    },
    {
      label: "About",
      href: "about",
    },
    {
      label: "Contact Us",
      href: "contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Products",
      href: "/products",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
    {
      label: "",
      href: "/",
    },
  ],
  links: {},
};
