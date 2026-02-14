import { useRef } from "react";
import Button from "../../components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Transactions = () => {
  const btnref = useRef(null);
  const contref = useRef(null);

  useGSAP(() => {
    gsap.from(btnref.current, {
      opacity: 0,
      delay: 1,
      duration: 1,
      scale:0
    });

    gsap.from(contref.current.children, {
      y:100,
      delay:1,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.inOut",
    })
  });

  const transactions = [
    {
      id: "HD82NA2H",
      date: "2022-06-09 07:06 PM",
      type: "INR Deposit",
      amount: "+ ₹81,123.10",
      status: "Pending",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-07 02:48 PM",
      type: "INR Withdraw",
      amount: "- ₹81,123.10",
      status: "Processing",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-04 09:21 AM",
      type: "Buy",
      amount: "+ 12.48513391 BTC",
      status: "Cancelled",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-03 01:32 PM",
      type: "Processing",
      amount: "- 0.36401628 BTC",
      status: "Completed",
    },
    {
      id: "HD82NA2H",
      date: "2022-01-03 11:32 PM",
      type: "Buy",
      amount: "- 0.36401628 BTC",
      status: "Completed",
    },
    {
      id: "HD82NA2H",
      date: "2022-08-13 01:50 PM",
      type: "Sell",
      amount: "+ 0.36401628 BTC",
      status: "Processing",
    },
  ];

  const statusColor = {
    Pending: "bg-gray-300 text-gray-700",
    Processing: "bg-yellow-200 text-yellow-700",
    Cancelled: "bg-red-200 text-red-700",
    Completed: "bg-green-200 text-green-700",
  };

  return (
    <div className="w-full h-full px-30 pt-10 pb-24 bg-[#F3F3F7] overflow-hidden flex items-end gap-6 flex-col">
      <div ref={btnref}>
        <Button  text={"Export CSV"} />
      </div>

      <div ref={contref} className="bg-white rounded-xl p-6 w-full min-h-[50vh]">
        <div className="grid grid-cols-8 mb-8 border-b-[#ebe5e5] border-b-2 pb-4">
          <span>All</span>
          <span>Deposit</span>
          <span>Withdraw</span>
          <span>Trade</span>
          <input
            type="text"
            placeholder="Search transactions..."
            className="col-span-4 bg-transparent outline-none border-none rounded-md px-3 py-2 text-sm text-right placeholder:text-right"
          />
        </div>
        {/* Header */}
        <div className="grid grid-cols-5 text-sm text-gray-400 pb-4 border-b-[#ebe5e5] border-b-2">
          <span>ID</span>
          <span>Date & Time</span>
          <span>Type</span>
          <span>Amount</span>
          <span>Status</span>
        </div>

        {/* Rows */}
        {transactions.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-5 items-center py-4  text-sm mt-2 font-medium overflow-y-hidden"
          >
            <span>{item.id}</span>
            <span>{item.date}</span>
            <span>{item.type}</span>

            <span
              className={`font-medium ${
                item.amount.startsWith("+") ? "text-green-600" : "text-red-500"
              }`}
            >
              {item.amount}
            </span>

            <span
              className={`px-3 py-1 rounded-full w-fit text-xs font-medium ${statusColor[item.status]}`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
