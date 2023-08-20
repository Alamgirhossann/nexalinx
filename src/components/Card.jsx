import plus from "../assets/Group 1000021717 (1).png";

// eslint-disable-next-line react/prop-types
const Card = ({ text, subtext }) => {
  return (
    <>
      <div className="bg-white w-40 h-48 ms-5 mt-5 rounded-md flex justify-center items-center ">
        <img className="w-5 h-5 rounded-full" src={plus} alt="" />
      </div>
      <h5 className="ms-5 mt-2">{text}</h5>
      <p className="ms-5 mt-2 text-xs">{subtext}</p>
    </>
  );
};

export default Card;
