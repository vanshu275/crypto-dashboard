import { CgProfile } from "react-icons/cg";
import { useLocation } from "react-router-dom";

const titles = {
  "/": "Dashboard",
  "/transactions": "Transactions",
  "/contact": "Contact",
};

const ProfileNav = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-full flex justify-between items-center py-3 pl-10 pr-28 ">

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
