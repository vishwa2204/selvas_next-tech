import { FaChartLine } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SiGooglemarketingplatform } from "react-icons/si";
import { SiAffinitydesigner } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const NavMenus = [
  {
    id: 1,
    menuName: "Home",
    icon: CiHome,
    url: "/",
  },
  {
    id: 2,
    menuName: "About us",
    icon: FaChartLine,
    url: "/aboutPage",
  },
  {
    id: 3,
    menuName: "Web Development",
    icon: MdDashboard,
    url: "/",
  },
  {
    id: 4,
    menuName: "Graphic Designing",
    icon: SiAffinitydesigner,
    url: "/",
  },
  {
    id: 5,
    menuName: "Digital Marketing",
    icon: SiGooglemarketingplatform,
    url: "/",
  },
  {
    id: 6,
    menuName: "Contact Us",
    icon: IoSettingsOutline,
    url: "/",
  },
  {
    id: 7,
    menuName: "Account Management",
    icon: CgProfile,
    url: "/",
  },
  {
    id: 8,
    menuName: "Logout",
    icon: IoIosLogOut,
    url: "/",
  },
];

export default NavMenus;
