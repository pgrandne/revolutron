'use client'

import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export const LocaleSwitcher = () => {

    const locale = useLocale()
    const [selectLang, setSelectLang] = useState(false)
    const [lang, setLang] = useState('')

    useEffect(() => {
        if (!locale || locale === 'en') setLang('gb')
        else setLang(locale)
    }, [locale])

    return (
        <div className="flex gap-1">
            <div
                className="border-2 border-white opacity-60 rounded-md px-1 my-auto cursor-pointer"
                onClick={() => setSelectLang(true)}
            >
                {!selectLang && <span className={`fi fi-${lang}`} />}
                {selectLang &&
                    <ul className="flex gap-2">
                        <li key='en'>
                            <Link href={"/en"}><span className={`fi fi-gb`} /></Link>
                        </li>
                        <li key='fr'>
                            <Link href={"/fr"}><span className={`fi fi-fr`} /></Link>
                        </li>
                        <li key='es'>
                            <Link href={"/es"}><span className={`fi fi-es`} /></Link>
                        </li>
                    </ul>
                }
            </div>
        </div>
    )
}