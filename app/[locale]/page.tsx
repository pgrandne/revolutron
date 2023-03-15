'use client';

import { perm_marker } from '@/utils/font';
import { useTranslations } from 'next-intl';
import { LocaleSwitcher, ModalInfo, ModalProgression, MotionFooter, MotionHero, MotionHeroButton, MotionOp } from '../components';
import Image from 'next/image';
import equipmentPic from '@/public/img/equipment.jpg'
import { useState } from 'react';

export default function Index() {
  const tHome = useTranslations('Home')
  const tInfo = useTranslations('Info')
  const tProgression = useTranslations('Progression')
  const [modalInfo, setModalInfo] = useState(false)
  const [deck, setDeck] = useState(false)
  const [modalProgression, setModalProgression] = useState(false)

  return (
    <main className={`${perm_marker.className} flex justify-center h-screen w-screen`}>
      <LocaleSwitcher />
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
          <MotionHeroButton buttonName={tHome('buttonName')} setModalProgression={setModalProgression} />
        </div>
        <MotionFooter setModalInfo={setModalInfo} setDeck={setDeck} />
      </div >
      {modalInfo &&
        <ModalInfo tInfo={tInfo} setModalInfo={setModalInfo} deck={deck} />
      }
      {modalProgression &&
        <ModalProgression setModalProgression={setModalProgression} tProgression={tProgression} />
      }
    </main>
  )
}