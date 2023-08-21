import { useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import humburger from "../assets/Group 1000021834.png";

const Navbar = () => {
  const { activeMenu, setActiveMenu, screenSize, setScreenSize, shoppingCart } =
    useStateContext();
  console.log(shoppingCart);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 767) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-3 md:ml-6 md: ms-5 relative">
      <button
        onClick={handleActiveMenu}
        className={`${
          activeMenu ? "md:hidden" : ""
        } md:bg-slate-700 p-2 rounded-full`}
      >
        <img src={humburger} alt="" className="w-6 h-4" />
      </button>
      <h2 className="hidden md:block">Dashboard</h2>
    </div>
  );
};

export default Navbar;
