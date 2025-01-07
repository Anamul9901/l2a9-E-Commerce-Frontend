"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { Logo } from "../icons";
import { siteConfig } from "../../config/site";
import { ThemeSwitch } from "../theme-switch";
import NavberDropdown from "./dashboard/navberDropdown";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useAppSelector } from "@/src/redux/hooks";
import { selectCurrentUser } from "@/src/redux/features/auth/authSlice";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const SearchNavbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { user } = useAppSelector(selectCurrentUser);
  //   const router = useRouter();

  // For hydration error handle
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // const handleSearch = () => {
  //   // router.push(`/products?search=${searchText}`)
  // };

  if (!isMounted) {
    return null;
  }

  return (
    <NextUINavbar maxWidth="xl" height={100} >
      {/* Navbar Content */}
      <NavbarContent className="sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-xl text-inherit">
              AnSa<span className="text-teal-500">Mart</span>
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Search Input */}
      <div className="items-center text-center space-y-2">
        <div>
        <NavbarContent className="sticky basis-1/5 sm:basis-full " justify="end">
        <ul className="hidden md:inline-block gap-4 justify-end ml-2">
          <div className="flex gap-4">
            {siteConfig.navItems.map((item) => {
              // const isActive = queryValue === item?.href; // Check if the query value matches the item's href
              return (
                <NavbarItem key={item?.href}>
                  <NextLink
                    // className={clsx(
                    //   linkStyles({ color: "foreground" }),
                    //   "data-[active=true]:text-teal-500 data-[active=true]:font-medium",
                    //   isActive ? "text-teal-500 font-bold" : "text-foreground" // Apply active class based on `isActive`
                    // )}
                    // color="foreground"
                    // href={`${item?.href}?key=${item?.href}`}  // Add query parameter to the URL
                    href={item?.href}
                  >
                    {item?.label}
                  </NextLink>
                </NavbarItem>
              );
            })}
          </div>
        </ul>
      </NavbarContent>
        </div>
      <div className="hidden md:block">
        <div className="flex flex-1 justify-center items-center px-4">
          <div className="flex w-full max-w-2xl items-center bg-gray-100 rounded-full shadow-md">
            <input
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="flex-1 px-6 py-1 text-lg text-gray-700 bg-transparent border-none outline-none focus:ring-2 focus:ring-teal-500 rounded-l-full"
            />
            <Link
              href={`/products?search=${searchText}`}
              className="px-6 py-1 bg-teal-500 text-white text-lg font-semibold rounded-r-full hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Search
            </Link>
          </div>
        </div>
      </div>
      </div>

      {/* End Content */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="flex justify-center items-center gap-3">
          <a href="/cart" className="rounded-full p-1">
            <HiMiniShoppingCart className="text-xl text-default-700" />
          </a>
          <ThemeSwitch />
          <div>{user ? <NavberDropdown /> : <a href="/login">Login</a>}</div>
        </NavbarItem>
        <div className="md:hidden w-[30px] h-[30px]">
          <NavbarMenuToggle className="w-full h-full" />
        </div>
      </NavbarContent>

      {/* Navbar Menu */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item?.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
