'use client';

import { perm_marker } from '@/utils/font';
import { useTranslations } from 'next-intl';
import { LocaleSwitcher, ModalInfo, ModalSelectChapter, MotionFooter, MotionHero, MotionHeroButton, MotionOp, TronLink } from '../components';
import Image from 'next/image';
import { equipmentPic } from '@/public/img'
import { useState } from 'react';
import { WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';

export default function Index() {
  const tHome = useTranslations('Home')
  const [wallet, setWallet] = useState(false)
  const [modalInfo, setModalInfo] = useState(false)
  const [deck, setDeck] = useState(false)
  const [modalSelectChapter, setModalSelectChapter] = useState(false)

  return (
    <WalletProvider>
      <main className={`${perm_marker.className} flex justify-center h-screen w-screen`}>
        <div className="absolute flex gap-2 top-3 right-3 z-40">
          <TronLink setWallet={setWallet} />
          <LocaleSwitcher />
        </div>
        <div className="my-auto relative">
          <MotionOp opacity={0.4} delay={2.7}>
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