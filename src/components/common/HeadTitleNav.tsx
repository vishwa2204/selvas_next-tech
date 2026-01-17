import { FaRegSave } from "react-icons/fa";
import { useHeaderActionStore } from "../../store/PageTitleStore";
import { CiHome } from "react-icons/ci";
import { Link } from "react-router-dom";

function HeadTitleNav() {
  const { headTitle, saveAction, onSave } = useHeaderActionStore();
  return (
    <div className="c-height-30 c-pa c-t70px c-l0 c-z999 c-pad c-max-width c-x-between c-v-center c-white">
      <div className="pageTitle left-side-nav c-cell-3 c-v-center c-gap5">
        <span className="cs-fs-sm c-cur">
          <Link to="/">
            <CiHome />
          </Link>
        </span>
        / {headTitle}
      </div>
      {saveAction && (
        <div className="pageEventActions right-side-nav c-cell-1 c-x-fe">
          <button className="saveBtn c-cur" onClick={onSave}>
            <FaRegSave />
          </button>
        </div>
      )}
    </div>
  );
}

export default HeadTitleNav;
