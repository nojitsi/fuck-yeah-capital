'use client';

import {User} from "@prisma/client";
import {useState} from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import IncomeInput from "@/components/custom/income-input";
import {UserMeta} from "@/prisma/model/UserMeta";
import EncryptionKeySetup from "@/components/custom/encryption-key-setup";

type IntroProps = {
  user: User|null;
}

export default function Intro({ user }: IntroProps) {
  const meta = user?.meta as UserMeta | null

  const [titleAnimationCompleted, setTitleAnimationCompleted] = useState(false);
  const [titleDisappeared, setTitleDisappeared] = useState(false);

  const [govMessageAppeared, setGovMessageAppeared] = useState(false);
  const [govMessageDisappeared, setGovMessageDisappeared] = useState(false);

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
        titleDisappeared && ! govMessageDisappeared ? <motion.div
          className="flex flex-col items-center justify-center top-0 left-0"
          initial={ ! govMessageAppeared ? { x: -300, scale: 1, opacity: 0 } : { x: 0, scale: 1, opacity: 1 }}
          animate={ ! govMessageAppeared ? { x: 0, scale: 1, opacity: 1 } : { x: 0, opacity: 0, scale: 1}}
          transition={ ! govMessageAppeared ? { duration: 1 } : { delay: 1.7, duration: 2 }}
          onAnimationComplete={() => {
            if (! govMessageAppeared) {
              setGovMessageAppeared(true);
              console.log('govMessageAppeared');
            }
            if (govMessageAppeared && ! govMessageDisappeared) {
              setGovMessageDisappeared(true);
              console.log('govMessageDisappeared');
            }
          }}
        >
          <p className="text-xl font-bold">We will take your money</p>
          <Image
            src="/bush.gif"
            width={0}
            height={0}
            className="w-64 h-auto rounded-xl shadow-xl"
            alt="Demo" />
        </motion.div> : <></>
      }

      {
        govMessageDisappeared ? <div
          className=""
        >
          <EncryptionKeySetup />
        </div> : <></>
      }

      {/*{*/}
      {/*  govMessageDisappeared ? <div*/}
      {/*    className="z-1 mb-25"*/}
      {/*  >*/}
      {/*    <IncomeInput initIncomeValue={meta?.income} />*/}

      {/*  </div> : <></>*/}
      {/*}*/}


      {/*{*/}
      {/*  govMessageDisappeared ? <div*/}
      {/*    className="z-1 mb-25"*/}
      {/*  >*/}
      {/*    <IncomeInput initIncomeValue={meta?.income} />*/}

      {/*  </div> : <></>*/}
      {/*}*/}

      {/*<div className="mt-5 flex flex-col space-y-4">*/}
      {/*    <Button variant="default">Звичайна кнопка</Button>*/}
      {/*    <Button variant="outline">Outline кнопка</Button>*/}
      {/*    <Button variant="ghost">Прозора кнопка</Button>*/}
      {/*    <Button size="sm">Маленька</Button>*/}
      {/*</div>*/}
    </main>
  );
}