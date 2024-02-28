import SideNav from "./SideNav.jsx";
import { Outlet } from "react-router-dom";

const DashbordLyout = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <SideNav />

      <Outlet />
    </div>
  );
};

export default DashbordLyout;
