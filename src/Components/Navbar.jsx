import React, { useState } from "react";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <header>
      <div class=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex items-center text-gray-900 mb-4 md:mb-0">
          <Link class=" font-bold text-lg  poppins-semibold" to="/">
            Skelenian Inc.
          </Link>
        </a>
        <div class="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center cursor-pointer poppins-regular mr-5">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" class=" text-sm hover:text-primary">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>What we do</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className=" w-[300px] gap-5 p-4">
                    <li>
                      <Link
                        to="/ecommerce"
                        class="poppins-regular text-sm hover:text-primary"
                      >
                        Ecommerce Website
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
          <a class="mr-5 hover:text-gray-900">Second Link</a>
          <a class="mr-5 hover:text-gray-900">Third Link</a>
          <a class="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav> */}
        {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}
      </div>
    </header>
    // <div class="flex flex-row m-10">
    //   <Link
    //     class="text-[#0A0908]  decoration-[#22333B] w-full font-bold text-3xl basis-1/2 "
    //     to="/"
    //   >
    //     Skelenian Inc.
    //   </Link>
    //   <NavigationMenu>
    //     <NavigationMenuList>
    //       <NavigationMenuItem>
    //         <NavigationMenuTrigger>What we do</NavigationMenuTrigger>
    //         {/* <NavigationMenuContent>
    //           <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
    //             <li className="row-span-3">
    //               <NavigationMenuLink></NavigationMenuLink>
    //             </li>
    //             <ListItem href="/docs" title="Content Management System">
    //               Provide Content Management System to your needs.
    //             </ListItem>
    //             <ListItem href="/docs/installation" title="Fast and Reliable">
    //               How to install dependencies and structure your app.
    //             </ListItem>
    //             <ListItem
    //               href="/docs/primitives/typography"
    //               title="Smooth Service"
    //             >
    //               Styles for headings, paragraphs, lists...etc
    //             </ListItem>
    //           </ul>
    //         </NavigationMenuContent> */}
    //       </NavigationMenuItem>
    //       <NavigationMenuItem>
    //         <NavigationMenuTrigger>Demos</NavigationMenuTrigger>
    //         <NavigationMenuContent>
    //           <ul className="grid w-[300px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[300px]">
    //             <li>
    //               <Link to="/ecommerce" class="text-black hover:text-primary">
    //                 <strong>Ecommerce Website</strong>
    //               </Link>
    //             </li>
    //           </ul>
    //         </NavigationMenuContent>
    //       </NavigationMenuItem>
    //       {/* <NavigationMenuItem>
    //         <Link href="/docs">
    //           <NavigationMenuLink>Documentation</NavigationMenuLink>
    //         </Link>
    //       </NavigationMenuItem> */}
    //     </NavigationMenuList>
    //   </NavigationMenu>
    // </div>
  );
};

export default Navbar;
