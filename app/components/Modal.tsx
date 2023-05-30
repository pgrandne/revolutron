'use client'

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import LinkLocale from "@/app/components/LinkLocale"
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Image from "next/image";
import roadmap from "@/public/img/roadmap.png"
import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';
import { tronTransactionApprove, tronTransactionDeposit, tronUsddAllowance } from "@/utils/tronTransaction";
import { StepsBar } from "./StepsBar";
import {
  azadChap1Pic,
  ruizChap2Pic,
  skylerChap3Pic,
  bgModalPic,
  tronlinkPic,
} from "@/public/img";

export const ModalProgression = ({ route }: { route: string }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const t = useTranslations('Save')

  return (
    <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-20">
      <div className={` bg-[#0f1216] px-2 sm:px-16 py-2 sm:py-14 rounded-md text-center w-2/5`}>
        <div className="flex flex-col justify-center">
          <p className="mb-4 font-bold ">{t('saved')}</p>
          <p className="mb-4 font-bold ">{t('next')}</p>
        </div>
        <button
          className="flex bg-red-500 px-7 py-2 mx-auto rounded-md text-md text-white font-semibold"
          onClick={() => {
            setLoading(true)
            router.push(route)
          }}
        >
          {loading &&
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="black" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          }
          {loading ? "Processing..." : "Next episode"}
        </button>
      </div>
    </div>
  )
}

export const ModalSelectChapter = ({
  setModalSelectChapter,
  wallet,
}: {
  setModalSelectChapter: Dispatch<SetStateAction<boolean>>;
  wallet: boolean;
}) => {
  const t = useTranslations('SelectChapter')
  const locale = useLocale()
  const router = useRouter()
  const { address } = useWallet()
  const [loading, setLoading] = useState(false)
  const [resumeButton, setResumeButton] = useState(t('resume'))

  useEffect(() => {
    if (typeof address !== 'undefined')
      setResumeButton(t('resume'))

  }, [address])

  const getProgression = async () => {
    setLoading(true)
    try {
      const progRes = await fetch('/api/progression', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address, locale }),
      })
      if (progRes.status !== 200) throw new Error(t('error'))
      const path = await progRes.json()
      router.push(path.path)
    } catch (error) {
      alert(error.message)
      setModalSelectChapter(false)
    }
  }

  return (
    <div className="bg-gray-900 bg-opacity-80 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-30">
      <div
        className={`font-sans flex flex-col bg-[#0f1216] border rounded-md  w-2/5`}
        style={{ zIndex: -2 }}
      >
        <LinkLocale
          className="card border rounded-md w-[28rem] relative flex flex-col mx-auto mt-5 m-2 opacity-90 cursor-pointer hover:opacity-100"
          href="/chapter1/scene1"
        >
          <Image
            className="max-h-16 w-full rounded-t-md opacity-80 absolute top-0"
            style={{ zIndex: -1 }}
            src={bgModalPic}
            alt=""
          />
          <div className="profile w-full flex p-3 pl-4 text-white">
            <Image
              className="w-28 h-28 p-1 bg-amber-50 rounded-full"
              src={azadChap1Pic}
              alt=""
            />
            <div className="title mt-1 ml-3 font-bold flex flex-col">
              <div className="font-permarker name break-words">
                {t("chapter")} 1
              </div>
              <div className="name break-words pl-2 text-xs">
                (1 {t("episode")})
              </div>
              <div className="flex flex-col absolute top-0 font-bold right-0 text-xs text-white space-x-0 my-3.5 mr-3">
                <div className="add border rounded-2xl  border-gray-300 p-1 px-4">
                  15min
                </div>
              </div>
              <div className="add mt-4 font-semibold text-xs  text-white">
                {" "}
                • {t("textChap1-1")} <br /> • {t("textChap1-2")} <br />(
                {t("textChap1-3")})
              </div>
            </div>
          </div>
          <div className="flex flex-col absolute bottom-0 font-bold right-0 text-[.6rem] text-[#0f1216] space-x-0 my-3.5 mr-3">
            <div className="add  rounded-2xl text-center opacity-60 bg-lime-500 border-white mb-1  px-1.5">
              {t("beginner")}
            </div>
            <div className="add  rounded-2xl text-center opacity-60 bg-rose-600 border-white px-1.5">
              {t("advanced")}
            </div>
          </div>
        </LinkLocale>

        {wallet && (
          <LinkLocale
            className="card border rounded-md w-[28rem] relative flex flex-col mx-auto m-2 opacity-90 cursor-pointer hover:opacity-100"
            href="/chapter2/scene1"
          >
            <Image
              className="max-h-16 w-full rounded-t-md opacity-80 absolute top-0"
              style={{ zIndex: -1 }}
              src={bgModalPic}
              alt=""
            />
            <div className="profile w-full flex p-3 pl-4 text-white">
              <Image
                className="w-28 h-28 p-1 bg-amber-50 rounded-full"
                src={ruizChap2Pic}
                alt=""
              />
              <div className="title mt-1 ml-3 font-bold flex flex-col">
                <div className="font-permarker name break-words">
                  {t("chapter")} 2
                </div>
                <div className="name break-words pl-2 text-xs">
                  (4 {t("episodes")})
                </div>

                <div className="flex  absolute top-0 font-bold right-0 text-xs text-white space-x-0 my-3.5 mr-3">
                  <div className="add   p-1 px-2">4 x </div>
                  <div className="add border rounded-2xl  border-gray-300 p-1 px-4">
                    5min
                  </div>
                </div>

                <div className="add mt-4 font-semibold text-xs  text-white">
                  {" "}
                  • {t("textChap2-1")} <br /> • {t("textChap2-2")} <br />(
                  {t("textChap2-3")})
                </div>
              </div>
            </div>
            <div className="flex flex-col absolute bottom-0 font-bold right-0 text-[.6rem] text-[#0f1216] space-x-0 my-3.5 mr-3">
              <div className="add  rounded-2xl text-center opacity-60 bg-lime-500 border-white mb-1  px-1.5">
                {t("beginner")}
              </div>
              <div className="add  rounded-2xl text-center opacity-60 bg-rose-600 border-white px-1.5">
                {t("advanced")}
              </div>
            </div>
          </LinkLocale>
        )}

        {!wallet && (
          <LinkLocale
            className="card border rounded-md w-[28rem] relative flex flex-col mx-auto m-2 opacity-90 cursor-pointer hover:opacity-100"
            href="/chapter2"
          >
            <Image
              className="max-h-16 w-full rounded-t-md opacity-80 absolute top-0"
              style={{ zIndex: -1 }}
              src={bgModalPic}
              alt=""
            />
            <div className="profile w-full flex p-3 pl-4 text-white">
              <Image
                className="w-28 h-28 p-1 bg-amber-50 rounded-full"
                src={ruizChap2Pic}
                alt=""
              />
              <div className="title mt-1 ml-3 font-bold flex flex-col">
                <div className="font-permarker name break-words">
                  {t("chapter")} 2
                </div>
                <div className="name break-words pl-2 text-xs">
                  (4 {t("episodes")})
                </div>

                <div className="flex  absolute top-0 font-bold right-0 text-xs text-white space-x-0 my-3.5 mr-3">
                  <div className="add   p-1 px-2">4 x </div>
                  <div className="add border rounded-2xl  border-gray-300 p-1 px-4">
                    5min
                  </div>
                </div>

                <div className="add mt-4 font-semibold text-xs  text-white">
                  {" "}
                  • {t("textChap2-1")} <br /> • {t("textChap2-2")} <br />(
                  {t("textChap2-3")})
                </div>
              </div>
            </div>
            <div className="flex flex-col absolute bottom-0 font-bold right-0 text-[.6rem] text-[#0f1216] space-x-0 my-3.5 mr-3">
              <div className="add  rounded-2xl text-center opacity-60 bg-lime-500 border-white mb-1  px-1.5">
                {t("beginner")}
              </div>
              <div className="add  rounded-2xl text-center opacity-60 bg-rose-600 border-white px-1.5">
                {t("advanced")}
              </div>
            </div>
          </LinkLocale>
        )}

        <LinkLocale
          className="card border rounded-md w-[28rem] relative flex flex-col mx-auto m-2 opacity-90 cursor-pointer hover:opacity-100"
          href="/construction"
        >
          <Image
            className="max-h-16 w-full rounded-t-md opacity-80 absolute top-0"
            style={{ zIndex: -1 }}
            src={bgModalPic}
            alt=""
          />
          <div className="profile w-full flex p-3 pl-4 text-white">
            <Image
              className="w-28 h-28 p-1 bg-amber-50 rounded-full"
              src={skylerChap3Pic}
              alt=""
            />
            <div className="title mt-1 ml-3 font-bold flex flex-col">
              <div className="font-permarker name break-words">
                {t("chapter")} 3
              </div>
              <div className="name break-words pl-2 text-xs">
                ({t("underConstruction")})
              </div>

              {/* <div className="flex  absolute top-0 font-bold right-0 text-xs text-white space-x-0 my-3.5 mr-3">         
          <div className="add   p-1 px-2">4 x </div>
            <div className="add border rounded-2xl  border-gray-300 p-1 px-4">5min</div>
          </div> */}

              <div className="add mt-4 font-semibold text-xs  text-white">
                {" "}
                • {t("textChap3-1")} <br /> • {t("textChap3-2")} <br />(
                {t("textChap3-3")})
              </div>
            </div>
          </div>
          <div className="flex flex-col absolute bottom-0 font-bold right-0 text-[.6rem] text-[#0f1216] space-x-0 my-3.5 mr-3">
            <div className="add  rounded-2xl text-center opacity-60 bg-rose-600 border-white px-1.5">
              {t("advanced")}
            </div>
          </div>
        </LinkLocale>

        {wallet && (
          <button
            onClick={() => {
              typeof address === "undefined"
                ? setResumeButton(t("connect"))
                : getProgression();
            }}
          >
            <div className="card border  rounded-md w-[28rem] relative flex flex-col mx-auto  m-2 opacity-90 cursor-pointer hover:opacity-100">
              <Image
                className="h-full w-full rounded-md opacity-80 absolute top-0"
                style={{ zIndex: -1 }}
                src={bgModalPic}
                alt=""
              />
              <div className="absolute bottom-0 left-0 my-3 ml-6">
                <Image
                  className="w-10 h-10 p-0.5 bg-amber-50 rounded-full"
                  src={tronlinkPic}
                  alt=""
                />
              </div>
              <div className="profile h-16 w-full flex p-3 pl-4 text-white">
                <div className="title  my-auto mx-auto font-bold ">
                  <div className="font-permarker name break-words">
                    {resumeButton}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 my-3 mr-6">
                <Image
                  className="w-10 h-10 p-0.5 bg-amber-50 rounded-full "
                  src={tronlinkPic}
                  alt=""
                />
              </div>
            </div>
          </button>
        )}

        <button disabled={loading} onClick={() => setModalSelectChapter(false)}>
          <div className="card border  rounded-md w-[9rem] relative  mx-auto mb-5 m-2 opacity-80 cursor-pointer hover:bg-red-900 hover:opacity-100">
            <div className=" my-auto mx-auto flex justify-center font-bold font-permarker p-2  text-white ">
              {loading && (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="black"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              {loading ? t("wait") : t("close")}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};


export const ModalInfo = ({ setModalInfo, deck }:
  {
    setModalInfo: Dispatch<SetStateAction<boolean>>
    deck: boolean
  }) => {

  const t = useTranslations('Info')

  return (
    <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-50">
      <div className={` bg-[#0f1216] px-2 sm:px-16 py-2 sm:py-14 rounded-md text-center w-4/5`}>
        <div className="flex justify-center">
          {deck &&
            <p className="inline font-sans sm:block text-sm md:text-xl my-4 font-bold"><span className="font-permarker">RevoluTRON </span> {t('title')}</p>
          }
          {!deck &&
            <p className="inline font-sans sm:block text-sm md:text-xl my-4 font-bold"><span className="font-permarker">RevoluTRON </span> {t('subtitle')}</p>
          }
        </div>
        {deck &&
          <p className="font-sans sm:block justify-center text-sm md:text-xl mb-4 font-bold ">{t('deck')} ( <a className="underline" target="_blank" href="https://www.canva.com/design/DAFbyLc5QMo/IqXpol56nzWCz1ccNuumNg/edit?utm_content=DAFbyLc5QMo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">{t('online')} </a> / <a className="underline" target="_blank" href="https://drive.google.com/uc?id=1DSE_4--gNx3t6mdRUwFn1Zgw4_Q7vv7Q&export=download">{t('download')}</a> )</p>
        }
        {!deck &&
          <p className="font-sans sm:block justify-center text-xs md:text-base mb-4 font-bold ">0x94b9420F65fB3ec966d96BB034b35AF86487D929</p>
        }
        <Image
          className="object-contain transform md:scale-75"
          src={roadmap}
          alt="roadmap"
        />
        <button
          className="bg-red-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
          onClick={() => setModalInfo(false)}
        >{t('close')} </button>
      </div>
    </div>
  )
}

export const ModalFeedback = ({ setModalFeedback }: {
  setModalFeedback: Dispatch<SetStateAction<boolean>>
}) => {
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('Feedback');

  return (
    <div className="bg-slate-800 bg-opacity-90 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-30">
      <div className="font-permarker flex flex-col bg-[#0f1216] px-2 sm:px-16 py-2 sm:py-14 gap-2 rounded-md text-center w-2/5">
        <p className="mb-4 text-2xl"> {t('text1')} <a className="underline"> {t('text2')} </a> </p>
        <p className="mb-4 text-sm"> {t('duration')} </p>
        <a className="bg-red-500 hover:bg-red-700 px-7 py-2 ml-2 rounded-md text-2xl text-white font-semibold" target="_blank" href="https://msprr0gajgn.typeform.com/to/DSl54TqJ#url=TRONchap1ep7"
          onClick={() => {
            setModalFeedback(false)
            router.push(`${locale}/chapter2`)
          }}

        >{t('sure')}</a>

        <button
          className="border-2 border-white opacity-70 hover:opacity-100 mt-2 px-7 py-2 ml-2 rounded-md text-2xl text-white font-semibold"
          onClick={() => {
            setModalFeedback(false)
            router.push(`${locale}/chapter2`)
          }}
        >{t('close')}</button>
      </div>
    </div >
  )
}


export const ModalTransaction = ({ setTransactionModal, setStage }: {
  setTransactionModal: Dispatch<SetStateAction<boolean>>
  setStage: Dispatch<SetStateAction<number>>
}) => {
  const t = useTranslations('BailTransaction');
  const [tsx, setTsx] = useState('')
  const [transactionStatus, setTransactionStatus] = useState({
    loadingApprove: false,
    approve: false,
    loadingDeposit: false,
    deposit: false
  })

  useEffect(() => {
    tronUsddAllowance({ setTransactionStatus })
  }, [])

  return (
    <div className="bg-slate-800 bg-opacity-60 flex justify-center items-center absolute top-0 bottom-0 left-0 w-2/3 z-30">
      <div className="flex flex-col bg-[#0f1216] px-2 sm:px-16 py-2 sm:py-14 gap-2 rounded-md text-center w-3/5">
        <p className="mb-4 text-2xl"> {t('title')}</p>
        <p className="mb-4 text-sm"> {t('text')} </p>
        <StepsBar transactionStatus={transactionStatus} />
        {!transactionStatus.approve &&
          <button className="bg-red-500 hover:bg-red-700 px-7 py-2 ml-2 rounded-md text-2xl text-white font-semibold"
            onClick={() => {
              setTransactionStatus(prevState => ({
                ...prevState,
                loadingApprove: true

              }))
              tronTransactionApprove({ setTsx, setTransactionStatus })
            }}
          >
            <div className="flex justify-center">
              {transactionStatus.loadingApprove &&
                <svg className="animate-spin -ml-1 mr-3 h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="black" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              }
              {transactionStatus.loadingApprove ? "Processing..." : t('approve')}
            </div>
          </button>
        }
        {transactionStatus.approve &&
          <button className={`${transactionStatus.deposit ? "bg-gray-500" : "bg-red-500 hover:bg-red-700"} px-7 py-2 ml-2 rounded-md text-2xl text-white font-semibold`}
            disabled={transactionStatus.deposit ? true : false}
            onClick={() => {
              setTransactionStatus(prevState => ({
                ...prevState,
                loadingDeposit: true

              }))
              tronTransactionDeposit({ setTsx, setTransactionStatus })
            }}
          >
            <div className="flex justify-center">
              {transactionStatus.loadingDeposit &&
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="black" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              }
              {transactionStatus.loadingDeposit ? "Processing..." : t('pay')}
            </div>
          </button>
        }
        {transactionStatus.approve && transactionStatus.deposit &&
          <button
            className="border-2 border-white opacity-70 hover:opacity-100 mt-2 px-7 py-2 ml-2 rounded-md text-2xl text-white font-semibold"
            onClick={() => {
              setStage(2)
              setTransactionModal(false)

            }}
          >{t('close')}</button>
        }
      </div>
    </div >
  )
}


export const ModalNft = ({ setModalNft }: {
  setModalNft: Dispatch<SetStateAction<boolean>>
}) => {
  const t = useTranslations('ModalNft');

  return (
    <div className="bg-slate-800 bg-opacity-60 flex justify-center items-center absolute top-0 bottom-0 left-0 w-2/3 z-30">
      <div className="flex flex-col bg-[#0f1216] px-2 sm:px-16 py-2 sm:py-14 gap-2 rounded-md text-center w-3/5">
        <p className="mb-4 text-2xl"> {t('title')}</p>
        <p className="mb-4 text-sm"> {t('text')} </p>
        <button
          className="border-2 border-white opacity-70 hover:opacity-100 mt-2 px-7 py-2 ml-2 rounded-md text-2xl text-white font-semibold"
          onClick={() => {
            setModalNft(false)
          }}
        >{t('close')}</button>
      </div>
    </div >
  )
}


