/* eslint-disable react/prop-types */
import user from "../assets/Ellipse 68.png";
const HorizoltalCard = ({
  serial,
  name,
  passion,
  percent,
  need,
  traits,
  color,
}) => {
  return (
    <div className={`bg-white`} style={{ borderBottom: `2px solid ${color}` }}>
      <div className="grid grid-cols-7 justify-center items-center py-3 px-1">
        <div className="w-auto  text-[10px]">
          <p className="">{serial}</p>
        </div>

        <div className="w-auto  text-[10px]">
          <img
            src={user}
            alt=""
            className="w-6 h-6 "
            style={{ marginLeft: "-5px" }}
          />
        </div>
        <div className="w-auto  text-[10px]">
          <p className="" style={{ marginLeft: "-5px" }}>
            {name}
          </p>
        </div>
        <div className="w-auto  text-[10px]">
          <p className="">{passion}</p>
        </div>
        <div className="w-auto  text-[10px]">
          <p className="">{percent}</p>
        </div>
        <div className="w-auto  text-[10px]">
          <p className="">{need}</p>
        </div>
        <div className="w-auto  text-[10px]">
          <p className="" style={{ marginLeft: "-5px" }}>
            {traits}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HorizoltalCard;
