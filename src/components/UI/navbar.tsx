"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import { siteConfig } from "../../config/site";
import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
import clsx from "clsx";

export const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false); // Hydration fix
  // const [queryValue, setQueryValue] = useState<string | null>(null);

  // Hydration error handling
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fetch query param directly within the component (after hydration)
  // const searchParams = useSearchParams();
  // const queryValueFromURL = searchParams?.get("key");

  // Set the query value after the component is mounted
  // useEffect(() => {
  //   setQueryValue(queryValueFromURL);
  // }, [queryValueFromURL]);

  if (!isMounted) {
    return null; // Render nothing during SSR
  }

  return (
    <NextUINavbar>
      <NavbarContent className="basis-1/5 sm:basis-full " justify="end">
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
    </NextUINavbar>
  );
};
