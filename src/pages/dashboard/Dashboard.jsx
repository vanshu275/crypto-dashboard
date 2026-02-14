import Protfolio from "../../components/dashboard/Protfolio";
import Balance from "../../components/dashboard/Balance";
import LearnMore from "../../components/dashboard/LearnMore";

import { MdInfoOutline } from "react-icons/md";
import { HiArrowUpRight } from "react-icons/hi2";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-10 gap-3 w-full h-full px-30 pt-10 pb-24 bg-[#F3F3F7]">
      <Protfolio />

      <Balance />

      <LearnMore />
   
    </div>
  );
};

export default Dashboard;
