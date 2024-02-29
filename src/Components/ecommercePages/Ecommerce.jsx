import React from "react";
import { Card, CardContent } from "../ui/card";
import { CircleUser, ShoppingBag } from "lucide-react";
import Marquee from "react-fast-marquee";

const Ecommerce = () => {
  return (
    <>
      {/* <div class="container">
        <div class=" my-10">
          <h1 class=" items-center justify-center flex text-6xl poppins-bold text-center hover:text-primary cursor-pointer">
            Eco.
          </h1>
          <p class=" items-center justify-center flex text-sm poppins-light text-center">
            This is a boilerplate sample for ecommerce websites.
          </p>
        </div>

        <div class="flex flex-col lg:flex-row h-auto lg:h-16 items-center justify-between px-4 lg:px-8 bg-zinc-950">
          <h1 class="text-white poppins-bold text-3xl hover:text-primary cursor-pointer">
            eco.
          </h1>

          <nav class="flex items-center space-x-4 lg:space-x-10 mx-6 my-5">
            <a
              class="text-sm font-medium text-white transition-colors hover:text-primary poppins-regular"
              href="/examples/dashboard"
            >
              Mens
            </a>
            <a
              class="text-sm font-medium text-white  transition-colors hover:text-primary poppins-regular"
              href="/examples/dashboard"
            >
              Womens
            </a>
            <a
              class="text-sm font-medium text-white transition-colors hover:text-primary poppins-regular"
              href="/examples/dashboard"
            >
              Kids
            </a>
            <a
              class="text-sm font-medium text-white transition-colors hover:text-primary poppins-regular"
              href="/examples/dashboard"
            >
              Gadgets
            </a>
            <a
              class="text-sm font-medium text-white transition-colors hover:text-primary poppins-regular"
              href="/examples/dashboard"
            >
              <ShoppingBag />
            </a>
            <a
              class="text-sm font-medium text-white transition-colors hover:text-primary poppins-regular"
              href="/examples/dashboard"
            >
              <CircleUser />
            </a>
          </nav>
        </div>
        <div className="flex justify-center my-1">
          <Marquee speed={150} gradient={false}>
            <div className=" rounded-md flex ml-1 cursor-pointer text-md p-2  bg-zinc-950 poppins-light hover:bg-primary">
              <Card class=" items-center ">
                <CardContent class="flex flex-row space-x-5 ">
                  <p className=" text-sm poppins-light text-white">
                    "🎉 New Arrivals Alert! Discover the Latest Trends and
                    Must-Have Items for the Season. Shop Now and Stay Ahead of
                    the Fashion Curve!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </Marquee>
        </div>
      </div> */}
      <div class="flex flex-col lg:flex-row h-auto lg:h-16 items-center justify-between px-4 lg:px-8 bg-zinc-950">
        <h1 class="text-white poppins-bold text-3xl hover:text-primary cursor-pointer">
          eco.
        </h1>

        <nav class="flex items-center space-x-4 lg:space-x-10 mx-6 my-5">
          <a
            class="text-sm font-medium text-white transition-colors hover:text-primary poppins-regular"
            href="/examples/dashboard"
          >
            Mens
          </a>
          <a
            class="text-sm font-medium text-white  transition-colors hover:text-primary poppins-regular"
            href="/examples/dashboard"
          >
            Womens
          </a>
          <a
            class="text-sm font-medium text-white transition-colors hover:text-primary poppins-regular"
            href="/examples/dashboard"
          >
            Kids
          </a>
          <a
            class="text-sm font-medium text-white transition-colors hover:text-primary poppins-regular"
            href="/examples/dashboard"
          >
            Gadgets
          </a>
          <a
            class="text-sm font-medium text-white transition-colors hover:text-primary poppins-regular"
            href="/examples/dashboard"
          >
            <ShoppingBag />
          </a>
          <a
            class="text-sm font-medium text-white transition-colors hover:text-primary poppins-regular"
            href="/examples/dashboard"
          >
            <CircleUser />
          </a>
        </nav>
      </div>
      <div className="flex justify-center my-1">
        <Marquee speed={150} gradient={false}>
          <div className=" rounded-md flex ml-1 cursor-pointer text-md p-2  bg-zinc-950 poppins-light hover:bg-primary">
            <Card class=" items-center ">
              <CardContent class="flex flex-row space-x-5 ">
                <p className=" text-sm poppins-light text-white">
                  "🎉 New Arrivals Alert! Discover the Latest Trends and
                  Must-Have Items for the Season. Shop Now and Stay Ahead of the
                  Fashion Curve!"
                </p>
              </CardContent>
            </Card>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Ecommerce;
