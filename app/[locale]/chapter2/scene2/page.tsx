'use client'

import { redirect } from 'next/navigation';
import { useLocale } from 'next-intl';

const Construction = () => {
    const locale = useLocale()
    redirect(`/${locale}/construction?source=chap1scene2`);
}

export default Construction;