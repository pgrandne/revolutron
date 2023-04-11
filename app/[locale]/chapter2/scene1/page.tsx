'use client'

import { redirect } from 'next/navigation';
import { useLocale } from 'next-intl';

const Chap2s1 = () => {
    const locale = useLocale()
    redirect(`/${locale}/construction?source=chap1scene1`);
}

export default Chap2s1;