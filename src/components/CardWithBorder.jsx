import downArrow from "../assets/Vector 4812.png";

const CardWithBorder = ({ title, col1, col2, col3 }) => {
  return (
    <>
      <div className="py-2 rounded-md bg-gray-300 w-48 flex justify-between items-center">
        <p className="ms-3">{title}</p>
        <img src={downArrow} alt="" className=" w-3 h-2 me-4" />
      </div>
      <div className={`bg-white w-48 h-24 rounded-md flex justify-between`}>
        <div>
          <div className=" mt-2 text-xs border-b border-b-slate-200 w-48">
            <p className="ms-2">{col1}</p>
          </div>
          <div className=" mt-2 text-xs border-b border-b-slate-200">
            <p className="ms-2">{col2}</p>
          </div>
          <div className=" mt-2 text-xs border-b border-b-slate-200">
            <p className="ms-2">{col3}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardWithBorder;
