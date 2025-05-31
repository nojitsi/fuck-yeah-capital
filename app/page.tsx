// import { Button } from "@/components/ui/button";
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import IncomeInput from "@/components/custom/income-input";

export default function Home() {
  const [titleAnimationCompleted, setTitleAnimationCompleted] = useState(false);
  const [titleDisappeared, setTitleDisappeared] = useState(false);

  const [govMessageAppeared, setGovMessageAppeared] = useState(false);
  const [govMessageDisappeared, setGovMessageDisappeared] = useState(false);

  const [caseAnimationCompleted, setCaseAnimationCompleted] = useState(false);

  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-4">
      {
        ! titleDisappeared ? <motion.h1
          initial={ ! titleAnimationCompleted ? { opacity: 0 } : { opacity: 1 }}
          animate={ ! titleAnimationCompleted ? { opacity: 1 } : { opacity: 0 }}
          transition={! titleAnimationCompleted ? { delay: 0.6, duration: 3 } : {delay: 0.4, duration: 1}}
          className="text-[clamp(0.2rem,4vw,3rem)] font-bold whitespace-nowrap"
          onAnimationComplete={() => {
            if (! titleAnimationCompleted) {
              setTitleAnimationCompleted(true);
            }
            if (titleAnimationCompleted && ! titleDisappeared) {
              setTitleDisappeared(true);
            }
          }}
        >
          ░▒▓▆▅▃▂▁𝐩𝐞𝐨𝐩𝐥𝐞 𝐜𝐚𝐩𝐢𝐭𝐚𝐥▁▂▃▅▆▓▒░
        </motion.h1> : <></>
      }

      {
        ! govMessageDisappeared ? <motion.div
          className="absolute flex flex-col items-center justify-center top-0 left-0"
          initial={ ! govMessageAppeared ? { x: -300, scale: 1, opacity: 0 } : { x: 0, scale: 1, opacity: 1 }}
          animate={ ! govMessageAppeared ? { x: 0, scale: 1, opacity: 1 } : {opacity: 0}}
          transition={ ! govMessageAppeared ? { delay: 5, duration: 1, ease: 'easeOut' } : {delay: 2, duration: 2}}
          onAnimationComplete={() => {
            if (! govMessageAppeared) {
              setGovMessageAppeared(true);
            }
            if (govMessageAppeared && ! govMessageDisappeared) {
              setGovMessageDisappeared(true);
            }
          }}
        >
          <Image
            src="/bush.gif" // Заміни на реальну картинку
            width={0}
            height={0}
            className="w-64 h-auto rounded-xl shadow-xl"
            alt="Demo" />
          <p className="text-xl font-bold">We will take your money</p>
        </motion.div> : <></>
      }

      { govMessageDisappeared ?
        <video
          src="/caseopening.mp4"
          autoPlay
          muted
          playsInline
          className="w-100 h-auto absolute z-0 rounded-lg"
          onEnded={() => setCaseAnimationCompleted(true)}
        ></video> : <></>
      }

      {
        caseAnimationCompleted ? <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{duration: 1}}
          className="z-1 mb-25"
        >
          <IncomeInput />

        </motion.div> : <></>
      }

      {/*<div className="mt-5 flex flex-col space-y-4">*/}
      {/*    <Button variant="default">Звичайна кнопка</Button>*/}
      {/*    <Button variant="outline">Outline кнопка</Button>*/}
      {/*    <Button variant="ghost">Прозора кнопка</Button>*/}
      {/*    <Button size="sm">Маленька</Button>*/}
      {/*</div>*/}
    </main>
  );
}
