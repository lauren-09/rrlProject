import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className=" bg-primary h-[800px] bg-no-repeat bg-cover bg-center py-16">
      <div className="container mx-auto flex justify-between h-full">
        <div className="flex flex-col justify-center mr-20">
          <div className="flex items-center">
            <div className=" w-20 h-[2px] mr-3 bg-foreground"></div>
            <div className="poppins-regular text-2xl uppercase">SALE</div>
          </div>
          <h1 className=" text-[60px] poppins-regular leading-[1.1] mb-4">
            Everything 50% off <br />
            <span className="poppins-semibold">Men's</span>
          </h1>
          <Link
            to={"/ecommerce"}
            className="self-start uppercase poppins-bold border-b-2 border-foreground hover:text-white"
          >
            Dive in
          </Link>
        </div>
        <div className="hidden lg:block my-auto">
          <img
            className=" rounded-xl hover:scale-110 duration-1000 cursor-pointer"
            src="https://plus.unsplash.com/premium_photo-1708633003240-569a6135deaa?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
