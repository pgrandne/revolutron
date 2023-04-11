'use client';

import { perm_marker } from '@/utils/font';
import { useTranslations } from 'next-intl';
import { LocaleSwitcher, ModalInfo, ModalSelectChapter, MotionFooter, MotionHero, MotionHeroButton, MotionOp } from '../components';
import Image from 'next/image';
import equipmentPic from '@/public/img/equipment.jpg'
import { useState } from 'react';
import TronLink from '../components/TronLink';
import { WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
// import { WalletDisconnectedError, WalletError, WalletNotFoundError } from '@tronweb3/tronwallet-abstract-adapter';

export default function Index() {
  const tHome = useTranslations('Home')
  const tInfo = useTranslations('Info')
  const tProgression = useTranslations('Progression')
  const [wallet, setWallet] = useState(false)
  const [modalInfo, setModalInfo] = useState(false)
  const [deck, setDeck] = useState(false)
  const [modalSelectChapter, setModalSelectChapter] = useState(false)

  return (
    <WalletProvider>
      <main className={`${perm_marker.className} flex justify-center h-screen w-screen`}>
        <div className="absolute flex gap-2 top-3 right-3 z-40">
          <TronLink />
          <LocaleSwitcher />
        </div>
        <div className="my-auto relative">
          <MotionOp opacity={0.4} delay={4}>
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
    </WalletProvider>
  )
}