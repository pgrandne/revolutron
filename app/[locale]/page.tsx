'use client';

import { perm_marker } from '@/utils/font';
import { useTranslations } from 'next-intl';
import { LocaleSwitcher, ModalInfo, ModalSelectChapter, MotionFooter, MotionHero, MotionHeroButton, MotionOp } from '../components';
import Image from 'next/image';
import equipmentPic from '@/public/img/equipment.jpg'
import { useState } from 'react';
import TronLink from '../components/TronLink';
// import TronWeb from '@/utils/tronweb'

declare global {
  interface Window {
    tronWeb: any;
  }
}

export default function Index() {
  const tHome = useTranslations('Home')
  const tInfo = useTranslations('Info')
  const tProgression = useTranslations('Progression')
  const [wallet, setWallet] = useState(false)
  const [modalInfo, setModalInfo] = useState(false)
  const [deck, setDeck] = useState(false)
  const [modalSelectChapter, setModalSelectChapter] = useState(false)

  // const mainchain = new TronWeb({
  //   fullHost: 'https://api.trongrid.io',
  //   headers: { "TRON-PRO-API-KEY": '2556a3d0-0bd1-4a5a-88b3-823549e40400' },
  //   privateKey: 'your private key'
  // })

  // const handleTron = () => {
  //   if (getTronWeb()) {
  //     const tronweb = window.tronWeb;
  //     console.log('TronWallet successfully detected!');
  //     console.log(tronweb)
  //     setWallet(true)
  //   }
  //   else {
  //     console.log('TronWallet is not installed!');
  //     setWallet(false)
  //   }
  // }

  // useEffect(() => {
  //   handleTron()
  //   console.log(wallet)
  // }, [])

  return (
    <main className={`${perm_marker.className} flex justify-center h-screen w-screen`}>
      <div className="absolute flex gap-2 top-3 right-3 z-40">
        <TronLink />
        <LocaleSwitcher />
      </div>
      <div className="my-auto relative">
        <MotionOp opacity={0.4} delay={4} duration={1}>
          <Image
            className="rounded-md border-4 border-white"
            src={equipmentPic}
            alt="Picture of materials"
          />
        </MotionOp>
        <div className="absolute top-0 pt-6 sm:pt-36 h-full w-full overflow-hidden">
          <MotionHero title={tHome('title')} subtitle={tHome('subtitle')} />
          <MotionHeroButton buttonName={tHome('buttonName')} setModalSelectChapter={setModalSelectChapter} />
        </div>
        <MotionFooter setModalInfo={setModalInfo} setDeck={setDeck} />
      </div >
      {modalInfo &&
        <ModalInfo setModalInfo={setModalInfo} deck={deck} />
      }
      {modalSelectChapter &&
        <ModalSelectChapter setModalSelectChapter={setModalSelectChapter} wallet={wallet} />
      }
    </main>
  )
}