import rectangle from "../assets/Rectangle 34627681.png";
import edit from "../assets/Group (3).png";
import plus from "../assets/Group 1000015700.png";
import delet from "../assets/Group (4).png";

const Popup = () => {
  return (
    <>
      <div className={` w-36 h-36 ms-5 mt-5 rounded-md bg-white flex`}>
        <div className=" row-span-6">
          <div className="flex justify-between items-center border-b w-full h-8">
            <img src={edit} alt="" className="w-3 h-3" />
            <div>
              {" "}
              <p className=" text-sm">Rename</p>
            </div>
          </div>
          <div className="flex justify-between items-center border-b w-full h-8">
            <img src={plus} alt="" className="w-3 h-3" />
            <div>
              <p className=" text-sm">Add New</p>
            </div>
          </div>
          <div className="flex justify-between  items-center border-b w-full h-8">
            <img src={delet} alt="" className="w-3 h-3" />
            <div>
              <p className=" text-sm">Delete</p>
            </div>
          </div>
          <div className="flex justify-between items-center border-b w-full h-8">
            <div className=" bg-[#C7A0E9] w-3 h-3 rounded-sm my-2"></div>
            <p>Color</p>
          </div>
        </div>
        <div className="row-span-6 border-l ">
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
