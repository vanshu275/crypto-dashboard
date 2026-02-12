import React from 'react'

const SideNav = () => {
  return (
    <div className="w-[20vw] h-screen flex flex-col justify-between pt-12 px-7 pb-6">
      <div className="links flex flex-col gap-10">
        <div className="home text-[#5f02d9] font-medium text-[1.2rem]">
            @DOSOMECODING
        </div>
        <div className="link flex flex-col gap-3">
            <div className="dashboard flex items-center gap-3 font-bold bg-[#f2f2f2] rounded-lg p-2 w-[80%]">
                <img src="square-grid.png" alt="" />
                <h1>Dashboard</h1>
            </div>
            <div className="transaction flex  items-center gap-3 p-2 w-[80%] font-medium text-[#5A5959]">
                <img src="arrow.png" alt="" />
                <h1>Transactions</h1>

            </div>
        </div>

      </div>

      <div className="support flex items-center gap-3">
        <img src="support.png" alt="" />
        <h1 className='font-bold text-lg'>Support</h1>
      </div>
    </div>
  )
}

export default SideNav
