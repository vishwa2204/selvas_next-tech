import { Routes, Route } from "react-router-dom";
import Header from "../components/header/Hearder";
import Sidenav from "../components/header/Sidenav";
import Landing from "../views/app_viz_v25/Landing";
import ChartCreation from "../views/app_viz_v25/ChartCreation";
import HeadTitleNav from "../components/common/HeadTitleNav";
import { useState } from "react";
import { useDarkStore } from "../store/darkmodeStore";
import BannerComponets from "../components/common/BannerComponets";
function Routers() {
  const [menusOpen, setMenusOpen] = useState(false);
  // zustand
  const { switchDark } = useDarkStore();
  //////////////
  const openMenus = () => {
    setMenusOpen((previousMenu) => !previousMenu);
  };
  return (
    <>
      <Header onMenuClick={openMenus} menuOpen={menusOpen} />
      <HeadTitleNav />
      <BannerComponets />
      <div
        className={`sideNavContainer c-common-height c-transition-e hide-scrollbar c-t70px c-z999 ${
          menusOpen
            ? "c-cell-015 c-pa c-tn50 c-l0 c-box-shadow2"
            : "c-cell-0 c-pa c-tn50 c-ln100"
        }  c-lpad ${switchDark ? "c-primary2" : "c-bg-white"} mobile-resNav`}
      >
        <Sidenav />
      </div>
      <div className="bodyContentContainer c-common-height c-flex c-x-between c-pr">
        <div
          className={`routesContainer c-pad c-transition-e hide-scrollbar ${
            menusOpen ? "c-cell-085" : "c-cell-10"
          } mobile-rescontent `}
        >
          <Routes>
            <Route index element={<Landing />} />
            <Route path="chartCreation" element={<ChartCreation />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Routers;
