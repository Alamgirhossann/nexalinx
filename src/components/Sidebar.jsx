import { NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { links } from "../data/data";
import humburger from "../assets/Group 1000021834.png";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor, currentMode } =
    useStateContext();
  const activeLink =
    "flex items-center gap-5 ps-4 pt-3 pb-2.5 border-l-4 border-gray-100 text-gray-200 text-md ";
  const normalLink =
    "flex items-center gap-5 ps-4 pt-3 pb-2.5 hover:border-l-4 border-gray-100 text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-[rgba(255,255,255,0.18)]";
  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  return (
    <div className=" h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 ">
      {activeMenu && (
        <div>
          <div className="flex justify-end items-center">
            <button
              onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
              type="button"
              className={` text-xl rounded-full p-3 mt-1 text-white ${
                currentMode === "Dark"
                  ? "text-white hover:bg-[rgba(255,255,255,0.18)]"
                  : ""
              }`}
            >
              <img src={humburger} alt="" className="w-8 h-5" />
            </button>
          </div>
          <div className="mt-12">
            {links.map((link) => (
              <NavLink
                to={`/${link.name}`}
                key={link.name}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                onClick={handleCloseSidebar}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {<img src={link.image} alt="" className=" w-5 h-5" />}
                <span className=" capitalize text-white">{link.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
