import Button from "../../components/Button";


import { HiArrowUpRight } from "react-icons/hi2";
import { RiBitCoinFill } from "react-icons/ri";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const Balance = () => {
  const data = [
    {
      id: 1,
      type: "deposit",
      title: "INR Deposit",
      amount: "+ ₹81,123.10",
      date: "2024-02-12",
      icon: <RiBitCoinFill  />,
    },
    {
      id: 2,
      type: "sell",
      title: "BTC Sell",
      amount: "+ 0.123456 BTC",
      date: "2024-02-11",
      icon: <RiMoneyDollarCircleFill  />,
    },
    {
      id: 3,
      type: "withdraw",
      title: "INR Withdraw",
      amount: "- ₹12,000",
      date: "2024-02-10",
      icon : <RiBitCoinFill  />
    },
  ];


  return (
    <div className="col-span-12 row-span-5 rounded-xl flex justify-between  gap-5">
      {/* Current Price  */}
      <div className="w-[47%] p-6 h-[43vh] rounded-2xl bg-white flex flex-col justify-between">
        {/* Current Section Top Section */}
        <div className="UpperSection flex justify-between  h-[35%]">
          <div>
            <span className="text-[#525252] text-[16px] flex items-center gap-2">
              Current Price
            </span>
            <span className="font-medium text-[20px] flex items-end gap-1">
              <span>₹26,670.25</span>
              <span className="flex text-[#62e082] items-center text-[16px] gap-1 font-bold gap-[3px]1">
                <HiArrowUpRight className=" ml-2 font-bold" />
                <span>0.04%</span>
              </span>
            </span>
          </div>

          <div className="btn-add-sell flex flex-col justify-between items-end">
            <div className="btn flex items-center gap-2">
              <Button text="Buy" />
              <Button text="Sell" />
            </div>

            <div className="time bg-[#f0f0f0] text-[10px] px-0.5 py-0.5 font-medium rounded-sm text-[#7e7e7e] flex items-center gap-4">
              <span className=" text-[12px] px-0.5 py-0.5">1H</span>
              <span className=" text-[12px] px-0.5 py-0.5">1D</span>
              <span className="text-[12px] px-0.5 py-0.5 bg-white rounded-sm  text-black">
                1W
              </span>
              <span className=" text-[12px] px-0.5 py-0.5">1m</span>
            </div>
          </div>
        </div>

        {/* Current Section Bottom  Section */}
        <div className="BottomSection">
          <img src="Graph.png" alt="" />
          <div className="flex text-[#525252] text-[12px] justify-between mt-2">
            <span>7:15 PM</span>
            <span>12:15 AM</span>
            <span>06:15 AM</span>
            <span>12:15 PM</span>
            <span>05:55 PM</span>
          </div>
        </div>
      </div>






      {/*  Recent Transactions */}
      <div className="w-[47%] h-[43vh] bg-white rounded-xl p-6 flex flex-col gap-4">
        <h2 className="font-medium text-lg text-[#525252] text-[16px]">Recent Transactions</h2>

        {data.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-3"
          >
            <div className="flex items-center gap-3">
              <div>
                {item.icon}
              </div>

              <div>
                <p className="font-normal text-[#383838] text-[18px]">{item.title}</p>
                <span className="text-xs text-gray-400 text-[14px]">{item.date}</span>
              </div>
            </div>

            <p className="font-medium text-[#383838]">{item.amount}</p>
          </div>
        ))}

       <Button text="View All Transactions" className="w-full mt-4" />
      </div>
    </div>
  );
};

export default Balance;
