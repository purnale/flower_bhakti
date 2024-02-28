import { Link } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import dp from "../assets/dp.jpg";

const SideNav = () => {
  return (
    <Sidebar aria-label="Sidebar with logo branding example">
      <Sidebar.Logo as={Link} to="#" img={dp} imgAlt="Flowbite logo">
        Bhakti
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item as={Link} to="/" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item as={Link} to="/dashbord/addflower" icon={HiViewBoards}>
            Add Flower
          </Sidebar.Item>
          {/* <Sidebar.Item as={Link} to="/dashbord/editflower" icon={HiInbox}>
            Edit Flower
          </Sidebar.Item> */}
          <Sidebar.Item as={Link} to="/dashbord/manageflower" icon={HiUser}>
            Manage Flower
          </Sidebar.Item>

          <Sidebar.Item as={Link} to="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item as={Link} to="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideNav;
