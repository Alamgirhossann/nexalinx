import rectangle from "../assets/Rectangle 34627681.png";
import edit from "../assets/Group (3).png";
import plus from "../assets/Group 1000015700.png";
import delet from "../assets/Group (4).png";

const Popup = () => {
  return (
    <>
      <div
        className={` w-36 h-32 ms-5 mt-5 rounded-md bg-white grid  grid-cols-4 justify-center`}
      >
        <div className=" col-span-3">
          <div className="grid grid-cols-4 justify-center items-center border-b w-full h-8">
            <div className="col-span-1 flex justify-center ms-3">
              <img src={edit} alt="" className="w-3 h-3" />
            </div>
            <div className="col-span-3">
              {" "}
              <p className=" text-sm ms-3">Rename</p>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center border-b w-full h-8">
            <div className="col-span-1 flex justify-center ms-3">
              <img src={plus} alt="" className="w-3 h-3" />
            </div>
            <div className=" col-span-3 ms-3">
              <p className=" text-sm">Add New</p>
            </div>
          </div>
          <div className="grid grid-cols-4  items-center border-b w-full h-8">
            <div className="col-span-1 flex justify-center ms-3">
              {" "}
              <img src={delet} alt="" className="w-3 h-3" />
            </div>
            <div className="col-span-3 ms-3">
              <p className=" text-sm">Delete</p>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center border-b w-full h-8">
            <div className="flex  justify-center col-span-1 ms-3">
              <div className=" bg-[#C7A0E9] w-3 h-3 rounded-sm my-2  "></div>
            </div>
            <p className="col-span-3 ms-3">Color</p>
          </div>
        </div>
        <div className=" border-l col-span-1">
          <div className=" bg-[#C7A0E9] w-3 h-3 rounded-sm ms-3 my-2"></div>
          <div className=" bg-[#CBE9A0] w-3 h-3 rounded-sm ms-3 my-2"></div>
          <div className=" bg-[#F6B89B] w-3 h-3 rounded-sm ms-3  my-2"></div>
          <div className=" bg-[#FAACBC] w-3 h-3 rounded-sm ms-3 my-2"></div>
          <div className=" bg-[#A5D9E3] w-3 h-3 rounded-sm ms-3 my-2"></div>
          <div className=" bg-[#F2EDAF] w-3 h-3 rounded-sm ms-3 my-2"></div>
        </div>
      </div>
    </>
  );
};

const LargeCard = ({ text, subtext, bgColor, isOpen, setIsOpen }) => {
  return (
    <>
      <div
        className={` w-72 h-56 ms-5 mt-5 rounded-md `}
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex justify-between">
          <div>
            <h5 className="ms-5 mt-2">{text}</h5>
            <p className="ms-5 mt-2 text-xs">{subtext}</p>
          </div>
          <img className="w-4 h-2 m-3" src={rectangle} alt="" />
        </div>
        {isOpen && <Popup />}
      </div>
    </>
  );
};

export default LargeCard;
