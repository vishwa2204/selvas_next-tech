import Logo from "../../assets/images/logo/logo-light.png";
import Profile from "../../assets/images/png/boy.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaFileLines } from "react-icons/fa6";
import { useState } from "react";
import Model from "../common/Model";
import { Link } from "react-router-dom";
import { useDarkStore } from "../../store/darkmodeStore";

type ModType = "form" | "text" | "warning";
type HeaderProps = {
  onMenuClick: () => void;
  menuOpen: boolean;
};

function Hearder({ onMenuClick, menuOpen }: HeaderProps) {
  // zustand
  const { switchDark, toggleDark } = useDarkStore();
  /////////
  const [showModel, setShowModel] = useState(false);
  const [modelType, setModelType] = useState<ModType>("text");

  const modalClasses = {
    form: "modal-form",
    text: "modal-text",
    warning: "modal-warning",
  };

  const openModel = (type: ModType) => {
    setShowModel(true);
    setModelType(type);
  };
  return (
    <>
      <header className="header c-primary c-height-auto c-pad c-flex c-x-between .c-z999 c-pr">
        <div className="logoAndMenuContainer c-max-height-50 c-min-height-50 c-x-fs c-v-center">
          <span
            className={`menuBtn c-cur c-btn c-m-radius c-rmar c-sq30 c-center ${
              menuOpen ? "c-hide" : "c-block"
            }`}
            id="menuBtnClk"
            onClick={onMenuClick}
          >
            <RxHamburgerMenu className="cs-fs-mid c-bold-l  c-white" />
          </span>
          <span
            className={`menuBtn c-cur c-btn c-m-radius c-rmar c-sq30 c-center ${
              !menuOpen ? "c-hide" : "c-block"
            }`}
            onClick={onMenuClick}
          >
            <IoMdClose className="cs-fs-mid c-bold-l  c-white" />
          </span>
          <span className="c-min-width-90 c-max-width-100 ">
            <img
              src={Logo}
              className="c-max-width c-max-height c-object-contain"
              alt="LOGO"
            />
          </span>
        </div>
        <div className="side-commonMenus c-flex c-center">
          <span
            className={`menuBtn c-cur c-btn c-m-radius c-rmar c-sq30 c-center ${
              switchDark ? "c-hide" : "c-block"
            }`}
            title="Switch Dark Modes"
            onClick={toggleDark}
          >
            <MdDarkMode className="cs-fs-mid c-bold-l  c-white" />
          </span>
          <span
            className={`menuBtn c-cur c-btn c-m-radius c-rmar c-sq30 c-center ${
              !switchDark ? "c-hide" : "c-block"
            }`}
            title="Switch Light Modes"
            onClick={toggleDark}
          >
            <MdLightMode className="cs-fs-mid c-bold-l  c-white" />
          </span>
          <span
            className={`menuBtn c-cur c-btn c-m-radius c-rmar c-sq30 c-center`}
            title="LOG"
          >
            <FaFileLines className="cs-fs-mid c-bold-l  c-white" />
          </span>
          <span
            className={`menuBtn c-cur c-m-radius c-sq30 c-center c-bg-white`}
            title="Account"
            onClick={() => openModel("text")}
          >
            <CgProfile className="cs-fs-mid c-bold-l" />
          </span>
        </div>

        <Model
          visible={showModel}
          onClose={() => setShowModel(false)}
          className={`${
            modalClasses[modelType]
          } c-cell-3 c-height-90 c-pa c-z999 ${
            showModel
              ? "c-t100 c-r1 c-box-shadow1 c-sx-radius"
              : "c-t100 c-l100"
          } mobile-resmodel `}
          heading="Account Details"
        >
          {
            <div className="modelContent-container headerModel c-cell-10 c-pad">
              <div className="accoutHolder c-flex c-gap10">
                <div className="accountLogo">
                  <Link to="#">
                    <img
                      src={Profile}
                      alt=" Account Holder"
                      className="c-sq40"
                    />
                  </Link>
                </div>
                <div className="accountHolderDetails c-flex-column">
                  <span className="accountHolderName c-disable">Vishwa</span>
                  <Link to="#" className="cs-fs-sx c-blue">
                    Account Settings
                  </Link>
                </div>
              </div>
            </div>
          }
        </Model>
      </header>
    </>
  );
}

export default Hearder;
