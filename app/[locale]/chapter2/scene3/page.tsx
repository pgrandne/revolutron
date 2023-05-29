"use client";

import { useEffect, useState } from "react";
import Discussion from "./Discussion";
import Sequence from "./Sequence";
import {
  ArrowButton,
  LinkLocale,
  ModalTransaction,
  MotionOp,
  ProgressionBar,
} from "@/app/components";
import {
  azadRuizPic,
  backgroundPic,
  boxDamagedPic,
  paperPic,
  forkliftPic,
  ruizPic,
} from "@/public/img";
import { AnimatedText, MotionSlideX, MotionSlideY } from "@/app/components";
import Image from "next/image";
import { motion } from "framer-motion";

const Chap2s3 = () => {
  const [stage, setStage] = useState(0);
  const [transactionModal, setTransactionModal] = useState(false);

  useEffect(() => {
    if (stage === 2) {
      setTransactionModal(true);
      setStage(3);
    }
  }, [stage]);

  return (
    <div className="flex flex-row">
      <ProgressionBar progression={"w-2/12"} />
      <div className="relative basis-2/3 w-full overflow-hidden">
        <Sequence />
      </div>
      <div className="basis-1/3 p-6 h-screen flex-grow-0">
        <Discussion stage={stage} setStage={setStage} />
      </div>

      {/* { stage > 1 && stage < 4 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2  }}
        >
          <div className="bg-[#0f1216] bg-opacity-100  flex justify-center items-center absolute top-0 bottom-0 left-0 w-2/3 z-30">
          </div>
        </motion.div>
      )} */}

      {stage === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="bg-[#0f1216] bg-opacity-100 overflow-hidden flex justify-center items-center absolute top-0 bottom-0 left-0 w-2/3 z-30">
            <MotionSlideX delay={2.5} className="flex pr-[30%]  ">
              <Image className="object-contain" src={forkliftPic} alt="" />
            </MotionSlideX>

            <MotionSlideY delay={2.5}>
              <div className="flex justify-end pl-[35%] pt-[5%] ">
                <Image className="object-contain" src={ruizPic} alt="" />
              </div>
            </MotionSlideY>
          </div>
        </motion.div>
      )}
      {stage === 1 && (
        <MotionOp delay={9}>
          <button
            className="absolute bottom-8 right-[33%] animate-pulse z-40"
            onClick={() => setStage(2)}
          >
            <ArrowButton />
          </button>
        </MotionOp>
      )}

      {stage === 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <div className="bg-[#0f1216] bg-opacity-100 overflow-hidden flex justify-center items-center absolute top-0 bottom-0 left-0 w-2/3 z-30">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.5, duration: 1 }}
              className="relative w-full"
            >
              <Image
                className="object-cover py-16 h-screen w-full"
                src={backgroundPic}
                alt=""
              />
            </motion.div>

            <MotionSlideX
              delay={4.5}
              className="absolute bottom-[23%] left-[9%]"
            >
              <div className=" rotate-12 bg-green-400 ">
                <Image
                  className=" object-contain h-[420px] w-full  border-[12px] border-[#dac8bc]"
                  src={boxDamagedPic}
                  alt=""
                />
              </div>
            </MotionSlideX>

            <MotionSlideY
              delay={4.5}
              className="absolute bottom-[15%] right-[10%]"
            >
              <div className=" bottom-[10%] right-[1%] -rotate-12">
                <Image
                  className="object-contain h-[280px] w-full border-[12px] border-[#dac8bc]"
                  src={paperPic}
                  alt=""
                />
              </div>
            </MotionSlideY>
          </div>
        </motion.div>
      )}

      {stage === 5 && (
        <MotionOp delay={1}>
          <ModalTransaction setTransactionModal={setTransactionModal} />
        </MotionOp>
      )}

      {stage === 6 && (
        <MotionOp delay={5}>
          <LinkLocale
            href="/construction"
            className="absolute bottom-8 right-[33%] animate-pulse"
          >
            <ArrowButton />
          </LinkLocale>
        </MotionOp>
      )}
    </div>
  );
};

export default Chap2s3;
