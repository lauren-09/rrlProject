import React, { useState } from "react";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "What we do",
      icon: <FaAngleDown size={10} class="ml-1" />,
      dropdown: true,
    },
    {
      id: 3,
      link: "About Us",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];
  const handleMouseEnter = () => {
    setNav(true);
  };

  const handleMouseLeave = () => {
    setNav(false);
  };
  return (
    <div class="flex flex-row m-10">
      <h1 class="text-[#0A0908]  decoration-[#22333B] w-full font-bold text-3xl basis-1/2 ">
        Sideline Company
      </h1>

      {/* Menu */}
      <ul class="hidden md:flex flex-row space-x-4">
        {links.map(({ id, link, icon, dropdown }) => (
          <li
            key={id}
            class="capitalize font-large text-[#0A0908] hover:scale-105 duration-100 flex items-center hover:bg-yellow-400"
            onMouseEnter={dropdown ? handleMouseEnter : undefined}
            onMouseLeave={dropdown ? handleMouseLeave : undefined}
          >
            <Link to={link} smooth duration={1000}>
              {link}
            </Link>
            {icon && icon}
          </li>
        ))}
      </ul>

      {/* Hamburger*/}
      {/* <div onClick={() => setNav(!nav)} class='cursor-pointer pr-4 z-10 text-[#1D1D20] md:hidden'>
              {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
          </div>
          {nav && (
              <ul class='absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-white text-[#1D1D20]'>
              {links.map(({id, link}) =>(
                      <li key={id} class='text-4xl py-6 px-4 capitalize font-light text-white hover:scale-105 duration-200' >{link} </li>
                  ))}
              </ul>
          )} */}
    </div>
  );
};

export default Navbar;
