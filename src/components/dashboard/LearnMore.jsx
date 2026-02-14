import Button from "../../components/Button";

import { MdInfoOutline } from "react-icons/md";
import { HiArrowUpRight } from "react-icons/hi2";

const LearnMore = () => {
  return (
    <div className="col-span-12 row-span-2  rounded-xl flex items-center justify-between">
      {/* Part 1 */}
      <div className="bg-white w-[47%] h-full rounded-xl text-black flex flex-col gap-4 p-6">
        <Button text="Loans" width={"20%"} />
        <span>
          Learn more about Loans – Keep your Bitcoin, access it’s value without
          selling it
        </span>
      </div>

      {/* Part 2 */}
      <div className="bg-[#5f02d9] text-white w-[47%] h-full rounded-xl flex flex-col gap-4 p-6">
        <Button text="Contact" width={"25%"} variant="outline" />
        <span>
          Learn more about our real estate, mortgage, and corporate account
          services
        </span>
      </div>
    </div>
  );
};

export default LearnMore;
