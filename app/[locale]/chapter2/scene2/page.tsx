'use client'

import { redirect } from 'next/navigation';
import { useLocale } from 'next-intl';

const Chap2s2 = () => {
    const locale = useLocale()
    redirect(`/${locale}/construction?source=chap1scene2`);
}

export default Chap2s2;