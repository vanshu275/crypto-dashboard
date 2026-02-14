import { NavLink } from "react-router-dom";
import { MdSupportAgent } from "react-icons/md";
import { IoGrid } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";

const links = [
  {
    name: "Dashboard",
    path: "/",
    icon: <IoGrid />,
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon: <GoArrowSwitch />,
  },
];

const SideNav = () => {
  return (
    <div className="w-[17%] h-screen flex flex-col justify-between pt-12 px-7 pb-6">

      <div className="flex flex-col gap-10">

        <h2 className="text-[#5f02d9] font-medium text-[1.2rem] select-none">
          @DOSOMECODING
        </h2>

        <div className="flex flex-col gap-3">

          {links.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-lg transition
                ${
                  isActive
                    ? "bg-[#e3e3e3] text-black font-bold"
                    : "text-[#9C9898] font-medium hover:bg-[#f0f0f0]"
                }`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}

        </div>
      </div>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `flex items-center gap-2 text-[1.1rem] transition
          ${
            isActive
              ? "text-black font-bold"
              : "text-[#646363] hover:text-black"
          }`
        }
      >
        <MdSupportAgent className="text-3xl" />
        Contact
      </NavLink>

    </div>
  );
};

export default SideNav;
