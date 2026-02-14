import { useRef } from "react";

import Protfolio from "../../components/dashboard/Protfolio";
import Balance from "../../components/dashboard/Balance";
import LearnMore from "../../components/dashboard/LearnMore";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Dashboard = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(container.current.children, {
      opacity: 0,
      duration: 2,
      delay: 1,
      stagger: 0.9,
      ease: "power2.out",
      scale: 0,
    });
  });

  return (
    <div
      ref={container}
      className="grid grid-cols-12 grid-rows-10 gap-3 w-full h-full px-30 pt-10 pb-24 bg-[#F3F3F7] overflow-hidden"
    >
      <Protfolio />
      <Balance />
      <LearnMore />
    </div>
  );
};

export default Dashboard;
