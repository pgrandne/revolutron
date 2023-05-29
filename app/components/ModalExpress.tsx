"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { azadChap1Pic, tronlinkPic } from "@/public/img";

const ModalExpress = () => {
  const router = useRouter();
  const t = useTranslations("ExpressVersion");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Modal toggle */}
      <button
        className="absolute top-4 left-6 z-10 text-white font-permarker text-sm px-3 py-1 text-center border  rounded-md    opacity-80 cursor-pointer hover:bg-red-900 hover:opacity-100"
        type="button"
        onClick={openModal}
      >
        Express mode
      </button>
      <div className="max-w-2xl mx-auto">
        {/* Main modal */}
        {isModalOpen && (
          <div className="bg-gray-900 bg-opacity-80  justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-30">
            <div id="default-modal" className="">
              <div className="relative font-sans border rounded-lg border-gray-200 text-gray-300 w-full max-w-2xl  h-full md:h-auto mt-24 mx-auto z-50">
                {/* Modal content */}
                <div className="  bg-[#0f1216] rounded-lg shadow relative">
                  {/* Modal header */}
                  <div className="flex place-items-center justify-between px-5 py-3 rounded-t">
                    <Image
                      className="w-14 h-14  bg-gray-300 rounded-full"
                      src={azadChap1Pic}
                      alt=""
                    />
                    <h3 className="ml-4 text-xl lg:text-2xl font-semibold ">
                      {t("title")}
                      {!step ? " (1/2)" : " (2/2)"}
                    </h3>
                    <button
                      type="button"
                      className="text-gray-300 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={closeModal}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="mx-auto border-b w-[98%]  border-white opacity-60"></div>

                  {/* Modal body */}
                  <div className="p-6 space-y-6">
                    <p className="  leading-relaxed ">
                      {!step ? t("text1") : t("text3")}
                    </p>
                    <p className="  leading-relaxed ">
                      {!step ? t("text2") : t("text4")}
                    </p>
                  </div>
                  {/* Modal footer */}
                  <div className="mx-auto border-b w-[98%] border-white opacity-60"></div>
                  <div className="flex space-x-2 items-center p-5   rounded-b ">
                    <div className="flex space-x-4 w-full ">
                      {step ? (
                        <button
                          type="button"
                          className="flex text-gray-300  hover:bg-gray-200 hover:text-gray-900 text-sm px-2.5 py-2 text-center border  rounded-md  relative  cursor-pointer  hover:opacity-100"
                        >
                          <a
                            target="_blank"
                            href="https://www.tronlink.org/"
                            rel="noopener noreferrer"
                            className=""
                          >
                            {t("install")}
                            <svg
                              width="26"
                              height="26"
                              viewBox="0 0 83 83"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="inline h-5 ml-1 animate-pulse"
                            >
                              <rect
                                width="83"
                                height="83"
                                rx="20"
                                fill="#125ECD"
                              />
                              <mask
                                id="mask0_2212_104"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="83"
                                height="83"
                              >
                                <rect
                                  width="83"
                                  height="83"
                                  rx="20"
                                  fill="#125ECD"
                                />
                              </mask>
                              <g mask="url(#mask0_2212_104)">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M17 24L58.7842 129L117 58.1602L96.3895 38.5915L17 24ZM31.8131 32.3522L89.0374 42.8715L66.8249 61.3555L31.8131 32.3522ZM27.8448 36.2588L64.3332 66.4864L58.628 113.622L27.8448 36.2588ZM95.1117 45.0199L107.256 56.5508L74.0421 62.5585L95.1117 45.0199ZM69.6148 68.9868L106.394 62.3363L64.2078 113.671L69.6148 68.9868Z"
                                  fill="white"
                                />
                              </g>
                            </svg>
                          </a>
                        </button>
                      ) : (
                        ""
                      )}

                      {step ? (
                        <div className=" w-1/2 text-gray-300 text-sm  ">
                          {t("note")}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="flex space-x-2 w-1/5 items-right ">
                      {step ? (
                        <button
                          type="button"
                          id="previous"
                          className=" bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => setStep(false)}
                        >
                          <svg
                            fill="#D1D5DB"
                            className="hover:fill-[#000000]"
                            height="40px"
                            width="40px"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 471.2 471.2"
                            transform="matrix(-1,0,0,1,0,0)"
                          >
                            <g>
                              <g>
                                <path
                                  d="M283.6,155.6c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l47.5,47.5H126.6c-7.5,0-13.5,6-13.5,13.5
			s6,13.5,13.5,13.5H312l-47.4,47.4c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l70.5-70.5c5.3-5.3,5.3-13.8,0-19.1
			L283.6,155.6z"
                                />
                              </g>
                            </g>
                          </svg>
                        </button>
                      ) : (
                        ""
                      )}

                      <button
                        type="button"
                        id="next"
                        className="text-gray-400 bg-transparent hover:bg-gray-300 hover:text-gray-900 rounded-lg text-sm ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() =>
                          step ? router.push("/chapter2") : setStep(true)
                        }
                      >
                        <svg
                          fill="#D1D5DB"
                          className="hover:fill-[#000000]"
                          height="40px"
                          width="40px"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 471.2 471.2"
                          transform="matrix(1,0,0,-1,0,0)"
                        >
                          <g>
                            <g>
                              <path
                                d="M283.6,155.6c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l47.5,47.5H126.6c-7.5,0-13.5,6-13.5,13.5
			s6,13.5,13.5,13.5H312l-47.4,47.4c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l70.5-70.5c5.3-5.3,5.3-13.8,0-19.1
			L283.6,155.6z"
                              />
                            </g>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalExpress;
