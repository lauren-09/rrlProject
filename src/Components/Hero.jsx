import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-30 md:py-15 lg:py-40">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Collaborate with us... find out more here.{" "}
          <a href="#" className="font-semibold text-foreground">
            <span className="absolute inset-0" aria-hidden="true" />
            Read more <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Elevate Your Digital Presence Today
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Unlock your digital potential with our expert web development
          services, tailored to elevate your online presence and drive impactful
          results.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm bg-primary hover:bg-stone-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Let's Talk Business
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Explore more about us<span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
