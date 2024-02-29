import React from "react";
import {
  TiSocialFacebookCircular,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

const Footer = () => {
  return (
    <footer class=" bg-slate-950 text-white">
      <div class="md:flex md:justify-between md:items-center sm:px-12 px-2 bg-[#0A0908] py-5">
        {" Skelenian Inc. "}
        <ul class="flex flex-row">
          <li>
            <TiSocialFacebookCircular
              size={30}
              class=" hover:text-yellow-400"
            />
          </li>
          <li>
            <TiSocialTwitter size={30} class="hover:text-yellow-400" />
          </li>
          <li>
            <TiSocialInstagram size={30} class="hover:text-yellow-400" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
