import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import img1 from "../assets/Rectangle 34630550.png";
import img2 from "../assets/Rectangle 34630551.png";
import img3 from "../assets/Rectangle 34630552.png";
import img4 from "../assets/Rectangle 34630553.png";
import img5 from "../assets/Rectangle 34630554.png";
import img6 from "../assets/Rectangle 34630555.png";

const CharGeneratorModal = () => {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-center shadow-xl transition-all w-78 my-5 md:mx-5 lg:mx-16">
                <div className="bg-white w-78  pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Ai Character Generator
                      </Dialog.Title>
                      <div className="mt-2">
                        <form>
                          <div className="space-y-12">
                            <div className=" pb-6">
                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-full">
                                  <label
                                    htmlFor="street-address"
                                    className="block text-sm font-medium leading-6 text-gray-900 text-left"
                                  >
                                    Description
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      type="text"
                                      name="street-address"
                                      id="street-address"
                                      autoComplete="street-address"
                                      placeholder="Black haired male, Green eyes with scar on chin."
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:ps-2"
                                    />
                                  </div>
                                </div>

                                <div className="sm:col-span-2 sm:col-start-1">
                                  <label
                                    htmlFor="city"
                                    className="block text-sm font-medium leading-6 text-gray-900 text-left"
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
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:ps-2"
                                    />
                                  </div>
                                </div>

                                <div className="sm:col-span-2">
                                  <label
                                    htmlFor="region"
                                    className="block text-sm font-medium leading-6 text-gray-900 text-left"
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
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:ps-2"
                                    />
                                  </div>
                                </div>

                                <div className="sm:col-span-2">
                                  <label
                                    htmlFor="postal-code"
                                    className="block text-sm font-medium leading-6 text-gray-900 text-left"
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
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:ps-2"
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

                        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 ">
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
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CharGeneratorModal;
