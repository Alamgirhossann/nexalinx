import CardWithBorder from "../components/CardWithBorder";
import CustomCarousel from "../components/Carousel";
import Carousel from "../components/Carousel";
import CarouselCom from "../components/Carousel";

const Spark = () => {
  return (
    <div>
      <div className="p-4 mt-10 md:mt-0 border-slate-500 border-b mx-4">
        <h1 className=" text-2xl font-bold">Generator</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content <br /> of a page when looking at its layout.
        </p>

        <div className="button-div mt-2 ">
          <button className=" bg-[#04B689] rounded-md py-2 px-5 text-white me-2">
            Generate
          </button>
          <button className=" bg-gray-300 py-2 px-5 rounded-md">Random</button>
        </div>
      </div>
      <div className=" mx-3 p-2 block md:hidden">
        <CustomCarousel />
      </div>
      <div className="hidden md:block">
        <div className="border-slate-500 border-b mx-4 p-4 flex flex-wrap gap-2 ">
          <div>
            <CardWithBorder
              title={"Choose a Format"}
              col1={"Feature Lenght"}
              col2={"TV Series"}
              col3={"Short Flim"}
            />
          </div>
          <div>
            <CardWithBorder
              title={"Choose a Format"}
              col1={"Feature Lenght"}
              col2={"TV Series"}
              col3={"Short Flim"}
            />
          </div>
          <div>
            <CardWithBorder
              title={"Choose a Format"}
              col1={"Feature Lenght"}
              col2={"TV Series"}
              col3={"Short Flim"}
            />
          </div>
          <div>
            <CardWithBorder
              title={"Choose a Format"}
              col1={"Feature Lenght"}
              col2={"TV Series"}
              col3={"Short Flim"}
            />
          </div>
          <div>
            <CardWithBorder
              title={"Choose a Format"}
              col1={"Feature Lenght"}
              col2={"TV Series"}
              col3={"Short Flim"}
            />
          </div>
          <div>
            <CardWithBorder
              title={"Choose a Format"}
              col1={"Feature Lenght"}
              col2={"TV Series"}
              col3={"Short Flim"}
            />
          </div>
          <div>
            <CardWithBorder
              title={"Choose a Format"}
              col1={"Feature Lenght"}
              col2={"TV Series"}
              col3={"Short Flim"}
            />
          </div>
        </div>
      </div>

      <div className="border-slate-500 border-b mx-4 p-4">
        <div>
          <h5 style={{ fontSize: "15px" }}>PROTAGONIST</h5>
          <div>
            <p className="text-[#000] text-[15px] md:text-[28px] opacity-[0.5] font-bold inline-block">
              A sheriff,
            </p>{" "}
            <p className=" text-[#8A8A8A] text-[15px] md:text-[28px] opacity-[0.5] font-bold inline-block">
              who has a strong moral{" "}
            </p>
            <p className="text-[#000] text-[15px] md:text-[28px] opacity-[0.5] font-bold inline-block ms-1">
              {" "}
              compass.
            </p>
          </div>
        </div>
        <div className="mt-2">
          <h5 style={{ fontSize: "15px" }}>SECONDARY CHARACTER</h5>
          <p className="text-[#000] text-[15px] md:text-[28px] opacity-[0.5] font-bold inline-block">
            A high
          </p>{" "}
          <p className=" text-[#8A8A8A] text-[15px] md:text-[28px] opacity-[0.5] font-bold inline-block">
            school student,{" "}
          </p>
          <p className="text-[#000] text-[15px] md:text-[28px] opacity-[0.5] font-bold inline-block">
            who is a gossip.
          </p>
        </div>
        <div className="mt-2">
          {" "}
          <h5 style={{ fontSize: "15px" }}>PLOT</h5>
          <p className="text-[#000] text-[15px] md:text-[28px] opacity-[0.5] font-bold inline-block">
            It's a whodunit story
          </p>{" "}
          <p className=" text-[#8A8A8A] text-[15px] md:text-[28px] opacity-[0.5] font-bold inline-block">
            about second{"  "}
          </p>
          <p className="text-[#000] text-[15px] md:text-[28px] opacity-[0.5] font-bold inline-block ms-1">
            chances. It kicks off in
          </p>
        </div>
      </div>
      <div className="mx-4 p-4">
        <h3 className=" text-[22px] text-[#5D5D5D] font-bold">
          Show same upsets
        </h3>
        <div className="bg-[#EBEBEB] w-2/3 md:w-1/3 rounded-md ps-1">
          <p className="text-black opacity-[0.7] ">
            A high school student, who is a gossip. <br />
            protagonist
          </p>
        </div>
      </div>
      <div className="flex justify-end mt-8 me-8">
        <button className="bg-[#04B689] rounded-md py-1 px-6 mb-3">
          Save Library
        </button>
      </div>
    </div>
  );
};

export default Spark;
