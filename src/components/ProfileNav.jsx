import { CgProfile } from "react-icons/cg";
import { useLocation } from "react-router-dom";

import gsap from "gsap";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const titles = {
  "/": "Dashboard",
  "/transactions": "Transactions",
  "/contact": "Contact",
};

const ProfileNav = () => {
  useGSAP(() => {
    gsap.from(container.current, {
      y: "500%",
      opacity: 1,
      delay: 1,
      zIndex: 2,
      duration: 3,
      ease: "power4.out",
      overflow: "hidden",
    });
  });

  const container = useRef(null);
  const { pathname } = useLocation();

  return (
    <div
      ref={container}
      className="w-full flex justify-between items-center py-3 pl-10 pr-28 "
    >
      {/* Dynamic Page Title */}
      <h1 className="font-medium text-[1.6rem] text-[#171616]">
        {titles[pathname]}
      </h1>

      {/* Profile Icon */}
      <CgProfile className="text-4xl opacity-70 hover:opacity-100 cursor-pointer transition" />
    </div>
  );
};

export default ProfileNav;
