import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./page/Dashboard";
import Spark from "./page/Spark";
import Glossary from "./page/Glossary";

const App = () => {
  const { activeMenu, currentMode } = useStateContext();
  return (
    <div className={currentMode === "Dark" ? "bg-black" : "bg-[#F8F8F8]"}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu ? (
            <div
              className={`w-72 fixed sidebar ${
                currentMode === "Dark"
                  ? "bg-gray-900"
                  : "bg-gradient-to-r from-[#03B788] to-[rgb(41,143,164)]"
              }`}
            >
              <Sidebar />
            </div>
          ) : (
            <div
              className={
                currentMode === "Dark"
                  ? "bg-black w-0"
                  : "bg-gradient-to-r from-[#03B788] to-[rgb(41,143,164)] w-0"
              }
            >
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div
              className={`fixed md:static md:bg-white text-black navbar w-full ${
                currentMode === "Dark"
                  ? "bg-black border-b-2 border-gray-900"
                  : "md:bg-white border-b-2 border-gray-50"
              }`}
            >
              <Navbar />
            </div>
            {
              <div>
                {
                  // themeSettings && <ThemeSetting />
                }
                <Routes>
                  {/* dashboard  */}
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/Dashboard" element={<Dashboard />} />
                  <Route path="/Glossary" element={<Glossary />} />
                  <Route path="/Spark" element={<Spark />} />
                </Routes>
              </div>
            }
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
