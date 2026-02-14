import Button from "../../components/Button";

import { MdInfoOutline } from "react-icons/md";

const Protfolio = () => {
  return (
     
      <div className="col-span-12 row-span-1 bg-white rounded-xl flex justify-between items-center px-10 ">
        {/* protfolio */}
        <div className="total-protfolio flex flex-col">
          <span className="text-[#525252] text-[16px] flex items-center gap-2">
            Total Portfolio Value <MdInfoOutline />
          </span>
          <span className="font-medium text-[20px] flex items-center gap-1">
            ₹ 112,312.24
          </span>
        </div>

        {/* wallet */}
        <div className=" flex  gap-2 flex-col">
          <div className="text-[#525252] text-[16px] ">
            <span>Wallet Balances</span>
          </div>
          <div className="balance-value flex items-center gap-6">
            <div className="btc font-medium text-[20px] flex items-center gap-2">
              <span>22.39401000</span>
              <span className="bg-[#e9e9e9] rounded-2xl text-[10px] py-2 px-3 text-[#525252]">
                BTC
              </span>
            </div>
            <div className="inr btc font-medium text-[20px] flex items-center gap-2">
              <span>₹ 1,300.00</span>
              <span className="bg-[#e9e9e9] rounded-2xl text-[10px] py-2 px-3 text-[#525252]">
                INR
              </span>
            </div>
          </div>
        </div>

        {/* depo-withdraw buttons */}
        <div className="depo-with flex items-center gap-4">
          <Button text="Deposit" />
          <Button text="Withdraw" />
        </div>
      </div>
    
  );
};

export default Protfolio;
