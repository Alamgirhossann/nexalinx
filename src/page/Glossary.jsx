import CharGeneratorModal from "../components/CharGeneratorModal";
import woman from "../assets/Ellipse 70.png";
import { Link } from "react-router-dom";
import img1 from "../assets/Rectangle 34630550.png";
import img2 from "../assets/Rectangle 34630551.png";
import img3 from "../assets/Rectangle 34630552.png";
import img4 from "../assets/Rectangle 34630553.png";
import img5 from "../assets/Rectangle 34630554.png";
import img6 from "../assets/Rectangle 34630555.png";
import HorizoltalCard from "../components/HorizoltalCard";
import description from "../assets/description.png";

const Glossary = () => {
  return (
    <div>
      <div className="hidden">
        <CharGeneratorModal />
      </div>
      <div className="sm: block md:hidden ">
        <div className="flex justify-between mt-14 mx-4 md:mt-8">
          <h1 className=" text-xl font-bold">Character</h1>
          <div>
            <button className="bg-[#E4E4E4] py-1 px-2 mx-1 text-[10px]">
              ADD NEW
            </button>
            <button className="bg-[#E4E4E4] py-1 px-2 mx-1 text-[10px]">
              AUTO GENERATE
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-8 md:mt-4 mx-5">
          <p className="px-2 mx-1 text-[10px]">name</p>
          <p className=" px-2 mx-1 text-[10px]">Archetype</p>
          <p className=" px-2 mx-1 text-[10px]">Possesion</p>
          <p className=" px-2 mx-1 text-[10px]">Need</p>
          <p className=" px-2 mx-1 text-[10px]">Traits</p>
        </div>
        <div className="mx-4">
          <HorizoltalCard
            serial={1}
            name={"will kayer"}
            passion={"Magician"}
            percent={"59%"}
            need={"To help"}
            traits={"Witty,fickle"}
            color={"#38AA3A"}
            width={"100%"}
          />
        </div>

        <div className=" bg-white mx-4 shadow-md mt-5">
          <div className="flex justify-center">
            <img src={woman} alt="" className="w-24  h-24" />
          </div>
          <div className="mt-3 text-center mx-4 sm:mx-4 sm:mt-0 sm:text-center">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Ai Character Generator
            </h1>
            <div className="mt-2">
              <form>
                <div className="space-y-12">
                  <div className=" pb-6">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="col-span-full">
                        <label
                          htmlFor="street-address"
                          className="block text-sm  leading-6 text-gray-900 text-left"
                        >
                          <img src={description} alt="" className="w-[100px]" />
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            placeholder="Black haired male, Green eyes with scar on chin."
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                            bg-[#F6F6F6]
                            focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:ps-2"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2 sm:col-start-1">
                        <label
                          htmlFor="city"
                          className="block text-sm font-semibold leading-6 text-gray-900 text-left"
                        >
                          Anti-Description (optional)
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            placeholder="Black haired male"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                            bg-[#F6F6F6]
                            focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:ps-2"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="region"
                          className="block text-sm font-semibold leading-6 text-gray-900 text-left"
                        >
                          Art Style
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="region"
                            id="region"
                            autoComplete="address-level1"
                            placeholder="No Style"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                            bg-[#F6F6F6]
                            focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:ps-2"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-semibold leading-6 text-gray-900 text-left"
                        >
                          Shape
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            autoComplete="postal-code"
                            placeholder="Protrait"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                            bg-[#F6F6F6]
                            placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:ps-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="text-white bg-gradient-to-r from-[#03B788] to-[rgb(41,143,164)] rounded-md py-1 px-6 mb-3">
                    Generate
                  </button>
                </div>
              </form>
              <div>
                <h3>Add a description & click generate to begin.</h3>
              </div>
              <div className="my-3">
                <h3>This generator was made using the</h3>
                <Link to="#" className="text-[#2989BF]">
                  text-to-image plugin.
                </Link>
              </div>
              <div className="my-5">
                <button className=" bg-gray-300 py-2 px-5 rounded-md">
                  Load Comments Gallery
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                <img src={img1} alt="" width={150} height={150} />
                <img src={img2} alt="" width={150} height={150} />
                <img src={img3} alt="" width={150} height={150} />
                <img src={img4} alt="" width={150} height={150} />
                <img src={img5} alt="" width={150} height={150} />
                <img src={img6} alt="" width={150} height={150} />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-5  mx-4 bg-white text-[10px]">
          <div className="border border-slate-500 p-2">
            <h3>Obstacle</h3>
            <p>
              This is a obstacle sectiom.They can simply click in his bpx and
              type whatevr they want.The maximumword limit should be at the very
              end of this box.
            </p>
          </div>
          <div className="border border-slate-500 p-2">
            <h3>Resolving Obstacle</h3>
            <p>
              This is a obstacle sectiom.They can simply click in his bpx and
              type whatevr they want.The maximumword limit should be at the very
              end of this box.
            </p>
          </div>
        </div>
        <div className="border border-slate-500 mx-4 bg-white p-2 text-[10px]">
          <h3>Resolving Obstacle</h3>
          <p>
            This is a obstacle sectiom.They can simply click in his bpx and type
            whatevr they want.The maximumword limit should be at the very end of
            this box.
          </p>
        </div>

        <div className="bg-white mx-4 mt-3 py-3 border border-slate-500">
          <h3 className=" text-center">Character Scenes</h3>

          <table className="table-fixed w-full text-[9px]">
            <thead>
              <tr className="">
                <th className=" w-[10%]">Order</th>
                <th className=" w-[15%]"></th>
                <th className=" w-[60%]">Scene Heading</th>
                <th className=" w-[15%]">Page</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">1</td>
                <td className="text-center"></td>
                <td className="">EXT . JOHN AND MARY’ S HOUSE - NIGHT </td>
                <td className="text-center">4</td>
              </tr>
              <tr>
                <td className="text-center">2</td>
                <td className="text-center"></td>

                <td>INT . TRAIN STATION - NIGHT</td>
                <td className="text-center">8</td>
              </tr>
              <tr>
                <td className="text-center">3</td>
                <td className="text-center"></td>

                <td>EXT . STREET - MORNING</td>
                <td className="text-center">7</td>
              </tr>
              <tr>
                <td className="text-center">4</td>
                <td className="text-center"></td>

                <td>INT . JAKEIES HOUSE - AFTERNOON</td>
                <td className="text-center">3</td>
              </tr>
              <tr>
                <td className="text-center">5</td>
                <td className="text-center"></td>

                <td>EXT . JAKEIES HOUSE - LATER</td>
                <td className="text-center">2</td>
              </tr>
              <tr>
                <td className="text-center">6</td>
                <td className="text-center"></td>
                <td>INT . THE JOB CRNTER - MORNING</td>
                <td className="text-center">1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mx-4 my-2">
          <HorizoltalCard
            serial={2}
            name={"will kayer"}
            passion={"Magician"}
            percent={"59%"}
            need={"To help"}
            traits={"Witty,fickle"}
            color={"#D4A941"}
            width={"45%"}
          />
        </div>
        <div className="mx-4 my-2">
          <HorizoltalCard
            serial={3}
            name={"will kayer"}
            passion={"Magician"}
            percent={"59%"}
            need={"To help"}
            traits={"Witty,fickle"}
            color={"#A95B38"}
            width={"55%"}
          />
        </div>
        <div className="mx-4 my-2">
          <HorizoltalCard
            serial={4}
            name={"will kayer"}
            passion={"Magician"}
            percent={"59%"}
            need={"To help"}
            traits={"Witty,fickle"}
            color={"#C7D651"}
            width={"70%"}
          />
        </div>
        <div className="mx-4  my-2">
          <HorizoltalCard
            serial={5}
            name={"will kayer"}
            passion={"Magician"}
            percent={"59%"}
            need={"To help"}
            traits={"Witty,fickle"}
            color={"#77A737"}
            width={"85%"}
          />
        </div>
        <div className="mx-4 my-2">
          <HorizoltalCard
            serial={6}
            name={"will kayer"}
            passion={"Magician"}
            percent={"59%"}
            need={"To help"}
            color={"#77A737"}
            traits={"Witty,fickle"}
            width={"85%"}
          />
        </div>
      </div>
    </div>
  );
};

export default Glossary;
