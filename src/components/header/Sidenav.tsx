import { Link } from "react-router-dom";
import menuData from "../../dataFolter/navmenus";

function Sidenav() {
  return (
    <>
      <div className={`menuContainer c-common-heightScroll`}>
        <ul className="c-flex-column">
          {menuData.map((menuItem) => (
            <li key={menuItem.id} className="c-v-center c-height-50">
              <Link to={menuItem.url} className="c-flex c-gap10">
                <menuItem.icon />
                <span className={`menu_${menuItem.menuName}`}>
                  {menuItem.menuName}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidenav;
