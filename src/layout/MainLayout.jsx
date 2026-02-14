import SideNav from "../components/SideNav";
import ProfileNav from "../components/ProfileNav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="bg-[#ffffff] min-h-screen w-screen">
      <div className="flex">

        <SideNav />

        <div className="flex flex-col w-[84%]">

          <ProfileNav />

          {/* YAHI PE PAGE CHANGE HOGA */}
            <Outlet />
  

        </div>

      </div>
    </main>
  );
};

export default MainLayout;
