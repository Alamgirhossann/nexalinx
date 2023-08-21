/* eslint-disable react/prop-types */
import user from "../assets/Ellipse 68.png";
const HorizontaCard = ({ serial, name, passion, percent, need, traits }) => {
  return (
    <div className=" bg-white">
      <div className="grid grid-cols-7 overflow-auto justify-center items-center py-4">
        <div className="w-36 mx-4 text-[10px]">
          <p className="px-4">{serial}</p>
        </div>

        <div className="w-36 mx-4 text-[10px]">
          <img src={user} alt="" className="w-6 h-6 " />
        </div>
        <div className="w-36 mx-4 text-[10px]">
          <p className="px-4">{name}</p>
        </div>
        <div className="w-36 mx-4 text-[10px]">
          <p className="px-4">{passion}</p>
        </div>
        <div className="w-36 mx-4 text-[10px]">
          <p className="px-4">{percent}</p>
        </div>
        <div className="w-36 mx-4 text-[10px]">
          <p className="px-4">{need}</p>
        </div>
        <div className="w-36 mx-4 text-[10px]">
          <p className="px-4">{traits}</p>
        </div>
      </div>
    </div>
  );
};

export default HorizontaCard;
